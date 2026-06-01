"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { HeroSlide } from "@/types";

interface HeroCarouselProps {
  slides: HeroSlide[];
  autoPlayInterval?: number;
}

export function HeroCarousel({ slides, autoPlayInterval = 5000 }: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Auto-play: rotate slides every 5 seconds
  useEffect(() => {
    if (!isAutoPlay || slides.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % slides.length);
    }, autoPlayInterval);
    return () => clearInterval(timer);
  }, [isAutoPlay, slides.length, autoPlayInterval]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((i) => (i - 1 + slides.length) % slides.length);
    setIsAutoPlay(false);
  }, [slides.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((i) => (i + 1) % slides.length);
    setIsAutoPlay(false);
  }, [slides.length]);

  const goToSlide = useCallback((idx: number) => {
    setCurrentIndex(idx);
    setIsAutoPlay(false);
  }, []);

  if (!slides || slides.length === 0) {
    return (
      <div className="h-96 bg-gradient-to-r from-navy to-navy-700 flex items-center justify-center">
        <p className="text-white text-lg">No hero slides configured.</p>
      </div>
    );
  }

  const current = slides[currentIndex];

  return (
    <section className="relative w-full overflow-hidden">
      {/* ─── Slides Container ─────────────────────────────────────────────── */}
      <div
        className="relative h-96 md:h-[500px] lg:h-[600px] bg-navy"
        onMouseEnter={() => setIsAutoPlay(false)}
        onMouseLeave={() => setIsAutoPlay(true)}
      >
        <AnimatePresence mode="wait">
          {current && (
            <motion.div
              key={current._id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <Image
                  src={current.imageUrl}
                  alt={current.title}
                  fill
                  priority
                  quality={90}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                  className="object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-hero-gradient" />
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col items-start justify-center section-container">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="max-w-2xl"
                >
                  {/* Title */}
                  <h1
                    className={cn(
                      "font-display font-900 text-white leading-tight mb-4",
                      "text-2xl sm:text-4xl md:text-5xl lg:text-6xl",
                      "whitespace-pre-line"
                    )}
                  >
                    {current.title}
                  </h1>

                  {/* Subtitle */}
                  {current.subtitle && (
                    <p className="text-sm sm:text-base md:text-lg text-gray-100 mb-8 max-w-xl leading-relaxed">
                      {current.subtitle}
                    </p>
                  )}

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    {current.ctaPrimary && (
                      <Link
                        href={current.ctaPrimary.href}
                        className="btn btn-primary inline-flex text-sm sm:text-base"
                      >
                        {current.ctaPrimary.label}
                      </Link>
                    )}
                    {current.ctaSecondary && (
                      <Link
                        href={current.ctaSecondary.href}
                        className="btn btn-secondary inline-flex text-sm sm:text-base"
                      >
                        {current.ctaSecondary.label}
                      </Link>
                    )}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ─── Navigation Controls ──────────────────────────────────────────── */}
        {slides.length > 1 && (
          <>
            {/* Previous / Next Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full
                         bg-white/20 hover:bg-white/40 text-white transition-all duration-300
                         backdrop-blur-sm focus-visible:outline-2 focus-visible:outline-offset-2
                         focus-visible:outline-white"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} className="md:w-6 md:h-6" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full
                         bg-white/20 hover:bg-white/40 text-white transition-all duration-300
                         backdrop-blur-sm focus-visible:outline-2 focus-visible:outline-offset-2
                         focus-visible:outline-white"
              aria-label="Next slide"
            >
              <ChevronRight size={20} className="md:w-6 md:h-6" />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
              {slides.map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    idx === currentIndex
                      ? "bg-white w-8"
                      : "bg-white/50 w-2 hover:bg-white/75"
                  )}
                  aria-label={`Go to slide ${idx + 1}`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* ─── Slide Counter (optional, desktop) ────────────────────────────── */}
      {slides.length > 1 && (
        <div className="hidden md:flex absolute top-6 right-8 z-10 gap-2 items-center text-white">
          <span className="font-display font-700 text-lg">
            {String(currentIndex + 1).padStart(2, "0")}
          </span>
          <span className="text-white/60">/</span>
          <span className="font-display font-700 text-lg">
            {String(slides.length).padStart(2, "0")}
          </span>
        </div>
      )}
    </section>
  );
}
