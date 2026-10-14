"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { ChevronDown } from "lucide-react";

export default function ServicesDropdown({
  id,
  label,
  items,
  pathname,
  triggerClassName,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const triggerRef = useRef(null);

  function closeMenu({ restoreFocus = false } = {}) {
    setIsOpen(false);

    if (restoreFocus) {
      triggerRef.current?.focus();
    }
  }

  useEffect(() => {
    function handlePointerDown(event) {
      if (!containerRef.current?.contains(event.target)) {
        closeMenu();
      }
    }

    function handleKeyDown(event) {
      if (event.key === "Escape" && isOpen) {
        closeMenu({ restoreFocus: true });
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      className="relative"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          closeMenu();
        }
      }}
    >
      <button
        ref={triggerRef}
        type="button"
        className={triggerClassName}
        onClick={() => setIsOpen((current) => !current)}
        aria-expanded={isOpen}
        aria-controls={id}
      >
        <span className="flex items-center gap-1">
          {label}
          <span className={isOpen ? "rotate-180" : undefined}>
            <ChevronDown size={14} aria-hidden="true" />
          </span>
        </span>
      </button>

      <div
        id={id}
        hidden={!isOpen}
        className="absolute left-0 top-full z-30 w-80 pt-3"
      >
        <ul className="rounded-[20px] border border-black/10 bg-white/90 p-2 shadow-[0_18px_50px_rgba(0,0,0,0.08)] backdrop-blur-xl">
          {items.map((item) => (
            <li
              key={item.href}
              className={
                item.separated ? "mt-2 border-t border-border pt-2" : undefined
              }
            >
              <Link
                href={item.href}
                onClick={() => closeMenu()}
                aria-current={
                  pathname === item.href || pathname.startsWith(`${item.href}/`)
                    ? "page"
                    : undefined
                }
                className="block rounded-xl px-4 py-3 text-sm text-neutral-700 transition-colors duration-200 hover:bg-surface hover:text-black focus-visible:bg-surface focus-visible:text-black focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-neutral-950 motion-reduce:duration-0"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
