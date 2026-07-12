import { useEffect, useState } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import { AnimatePresence } from "framer-motion";
import { queryClient } from "@/app/queryClient";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import { AppRouter } from "@/routes/AppRouter";
import { LoadingPage } from "@/components/ui/LoadingPage";
import {MuiThemeBridge} from "@/providers/MuiThemeBridge.tsx";

export default function App() {
  const [booting, setBooting] = useState(true);
  useEffect(() => {
     Promise.all([
        document.fonts.load('900 1em IRANRounded'),
        document.fonts.load('900 1em IranYekan'),
     ]).then(() => {
         document.documentElement.classList.add('fonts-ready');
     });
  }, []);
  useEffect(() => {
    const timeout = setTimeout(() => setBooting(false), 1100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <QueryClientProvider client={queryClient}>
        <LanguageProvider>
            <MuiThemeBridge>
                <AnimatePresence mode="wait">{booting && <LoadingPage key="boot" />}</AnimatePresence>
                {!booting && <AppRouter />}
                <Toaster richColors position="top-center" />
            </MuiThemeBridge>
        </LanguageProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
