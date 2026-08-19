import Badge from "@/components/ui/Badge";

export default function SectionHeader({
  eyebrow,
  title,
  text,
  align = "left",
  dark = false,
}) {
  const isCentered = align === "center";
  const wrapperClasses = ["max-w-3xl", isCentered ? "mx-auto text-center" : ""]
    .filter(Boolean)
    .join(" ");
  const titleColor = dark ? "text-white" : "text-foreground";
  const textColor = dark ? "text-neutral-400" : "text-muted";

  return (
    <div className={wrapperClasses}>
      {eyebrow && <Badge dark={dark}>{eyebrow}</Badge>}

      <h2
        className={`mt-6 text-balance text-3xl tracking-[-0.03em] sm:text-4xl lg:text-5xl ${titleColor}`}
      >
        {title}
      </h2>

      {text && (
        <p className={`mt-5 max-w-2xl text-lg leading-8 ${textColor}`}>
          {text}
        </p>
      )}
    </div>
  );
}
