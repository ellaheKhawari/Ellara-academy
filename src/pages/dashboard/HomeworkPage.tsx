import { useMemo } from "react";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { recentHomework } from "@/lib/mockData";
import { useLanguage } from "@/i18n/LanguageProvider";
import { formatNumber } from "@/lib/formatNumber";

export function HomeworkPage() {
    const { t, locale } = useLanguage();

    const columns: GridColDef[] = useMemo(
        () => [
            { field: "title", headerName: t.dashboard.columnAssignment, flex: 1.4, minWidth: 160, align: "center", headerAlign: "center" },
            { field: "status", headerName: t.dashboard.columnStatus, flex: 1, minWidth: 130, align: "center", headerAlign: "center" },
            { field: "score", headerName: t.dashboard.columnScore, flex: 0.6, minWidth: 90, align: "center", headerAlign: "center" },
        ],
        [t]
    );

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
        <div>
            <ScrollReveal>
                <h1 className="font-display text-2xl font-semibold sm:text-3xl">{t.dashboard.homework}</h1>
                <p className="mt-1 text-sm text-current/60">Assignments from your instructors, graded and pending.</p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
                <div className="mt-7 rounded-2xl border text-current border-black/[0.06] bg-white/60 p-4 dark:border-white/[0.08] dark:bg-white/[0.03]">
                    <div style={{ height: 340, width: "100%" }}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            disableRowSelectionOnClick
                            initialState={{ pagination: { paginationModel: { pageSize: 5 } } }}
                            pageSizeOptions={[5, 10]}
                            sx={{ border: "none", fontSize: 13 ,color: "inherit",}}
                        />
                    </div>
                </div>
            </ScrollReveal>
        </div>
    );
}