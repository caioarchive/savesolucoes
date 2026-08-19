export default function Badge({ children, dark = false }) {
  const badgeClasses = [
    "inline-flex items-center gap-2 rounded-full border",
    "px-3 py-1.5 text-xs font-medium uppercase tracking-[.14em]",
    dark
      ? "border-white/20 bg-white/5 text-white"
      : "border-border-strong bg-white text-foreground",
  ].join(" ");

  return (
    <span className={badgeClasses}>
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {children}
    </span>
  );
}
