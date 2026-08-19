const fieldClasses = [
  "mt-2 w-full rounded-xl border border-border bg-white",
  "px-4 py-3.5 text-base outline-none transition",
  "placeholder:text-neutral-400",
  "focus:border-border-strong focus:ring-4 focus:ring-neutral-100",
].join(" ");

export default function FormField({
  label,
  name,
  type = "text",
  required = false,
  multiline = false,
  ...props
}) {
  const sharedProps = {
    className: multiline ? `${fieldClasses} min-h-32 resize-y` : fieldClasses,
    name,
    required,
    ...props,
  };

  return (
    <label className="block text-sm font-medium text-foreground">
      {label}
      {required && <span aria-hidden="true"> *</span>}

      {multiline ? (
        <textarea {...sharedProps} />
      ) : (
        <input type={type} {...sharedProps} />
      )}
    </label>
  );
}
