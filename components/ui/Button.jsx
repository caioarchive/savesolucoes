import Link from "next/link";
export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
  type = "button",
  disabled = false,
  cursor,
  onClick,
}) {
  const baseClasses = [
    "inline-flex min-h-12 shrink-0 items-center justify-center gap-2 whitespace-nowrap",
    "rounded-full px-6 text-sm font-medium",
    "transition duration-300 active:scale-[0.98]",
    "focus-visible:outline-2 focus-visible:outline-offset-2",
    "focus-visible:outline-black",
    "disabled:cursor-not-allowed disabled:opacity-60",
  ].join(" ");

  const variantClasses = {
    primary: "bg-black text-white hover:bg-neutral-800",
    secondary: [
      "border border-border-strong bg-white text-foreground",
      "hover:bg-surface",
    ].join(" "),
    light: "bg-white text-black hover:bg-neutral-100",
    ghost: "text-foreground hover:bg-surface",
  };

  const buttonClasses = [baseClasses, variantClasses[variant], className]
    .filter(Boolean)
    .join(" ");

  if (external) {
    return (
      <a
        className={buttonClasses}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor={cursor}
      >
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link className={buttonClasses} href={href} data-cursor={cursor}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={buttonClasses}
      type={type}
      disabled={disabled}
      data-cursor={cursor}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
