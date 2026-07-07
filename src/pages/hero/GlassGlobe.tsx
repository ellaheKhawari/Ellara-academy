import { useEffect, useMemo, useRef } from "react";

const LANDMASSES: Array<{ latMin: number; latMax: number; lngMin: number; lngMax: number }> = [
    { latMin: 15, latMax: 72, lngMin: -170, lngMax: -52 },
    { latMin: -56, latMax: 13, lngMin: -82, lngMax: -34 },
    { latMin: 35, latMax: 71, lngMin: -11, lngMax: 42 },
    { latMin: -35, latMax: 37, lngMin: -19, lngMax: 51 },
    { latMin: 5, latMax: 77, lngMin: 42, lngMax: 145 },
    { latMin: -47, latMax: -8, lngMin: 112, lngMax: 179 },
];

function isLand(lat: number, lng: number) {
    return LANDMASSES.some((b) => lat >= b.latMin && lat <= b.latMax && lng >= b.lngMin && lng <= b.lngMax);
}

function unitVector(lat: number, lng: number) {
    const latRad = (lat * Math.PI) / 180;
    const lngRad = (lng * Math.PI) / 180;
    return {
        x: Math.cos(latRad) * Math.sin(lngRad),
        y: -Math.sin(latRad),
        z: Math.cos(latRad) * Math.cos(lngRad),
    };
}

function rotateY(v: { x: number; y: number; z: number }, angle: number) {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    return { x: v.x * cos + v.z * sin, y: v.y, z: -v.x * sin + v.z * cos };
}

function useContinentUnitDots(count: number) {
    return useMemo(() => {
        const pts: Array<{ x: number; y: number; z: number }> = [];
        const goldenAngle = Math.PI * (3 - Math.sqrt(5));
        for (let i = 0; i < count; i++) {
            const y = 1 - (i / (count - 1)) * 2;
            const r = Math.sqrt(1 - y * y);
            const theta = goldenAngle * i;
            const x = Math.cos(theta) * r;
            const z = Math.sin(theta) * r;
            const lat = (Math.asin(y) * 180) / Math.PI;
            const lng = (Math.atan2(x, z) * 180) / Math.PI;
            if (isLand(lat, lng)) pts.push({ x, y: -y, z });
        }
        return pts;
    }, [count]);
}

function buildGridRings(): Array<{ x: number; y: number; z: number }[]> {
    const rings: Array<{ x: number; y: number; z: number }[]> = [];
    const steps = 72;

    for (const lat of [0, 35, -35, 60, -60]) {
        const ring: { x: number; y: number; z: number }[] = [];
        for (let i = 0; i <= steps; i++) {
            const lng = (i / steps) * 360 - 180;
            ring.push(unitVector(lat, lng));
        }
        rings.push(ring);
    }
    // چند نصف‌النهار (خطوط طول)
    for (const lng of [0, 45, 90, 135]) {
        const ring: { x: number; y: number; z: number }[] = [];
        for (let i = 0; i <= steps; i++) {
            const lat = (i / steps) * 180 - 90;
            ring.push(unitVector(lat, lng));
        }
        rings.push(ring);
    }
    return rings;
}

export function GlassGlobe() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const sizeRef = useRef({ width: 420, height: 420, radius: 197 });

    const unitDots = useContinentUnitDots(2600);
    const gridRings = useMemo(() => buildGridRings(), []);

    useEffect(() => {
        const container = containerRef.current;
        const canvas = canvasRef.current;
        if (!container || !canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resizeObserver = new ResizeObserver((entries) => {
            const width = entries[0]?.contentRect.width ?? container.offsetWidth;
            const dpr = window.devicePixelRatio || 1;
            canvas.width = width * dpr;
            canvas.height = width * dpr;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${width}px`;
            sizeRef.current = { width, height: width, radius: (width / 2) * 0.94 };
        });
        resizeObserver.observe(container);

        let angle = 0;
        let raf = 0;
        let last = performance.now();

        const frame = (now: number) => {
            const dt = (now - last) / 1000;
            last = now;
            angle += dt * ((Math.PI * 2) / 46);

            const { width, height, radius } = sizeRef.current;
            const dpr = window.devicePixelRatio || 1;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            ctx.clearRect(0, 0, width, height);
            const cx = width / 2;
            const cy = height / 2;

            for (const ring of gridRings) {
                ctx.beginPath();
                ring.forEach((v, i) => {
                    const r = rotateY(v, angle);
                    const x = cx + r.x * radius;
                    const y = cy + r.y * radius;
                    if (i === 0) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                });
                ctx.strokeStyle = "rgba(201,201,206,0.14)";
                ctx.lineWidth = 1;
                ctx.stroke();
            }

            for (const v of unitDots) {
                const r = rotateY(v, angle);
                const depth = (r.z + 1) / 2;
                const x = cx + r.x * radius;
                const y = cy + r.y * radius;
                ctx.beginPath();
                ctx.arc(x, y, 1.3, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(244,244,248,${0.12 + depth * 0.55})`;
                ctx.fill();
            }

            raf = requestAnimationFrame(frame);
        };

        raf = requestAnimationFrame(frame);

        return () => {
            resizeObserver.disconnect();
            cancelAnimationFrame(raf);
        };
    })
    return (
        <div
            ref={containerRef}
            className="relative mx-auto aspect-square w-full max-w-[420px] animate-[float_6s_ease-in-out_infinite]"
            style={{ perspective: "1400px" }}
        >
            <div
                className="pointer-events-none absolute -inset-12 rounded-full opacity-50 blur-3xl"
                style={{ background: "radial-gradient(circle, rgba(201,201,206,0.35), transparent 70%)" }}
            />

            <div
                className="pointer-events-none absolute -inset-3 animate-[spin_14s_linear_infinite] rounded-full opacity-70"
                style={{
                    background:
                        "conic-gradient(from 0deg, transparent 0%, rgba(255,255,255,0.5) 8%, transparent 18%, transparent 100%)",
                    filter: "blur(6px)",
                }}
            />

            <div
                className="absolute inset-0 rounded-full border border-white/20"
                style={{
                    background:
                        "radial-gradient(circle at 30% 26%, rgba(255,255,255,0.55), rgba(201,201,206,0.12) 40%, rgba(10,10,12,0.25) 78%)",
                    boxShadow:
                        "inset 0 0 60px rgba(255,255,255,0.12), inset -10px -30px 70px rgba(0,0,0,0.55), inset 20px 20px 40px rgba(255,255,255,0.06), 0 40px 90px -25px rgba(0,0,0,0.6)",
                }}
            />
            <div
                className="pointer-events-none absolute left-[12%] top-[10%] h-[30%] w-[30%] rounded-full opacity-70 blur-md"
                style={{ background: "radial-gradient(circle, rgba(255,255,255,0.85), transparent 70%)" }}
            />

            <canvas ref={canvasRef} className="absolute inset-0 rounded-full" />

            <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center">
                <span className="font-display text-xl font-semibold text-white drop-shadow-lg">Lingova</span>
                <span className="mt-0.5 text-[10px] uppercase tracking-[0.2em] text-white/45">5 Languages, 1 World</span>
            </div>
        </div>
    );
}