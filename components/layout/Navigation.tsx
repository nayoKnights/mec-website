"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/lib/mock-data";
import type { NavItem } from "@/types";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll for nav elevation
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "sticky top-0 z-40 transition-all duration-300",
        "bg-white",
        scrolled && "shadow-md"
      )}
    >
      {/* ─── Top Bar: Contact + Portal ────────────────────────────────────── */}
      <div className="hidden sm:flex items-center justify-between bg-navy-100 px-4 py-2 text-xs">
        <span className="text-navy">📞 +233 55 149 7440| ✉️ info@mec-edu.com</span>
        <div className="flex gap-3">
          <Link href="/portal" className="text-navy hover:text-sienna transition-colors">
            Student Portal
          </Link>
          <span className="text-navy-300">|</span>
          <Link href="/admissions/apply" className="text-sienna font-bold hover:text-sienna-600 transition-colors">
            Apply Now
          </Link>
        </div>
      </div>

      {/* ─── Main Header ──────────────────────────────────────────────────── */}
      <div className="section-container flex items-center justify-between py-3 sm:py-4">
        {/* Logo + School Name */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-navy to-navy-700 rounded-xl
                          flex items-center justify-center text-white font-display font-900
                          shadow-lg group-hover:shadow-xl transition-shadow">
            M
          </div>
          <div className="flex flex-col leading-snug hidden sm:flex">
            <span className="font-display font-700 text-sm text-navy">Marble</span>
            <span className="text-xs text-navy-600">Education Center</span>
          </div>
          {/* Mobile-only: just "M" */}
          <div className="sm:hidden flex flex-col leading-snug">
            <span className="font-display font-700 text-xs text-navy">MEC</span>
          </div>
        </Link>

        {/* ─── Desktop Menu ────────────────────────────────────────────────── */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <NavMenuDesktop key={item.href} item={item} />
          ))}
        </div>

        {/* ─── Right Side: Portal + Mobile Menu Toggle ────────────────────── */}
        <div className="flex items-center gap-3">
          <Link
            href="/portal"
            className="hidden md:inline-flex btn btn-secondary text-xs sm:text-sm px-3 sm:px-4 py-2"
          >
            Portal
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-navy hover:bg-navy-50 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* ─── Mobile Menu ──────────────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-navy-100 bg-white overflow-hidden"
          >
            <div className="section-container py-4 flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <NavMenuMobile
                  key={item.href}
                  item={item}
                  isOpen={activeSubmenu === item.href}
                  onToggle={() => setActiveSubmenu(activeSubmenu === item.href ? null : item.href)}
                />
              ))}
              <Link
                href="/admissions/apply"
                className="mt-4 btn btn-primary w-full text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Apply Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Desktop Submenu Component
// ─────────────────────────────────────────────────────────────────────────────

function NavMenuDesktop({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={item.href}
        className={cn(
          "font-body font-500 text-sm flex items-center gap-1 py-2",
          "text-navy hover:text-sienna transition-colors",
          "pb-0.5 border-b-2 border-transparent group-hover:border-sienna"
        )}
      >
        {item.label}
        {item.children && <ChevronDown size={14} />}
      </Link>

      {/* Dropdown */}
      <AnimatePresence>
        {open && item.children && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 mt-0 bg-white rounded-lg shadow-card-lg 
                       border border-navy-100 overflow-hidden min-w-[200px] z-50"
          >
            <div className="py-2">
              {item.children.map((child, i) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className={cn(
                    "block px-4 py-2 text-sm text-navy hover:bg-navy-50 hover:text-sienna",
                    "transition-colors border-l-2 border-transparent hover:border-sienna",
                    i === 0 && "rounded-t-lg",
                    i === item.children!.length - 1 && "rounded-b-lg"
                  )}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Mobile Menu Item (accordion style)
// ─────────────────────────────────────────────────────────────────────────────

function NavMenuMobile({
  item,
  isOpen,
  onToggle,
}: {
  item: NavItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-navy-100">
      <button
        onClick={onToggle}
        className={cn(
          "w-full flex items-center justify-between py-3 px-0 font-body font-600 text-navy",
          "hover:text-sienna transition-colors text-left"
        )}
      >
        <Link href={item.href} className="flex-1">
          {item.label}
        </Link>
        {item.children && (
          <ChevronDown
            size={16}
            className={cn("transition-transform", isOpen && "rotate-180")}
          />
        )}
      </button>

      <AnimatePresence>
        {isOpen && item.children && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden bg-navy-50"
          >
            <div className="py-2 pl-4 flex flex-col gap-1">
              {item.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="text-sm text-navy hover:text-sienna py-1.5 transition-colors"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
