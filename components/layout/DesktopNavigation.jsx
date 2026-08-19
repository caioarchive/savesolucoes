"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import ServicesDropdown from "@/components/layout/ServicesDropdown";

import { navigation } from "@/data/navigation";

function isRouteActive(pathname, href) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(href);
}

export default function DesktopNavigation() {
  const pathname = usePathname();

  const linkClasses = (href) =>
    [
      "rounded-full px-3.5 py-2 text-sm font-medium",
      "text-neutral-700 transition-colors hover:bg-surface hover:text-black",
      isRouteActive(pathname, href) ? "bg-surface text-black" : "",
    ]
      .filter(Boolean)
      .join(" ");

  return (
    <nav
      className="hidden items-center gap-0.5 xl:flex"
      aria-label="Navegação principal"
    >
      {navigation.map((item) => {
        const isServices = item.label === "Serviços";

        if (!isServices) {
          return (
            <Link
              key={item.href}
              href={item.href}
              className={linkClasses(item.href)}
            >
              {item.label}
            </Link>
          );
        }

        return (
          <ServicesDropdown
            key={item.href}
            triggerClassName={linkClasses(item.href)}
          />
        );
      })}
    </nav>
  );
}
