"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import type { StatItem } from "@/types";

interface StatsProps {
  stats: StatItem[];
}

export function StatsSection({ stats }: StatsProps) {
  return (
    <section className="py-12 md:py-16 bg-navy text-white">
      <div className="section-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, idx) => (
            <StatCard key={idx} stat={stat} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Individual Stat with Counter Animation
// ─────────────────────────────────────────────────────────────────────────────

function StatCard({ stat, index }: { stat: StatItem; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  // Extract numeric value from stat.value (e.g., "1,200" → 1200)
  const numericValue = parseInt(stat.value.replace(/,/g, ""), 10);

  // Animate count up when in view
  useEffect(() => {
    if (!isInView || isNaN(numericValue)) return;

    let start = 0;
    const duration = 2000; // 2 seconds
    const startTime = Date.now();

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuad = 1 - (1 - progress) * (1 - progress);
      const current = Math.floor(easeOutQuad * numericValue);
      setCount(current);

      if (progress === 1) clearInterval(timer);
    }, 10);

    return () => clearInterval(timer);
  }, [isInView, numericValue]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center py-6 md:py-8"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="font-display font-900 text-4xl md:text-5xl lg:text-6xl mb-2">
          <span className="text-sienna">{count.toLocaleString()}</span>
          {stat.suffix && <span className="text-sienna">{stat.suffix}</span>}
        </div>
        <p className="text-sm md:text-base text-gray-300 font-body">{stat.label}</p>
      </motion.div>
    </motion.div>
  );
}
