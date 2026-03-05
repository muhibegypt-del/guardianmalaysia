"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-guardian-black border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo & tagline */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <a href="/" className="flex-shrink-0 flex items-center gap-2 mb-4">
              <span className="text-lg sm:text-xl font-black tracking-[0.2em] text-white uppercase">
                Guardian
              </span>
              <span className="text-lg sm:text-xl font-medium tracking-[0.2em] text-white/70 uppercase">
                Malaysia
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm text-white/50 leading-relaxed font-medium">
              Guardian is a registered 501(c)(3) nonprofit. Every donation is tax-deductible.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/40">
              Navigation
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a href="/partners" className="text-sm text-white/60 hover:text-white transition-colors">
                  Our Partners
                </a>
              </li>
              <li>
                <a href="https://www.guardiangym.org/" target="_blank" rel="noopener noreferrer" className="text-sm text-white/60 hover:text-white transition-colors">
                  About Guardian Project
                </a>
              </li>
              <li>
                <a href="mailto:info@guardianmalaysia.com" className="text-sm text-white/60 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter + Social */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/40">
              Stay Updated
            </h3>
            <form
              className="mt-4 flex gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 rounded-sm bg-white/10 px-4 py-2.5 text-sm text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-guardian-crimson transition-all"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="rounded-sm bg-guardian-crimson px-4 py-2.5 text-sm font-bold text-white transition-all hover:bg-guardian-red active:scale-95"
              >
                Subscribe
              </button>
            </form>

            {/* Social icons */}
            <div className="mt-6 flex gap-4">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/guardianmalaysia/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Guardian Malaysia. All rights reserved.
          </p>
          <a
            href="https://www.guardiangym.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-white/30 hover:text-white/60 transition-colors"
          >
            guardianproject.org
          </a>
        </div>
      </div>
    </footer>
  );
}
