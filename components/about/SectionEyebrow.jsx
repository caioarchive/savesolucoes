import Badge from "@/components/ui/Badge";

export default function SectionEyebrow({ children, dark = false }) {
  return <Badge dark={dark}>{children}</Badge>;
}
