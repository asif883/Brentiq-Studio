"use client";

import Link from "next/link";
import { useState } from "react";

function ArrowIcon() {
  return (
    <svg
      className="h-5 w-5 fill-none stroke-current [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.65]"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M4 12h15M14 6l6 6-6 6" />
    </svg>
  );
}

const NAV_LINKS = [
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/career", label: "Career" },
  { href: "/more", label: "More" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-[72px] w-full max-w-6xl items-center justify-between rounded-2xl border border-[#e5e7eb] bg-white px-4 text-[15px] font-semibold tracking-[-0.12px] text-black shadow-[0_8px_22px_rgba(17,24,39,0.1)] sm:px-6"
      >
        {/* Logo */}
        <Link href="/" aria-label="Brentiq Studio home" className="shrink-0">
          <span className="text-lg font-bold tracking-tight text-black">
            Brentiq Studio
          </span>
        </Link>

        {/* Desktop menu */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-black/90 transition-colors hover:text-black"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA button */}
        <Link
          href="/contact"
          className="dm-project-cta relative hidden h-[52px] w-[208px] items-center justify-between overflow-hidden rounded-full py-[6px] pl-5 pr-[6px] text-[14px] font-semibold md:flex"
        >
          <span className="relative z-[2]">Start a Project</span>
          <i className="relative z-[2] grid h-9 w-9 place-items-center rounded-full bg-white text-[#7553c8]">
            <ArrowIcon />
          </i>
        </Link>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-black/10 text-black md:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current [stroke-linecap:round] [stroke-width:1.8]">
            {isMenuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu panel */}
      {isMenuOpen && (
        <div className="mx-auto mt-2 w-full max-w-6xl rounded-2xl border border-[#e5e7eb] bg-white p-4 text-black shadow-[0_8px_22px_rgba(17,24,39,0.1)] md:hidden">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-black/90"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="dm-project-cta relative mt-4 flex h-[52px] w-full items-center justify-between overflow-hidden rounded-full py-[6px] pl-5 pr-[6px] text-[14px] font-semibold"
          >
            <span className="relative z-[2]">Start a Project</span>
            <i className="relative z-[2] grid h-9 w-9 place-items-center rounded-full bg-white text-[#7553c8]">
              <ArrowIcon />
            </i>
          </Link>
        </div>
      )}

      <style>{`
        .dm-project-cta {
          background: #8a62ed;
          isolation: isolate;
          transition: box-shadow 260ms ease;
        }

        .dm-project-cta::before {
          position: absolute;
          z-index: 0;
          top: 50%;
          left: 50%;
          width: 220%;
          aspect-ratio: 1;
          background: conic-gradient(
            from 0deg,
            transparent 0deg 282deg,
            #7950df 310deg,
            #ffffff 327deg,
            #8a62ed 342deg,
            transparent 360deg
          );
          content: "";
          animation: dm-border-light 2.7s linear infinite;
          transform-origin: center;
          transition: opacity 220ms ease;
        }

        @keyframes dm-border-light {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        .dm-project-cta::after {
          position: absolute;
          z-index: 1;
          inset: 1px;
          border-radius: 999px;
          background: linear-gradient(112deg, #f0ecff 18%, #ffffff 72%, #e4dcff 100%);
          transition: background 260ms ease;
          content: "";
        }

        @media (prefers-reduced-motion: reduce) {
          .dm-project-cta::before {
            animation: none;
          }
        }
      `}</style>
    </header>
  );
}