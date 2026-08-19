import Image from "next/image";
import Link from "next/link";

export default function Logo({ light = false, compact = false }) {
  const src = light
    ? "/brand/save-logo-light.png"
    : "/brand/save-logo-dark.png";
  const widthClasses = light
    ? "w-[210px] sm:w-[230px]"
    : compact
      ? "w-[122px] lg:w-[145px]"
      : "w-[122px] lg:w-[155px]";

  return (
    <Link
      href="/"
      className="inline-flex shrink-0 items-center"
      aria-label="Save Soluções — início"
    >
      <Image
        src={src}
        alt="Save Soluções Contábeis e Empresariais"
        width={230}
        height={70}
        priority={!light}
        className={`h-auto shrink-0 object-contain transition-[width] duration-200 ${widthClasses}`}
      />
    </Link>
  );
}
