import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassEffectProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  href?: string;
  target?: string;
  ariaLabel?: string;
}

export function GlassEffect({
  children,
  className = "",
  style = {},
  href,
  target = "_blank",
  ariaLabel,
}: GlassEffectProps) {
  const glassStyle: React.CSSProperties = {
    boxShadow:
      "0 6px 24px rgba(0,0,0,0.18), 0 0 1px rgba(255,255,255,0.4) inset",
    transitionTimingFunction: "cubic-bezier(0.175, 0.885, 0.32, 2.2)",
    ...style,
  };

  const content = (
    <div
      className={cn(
        "relative overflow-hidden rounded-full transition-all duration-500",
        className,
      )}
      style={glassStyle}
    >
      {/* Glass layers */}
      <div className="absolute inset-0 z-0 rounded-full bg-white/10 backdrop-blur-xl [filter:url(#liquid-glass-distort)]" />
      <div className="absolute inset-0 z-10 rounded-full bg-white/15 dark:bg-white/8" />
      <div className="absolute inset-0 z-20 rounded-full shadow-[inset_2px_2px_1px_0_rgba(255,255,255,0.6),inset_-2px_-2px_1px_0_rgba(255,255,255,0.25)]" />
      {/* Content */}
      <div className="relative z-30">{children}</div>
    </div>
  );

  return href ? (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      aria-label={ariaLabel}
      className="inline-block"
    >
      {content}
    </a>
  ) : (
    content
  );
}

interface DockIcon {
  icon: ReactNode;
  label: string;
  href?: string;
  onClick?: () => void;
}

export function GlassDock({ icons }: { icons: DockIcon[] }) {
  return (
    <GlassEffect className="px-3 py-2">
      <ul className="flex items-center gap-1">
        {icons.map((item) => {
          const inner = (
            <span className="flex h-10 w-10 items-center justify-center rounded-full text-foreground/85 transition-transform duration-300 hover:-translate-y-1 hover:scale-110 hover:text-foreground">
              {item.icon}
            </span>
          );
          return (
            <li key={item.label}>
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  title={item.label}
                >
                  {inner}
                </a>
              ) : (
                <button type="button" onClick={item.onClick} aria-label={item.label} title={item.label}>
                  {inner}
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </GlassEffect>
  );
}

export function GlassFilter() {
  return (
    <svg className="pointer-events-none absolute h-0 w-0" aria-hidden="true">
      <defs>
        <filter id="liquid-glass-distort" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.008 0.008" numOctaves="2" seed="92" result="noise" />
          <feGaussianBlur in="noise" stdDeviation="2" result="blurred" />
          <feDisplacementMap in="SourceGraphic" in2="blurred" scale="60" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
    </svg>
  );
}