"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, MapPin, ChevronRight } from "lucide-react";
import { formatEventDate, eventTypeColor } from "@/lib/utils";
import type { SchoolEvent } from "@/types";

interface EventsSectionProps {
  events: SchoolEvent[];
  maxItems?: number;
}

const EVENT_TYPE_EMOJI = {
  academic:  "📚",
  sports:    "🏆",
  arts:      "🎨",
  community: "🤝",
  holiday:   "🎉",
};

export function EventsSection({ events, maxItems = 3 }: EventsSectionProps) {
  const futureEvents = events
    .filter((e) => new Date(e.date) > new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, maxItems);

  return (
    <section className="py-12 md:py-16 bg-cream">
      <div className="section-container">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <div>
            <h2 className="section-title text-3xl md:text-4xl mb-2">Upcoming Events</h2>
            <p className="text-navy-600 text-sm md:text-base">
              Important dates and activities coming this term
            </p>
          </div>
          <Link
            href="/events"
            className="hidden md:flex items-center gap-2 text-sienna font-700 hover:text-sienna-600
                       transition-colors text-sm uppercase tracking-wide"
          >
            Full Calendar
            <ChevronRight size={16} />
          </Link>
        </div>

        {/* Events List */}
        {futureEvents.length > 0 ? (
          <div className="space-y-4">
            {futureEvents.map((evt, idx) => (
              <EventItem key={evt.id} event={evt} index={idx} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-navy-600">No upcoming events at the moment.</p>
          </div>
        )}

        {/* Mobile "Full Calendar" */}
        <div className="md:hidden mt-8 flex justify-center">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 btn btn-primary text-sm"
          >
            Full Calendar
            <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Individual Event Item
// ─────────────────────────────────────────────────────────────────────────────

function EventItem({ event, index }: { event: SchoolEvent; index: number }) {
  const { day, month } = formatEventDate(event.date);
  const emoji = EVENT_TYPE_EMOJI[event.type as keyof typeof EVENT_TYPE_EMOJI] || "📌";

  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      viewport={{ once: true, margin: "-40px" }}
      className="group p-4 md:p-6 rounded-lg border-2 border-navy-200 hover:border-sienna
                 hover:shadow-card transition-all duration-300 bg-white"
    >
      <div className="flex gap-4 md:gap-6">
        {/* Date Box */}
        <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg
                        bg-gradient-to-br from-sienna to-sienna-600 flex flex-col items-center
                        justify-center text-white shadow-md group-hover:shadow-lg transition-shadow">
          <span className="font-display font-900 text-lg md:text-xl leading-none">{day}</span>
          <span className="text-xs md:text-sm font-700 uppercase">{month}</span>
        </div>

        {/* Event Details */}
        <div className="flex-grow min-w-0">
          {/* Type Badge */}
          <div className="mb-1 inline-flex gap-1.5 items-center">
            <span className="text-lg">{emoji}</span>
            <span className={`text-xs font-700 uppercase tracking-wide rounded-full px-2.5 py-0.5
                            ${eventTypeColor(event.type)}`}>
              {event.type}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-body font-700 text-base md:text-lg text-navy mb-2 leading-snug
                        group-hover:text-sienna transition-colors">
            {event.title}
          </h3>

          {/* Location */}
          {event.location && (
            <div className="flex items-center gap-1.5 text-sm text-navy-600 mb-1">
              <MapPin size={14} className="flex-shrink-0" />
              <span>{event.location}</span>
            </div>
          )}

          {/* Description (optional) */}
          {event.description && (
            <p className="text-xs md:text-sm text-navy-600 italic">{event.description}</p>
          )}
        </div>

        {/* Chevron */}
        <div className="flex-shrink-0 flex items-center">
          <ChevronRight
            size={20}
            className="text-sienna opacity-0 group-hover:opacity-100
                      group-hover:translate-x-1 transition-all duration-300"
          />
        </div>
      </div>
    </motion.div>
  );
}
