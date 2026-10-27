"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import ServicesDropdown from "@/components/layout/ServicesDropdown";

import {
  businessNavigation,
  navigation,
  servicesNavigation,
} from "@/data/navigation";

function isRouteActive(pathname, href) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function DesktopNavigation({ light = false }) {
  const pathname = usePathname();

  const linkClasses = (isActive) => {
    return [
      "rounded-full px-3.5 py-2 text-base font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 motion-reduce:duration-0",
      light
        ? isActive
          ? "bg-white text-neutral-950 hover:bg-neutral-100 hover:text-neutral-950 focus-visible:ring-white focus-visible:ring-offset-neutral-950"
          : "text-neutral-300 hover:bg-white/10 hover:text-white focus-visible:ring-white focus-visible:ring-offset-neutral-950"
        : isActive
          ? "bg-neutral-100 text-neutral-950 hover:bg-neutral-100 hover:text-neutral-950 focus-visible:ring-black focus-visible:ring-offset-white"
          : "text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950 focus-visible:ring-black focus-visible:ring-offset-white",
    ].join(" ");
  };

  return (
    <nav
      className="hidden items-center gap-0.5 xl:flex"
      aria-label="Navegação principal"
    >
      {navigation.map((item) => {
        if (!item.type) {
          const isActive = isRouteActive(pathname, item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={linkClasses(isActive)}
              aria-current={isActive ? "page" : undefined}
            >
              {item.label}
            </Link>
          );
        }

        const isServices = item.type === "services";
        const isActive = isServices
          ? isRouteActive(pathname, "/servicos") ||
            isRouteActive(pathname, "/segmentos")
          : businessNavigation.some(({ href }) =>
              isRouteActive(pathname, href),
            );

        return (
          <ServicesDropdown
            key={item.type}
            id={`${item.type}-menu`}
            label={item.label}
            items={isServices ? servicesNavigation : businessNavigation}
            pathname={pathname}
            triggerClassName={linkClasses(isActive)}
          />
        );
      })}
    </nav>
  );
}
