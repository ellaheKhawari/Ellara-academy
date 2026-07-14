import { useEffect, useMemo, useState } from "react";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { recentHomework } from "@/lib/mockData";
import { useLanguage } from "@/i18n/LanguageProvider";
import { formatNumber } from "@/lib/formatNumber";

function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 640);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);
    return isMobile;
}

export function HomeworkPage() {
    const { t, locale } = useLanguage();
    const isMobile = useIsMobile();

    const columns: GridColDef[] = useMemo(() => {
        const base: GridColDef[] = [
            { field: "title", headerName: t.dashboard.columnAssignment, flex: 1.6, minWidth: 140, align: "center", headerAlign: "center" },
            { field: "status", headerName: t.dashboard.columnStatus, flex: 1, minWidth: 110, align: "center", headerAlign: "center" },
        ];
        if (!isMobile) {
            base.push({ field: "score", headerName: t.dashboard.columnScore, flex: 0.6, minWidth: 90, align: "center", headerAlign: "center" });
        }
        return base;
    }, [t, isMobile]);

    const rows = useMemo(() => {
        const localized = recentHomework.map((h) => ({
            id: h.id,
            title: h.title[locale],
            status: h.status === "graded" ? t.dashboard.statusGraded : t.dashboard.statusPending,
            score: h.score !== null ? `${formatNumber(h.score, locale)}%` : "—",
        }));
        return [...localized, ...localized.map((r) => ({ ...r, id: r.id + 100 }))];
    }, [locale, t]);

    return (
        <div className="min-w-0">
            <ScrollReveal>
                <h1 className="font-display text-2xl font-semibold sm:text-3xl">{t.dashboard.homework}</h1>
                <p className="mt-1 text-sm text-current/60">{t.dashboard.p3}</p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
                <div className="mt-7 min-w-0 overflow-hidden rounded-2xl border border-black/[0.06] bg-white/60 p-4 text-current dark:border-white/[0.08] dark:bg-white/[0.03]">
                    <div className="min-w-0">
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            disableRowSelectionOnClick
                            autoHeight
                            initialState={{ pagination: { paginationModel: { pageSize: 5 } } }}
                            pageSizeOptions={[5, 10]}
                            sx={{ border: "none", fontSize: 13, color: "inherit" }}
                        />
                    </div>
                </div>
            </ScrollReveal>
        </div>
    );
}