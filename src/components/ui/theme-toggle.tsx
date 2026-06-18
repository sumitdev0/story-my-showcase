import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const dark = stored ? stored === "dark" : prefersDark;
    setIsDark(dark);
    document.documentElement.classList.toggle("dark", dark);
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      type="button"
      onClick={toggle}
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle color theme"
      className={cn(
        "relative inline-flex h-8 w-16 shrink-0 items-center rounded-full border border-border bg-card transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
    >
      <span className="pointer-events-none absolute inset-0 flex items-center justify-between px-1.5 text-muted-foreground">
        <Sun size={12} strokeWidth={1.75} className={cn("transition-opacity", isDark ? "opacity-40" : "opacity-100")} />
        <Moon size={12} strokeWidth={1.75} className={cn("transition-opacity", isDark ? "opacity-100" : "opacity-40")} />
      </span>
      <span
        className={cn(
          "relative z-10 inline-flex h-6 w-6 items-center justify-center rounded-full bg-foreground text-background shadow-sm transition-transform duration-300 ease-out",
          isDark ? "translate-x-9" : "translate-x-1",
        )}
      >
        {isDark ? <Moon size={12} strokeWidth={2} /> : <Sun size={12} strokeWidth={2} />}
      </span>
    </button>
  );
}