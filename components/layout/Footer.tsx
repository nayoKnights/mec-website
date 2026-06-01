"use client";

import React from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy-900 text-white pt-16 pb-6">
      <div className="section-container">
        {/* ─── Main Footer Grid ────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="font-display font-700 text-lg mb-4">Marble</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Discovering the creativity in you through Montessori-inspired,
              student-centered education.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              <SocialIcon href="https://facebook.com/mec" icon={Facebook} label="Facebook" />
              <SocialIcon href="https://instagram.com/mec" icon={Instagram} label="Instagram" />
              <SocialIcon href="https://twitter.com/mec" icon={Twitter} label="Twitter" />
              <SocialIcon href="https://linkedin.com/company/mec" icon={Linkedin} label="LinkedIn" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body font-700 text-sm uppercase tracking-wider text-gray-200 mb-4">
              School
            </h4>
            <ul className="space-y-2 text-sm">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/academics">Academics</FooterLink>
              <FooterLink href="/admissions">Admissions</FooterLink>
              <FooterLink href="/staff">Our Team</FooterLink>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-body font-700 text-sm uppercase tracking-wider text-gray-200 mb-4">
              Community
            </h4>
            <ul className="space-y-2 text-sm">
              <FooterLink href="/events">Events</FooterLink>
              <FooterLink href="/news">News & Updates</FooterLink>
              <FooterLink href="/gallery">Gallery</FooterLink>
              <FooterLink href="/contact">Contact Us</FooterLink>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-body font-700 text-sm uppercase tracking-wider text-gray-200 mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="flex-shrink-0 mt-0.5 text-sienna" />
                <span>Accra, Greater Accra, Ghana</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="flex-shrink-0 mt-0.5 text-sienna" />
                <a href="tel:+233XXX" className="hover:text-sienna transition-colors">
                  +233 XXX XXX XXXX
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="flex-shrink-0 mt-0.5 text-sienna" />
                <a href="mailto:info@mec.edu.gh" className="hover:text-sienna transition-colors">
                  info@mec.edu.gh
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ─── Divider ──────────────────────────────────────────────────────── */}
        <div className="border-t border-navy-700 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <div>© 2026 Marble Educational Center. All rights reserved.</div>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
            <Link href="/sitemap" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─────────────────────────────────────────────────────────────────────────────

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200"
      >
        {children}
      </Link>
    </li>
  );
}

function SocialIcon({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ComponentType<any>;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 rounded-full bg-sienna/20 text-sienna flex items-center justify-center
                 hover:bg-sienna hover:text-white transition-all duration-300"
      aria-label={label}
    >
      <Icon size={16} />
    </a>
  );
}
