import type { PropsWithChildren } from "react";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ThemeProvider } from "@/components/theme/theme-provider";

export function SiteShell({ children }: PropsWithChildren) {
  return (
    <ThemeProvider>
      <div className="relative overflow-hidden">
        <div className="fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.24)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.24)_1px,transparent_1px)] bg-[size:28px_28px] opacity-50 [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.35),transparent_80%)] dark:bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]" />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </div>
    </ThemeProvider>
  );
}
