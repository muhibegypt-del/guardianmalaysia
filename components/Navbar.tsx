"use client";

import { useEffect, useState, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#guide" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Partners", href: "/partners" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      setMobileOpen(false);

      // If it's a hash link on the homepage
      if (href.startsWith("/#")) {
        e.preventDefault();
        const id = href.replace("/#", "");

        if (pathname === "/") {
          // Already on homepage, just scroll
          const el = document.getElementById(id);
          if (el) {
            const navHeight = 80;
            const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
            window.scrollTo({ top, behavior: "smooth" });
          }
        } else {
          // Navigate to homepage first, then scroll
          router.push("/");
          // Wait for navigation, then scroll
          setTimeout(() => {
            const el = document.getElementById(id);
            if (el) {
              const navHeight = 80;
              const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
              window.scrollTo({ top, behavior: "smooth" });
            }
          }, 300);
        }
      } else if (href === "/") {
        e.preventDefault();
        if (pathname === "/") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          router.push("/");
        }
      }
      // For non-hash, non-home links (like /partners), let default behavior handle it
    },
    [pathname, router]
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled || pathname !== "/"
        ? "bg-guardian-black/95 backdrop-blur-sm shadow-lg"
        : "bg-transparent"
        }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => handleNavClick(e, "/")}
            className="flex-shrink-0 flex items-center gap-2"
          >
            <span className="text-lg sm:text-xl font-black tracking-[0.2em] text-white uppercase">
              Guardian
            </span>
            <span className="text-lg sm:text-xl font-medium tracking-[0.2em] text-white/70 uppercase hidden sm:block">
              Malaysia
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://givebutter.com/guardianmalaysia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-sm bg-guardian-crimson px-6 py-2.5 text-sm font-bold text-white transition-all hover:bg-guardian-red hover:scale-105 active:scale-95"
            >
              Donate
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden relative z-[110] flex flex-col justify-center items-center w-10 h-10 gap-1.5"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""
                }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""
                }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 z-[105] bg-guardian-black transition-all duration-300 ${mobileOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
          }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-2xl font-bold text-white hover:text-guardian-red transition-colors"
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://givebutter.com/guardianmalaysia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-sm bg-guardian-crimson px-8 py-3 text-lg font-bold text-white transition-all hover:bg-guardian-red"
            onClick={() => setMobileOpen(false)}
          >
            Donate
          </a>
        </div>
      </div>
    </nav>
  );
}

