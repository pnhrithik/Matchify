import { Moon, Sun } from "lucide-react";
import Switch from "@/components/ui/switch";
import { useTheme } from "@/components/theme/theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const checked = theme === "dark";

  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-brand-blue/10 bg-white/70 px-3 py-2 backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
      <Sun
        size={14}
        className={checked ? "text-slate-400" : "text-amber-500"}
      />
      <Switch checked={checked} onCheckedChange={toggleTheme} />
      <Moon
        size={14}
        className={checked ? "text-sky-200" : "text-slate-400"}
      />
    </div>
  );
}
