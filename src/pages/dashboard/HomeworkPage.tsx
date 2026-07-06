import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { recentHomework } from "@/lib/mockData";
import { useLanguage } from "@/i18n/LanguageProvider";

const columns: GridColDef[] = [
  { field: "title", headerName: "Assignment", flex: 1.6, minWidth: 200 },
  { field: "status", headerName: "Status", flex: 1, minWidth: 140 },
  { field: "score", headerName: "Score", flex: 0.6, minWidth: 100 },
];

export function HomeworkPage() {
  const { t } = useLanguage();

  return (
    <div>
      <ScrollReveal>
        <h1 className="font-display text-2xl font-semibold sm:text-3xl">{t.dashboard.homework}</h1>
        <p className="mt-1 text-sm text-current/60">Assignments from your instructors, graded and pending.</p>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="mt-7 rounded-2xl border border-black/[0.06] bg-white/60 p-4 dark:border-white/[0.08] dark:bg-white/[0.03]">
          <div style={{ height: 340, width: "100%" }}>
            <DataGrid
              rows={[...recentHomework, ...recentHomework.map((r) => ({ ...r, id: r.id + 100 }))]}
              columns={columns}
              disableRowSelectionOnClick
              initialState={{ pagination: { paginationModel: { pageSize: 5 } } }}
              pageSizeOptions={[5, 10]}
              sx={{ border: "none", fontSize: 13 }}
            />
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
