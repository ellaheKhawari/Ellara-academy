import { useMemo, type ReactNode } from "react";
import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material/styles";
import { useTheme } from "next-themes";
import { useLanguage } from "@/i18n/LanguageProvider";

export function MuiThemeBridge({ children }: { children: ReactNode }) {
    const { resolvedTheme } = useTheme();
    const { dir } = useLanguage();

    const muiTheme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode: resolvedTheme === "dark" ? "dark" : "light",
                },
                typography: {
                    fontFamily:
                        dir === "rtl"
                            ? '"Iranyekan", "Inter", system-ui, sans-serif'
                            : '"Inter", system-ui, sans-serif',
                },
                direction: dir,
            }),
        [resolvedTheme, dir]
    );

    return <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>;
}