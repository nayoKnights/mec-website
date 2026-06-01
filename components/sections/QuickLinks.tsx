"use client";

import React from "react";
import Link from "next/link";
import {
  ClipboardList,
  Calendar,
  Users,
  Lock,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { QuickLink } from "@/types";

interface QuickLinksProps {
  links?: QuickLink[];
}

const ICON_MAP = {
  admissions: ClipboardList,
  events:     Calendar,
  staff:      Users,
  portal:     Lock,
  gallery:    null,
  news:       null,
};

const COLOR_SCHEMES = {
  sienna: "bg-sienna-50 hover:bg-sienna-100 text-sienna border-sienna-200",
  navy:   "bg-navy-100 hover:bg-navy-200 text-navy border-navy-300",
  green:  "bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border-emerald-200",
  amber:  "bg-amber-50 hover:bg-amber-100 text-amber-700 border-amber-300",
};

export function QuickLinks({ links }: QuickLinksProps) {
  const defaultLinks: QuickLink[] = [
    {
      label:       "Admissions",
      href:        "/admissions",
      description: "Apply for the upcoming term",
      icon:        "admissions",
      colorScheme: "sienna",
    },
    {
      label:       "Events",
      href:        "/events",
      description: "Upcoming school activities",
      icon:        "events",
      colorScheme: "navy",
    },
    {
      label:       "Staff Directory",
      href:        "/staff",
      description: "Meet our dedicated team",
      icon:        "staff",
      colorScheme: "green",
    },
    {
      label:       "Student Portal",
      href:        "/portal",
      description: "Grades, timetables & reports",
      icon:        "portal",
      colorScheme: "amber",
    },
  ];

  const itemsToRender = links || defaultLinks;

  return (
    <section className="py-8 md:py-12 bg-cream">
      <div className="section-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {itemsToRender.map((item, idx) => {
            const Icon = ICON_MAP[item.icon as keyof typeof ICON_MAP];
            const colorClass = COLOR_SCHEMES[item.colorScheme];

            return (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "block p-5 md:p-6 rounded-xl border-2 transition-all duration-300",
                    "hover:shadow-card-md hover:-translate-y-1 group",
                    colorClass
                  )}
                >
                  {/* Icon */}
                  {Icon && (
                    <div className="mb-3 inline-flex p-2.5 rounded-lg bg-current/20">
                      <Icon size={20} />
                    </div>
                  )}

                  {/* Label */}
                  <h3 className="font-body font-700 text-base mb-1 group-hover:text-sienna
                                transition-colors">
                    {item.label}
                  </h3>

                  {/* Description */}
                  <p className="text-xs md:text-sm opacity-75 mb-3 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Arrow */}
                  <div className="inline-flex items-center gap-1 text-xs font-700 uppercase
                                  tracking-wide group-hover:translate-x-1 transition-transform">
                    Learn More
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
