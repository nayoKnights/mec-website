"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { formatFullDate, formatRelative, truncate } from "@/lib/utils";
import type { NewsPost } from "@/types";

interface NewsProps {
  posts: NewsPost[];
  maxItems?: number;
}

export function NewsSection({ posts, maxItems = 3 }: NewsProps) {
  const displayPosts = posts.slice(0, maxItems);

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="section-container">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <div>
            <h2 className="section-title text-3xl md:text-4xl mb-2">Latest News</h2>
            <p className="text-navy-600 text-sm md:text-base">
              Stay updated with school announcements and achievements
            </p>
          </div>
          <Link
            href="/news"
            className="hidden md:flex items-center gap-2 text-sienna font-700 hover:text-sienna-600
                       transition-colors text-sm uppercase tracking-wide"
          >
            View All
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* News Grid */}
        {displayPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {displayPosts.map((post, idx) => (
              <NewsCard key={post._id} post={post} index={idx} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-navy-600">No news posts available at the moment.</p>
          </div>
        )}

        {/* Mobile "View All" */}
        <div className="md:hidden mt-8 flex justify-center">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 btn btn-secondary text-sm"
          >
            View All News
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Individual News Card
// ─────────────────────────────────────────────────────────────────────────────

function NewsCard({ post, index }: { post: NewsPost; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true, margin: "-60px" }}
      className="card group overflow-hidden flex flex-col h-full hover:shadow-card-lg"
    >
      {/* Thumbnail */}
      <div className="relative h-48 overflow-hidden bg-navy-100">
        <Image
          src={post.thumbnailUrl}
          alt={post.title}
          fill
          quality={85}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-colors" />

        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-flex px-3 py-1 rounded-full text-xs font-700 uppercase
                          tracking-wide bg-sienna text-white shadow-lg">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-5 md:p-6">
        {/* Date */}
        <div className="flex items-center gap-2 text-navy-600 text-xs mb-3">
          <Calendar size={14} />
          <span>{formatFullDate(post.publishedAt)}</span>
          {post.author && <span>• {post.author}</span>}
        </div>

        {/* Title */}
        <h3 className="font-display font-700 text-base md:text-lg text-navy mb-2
                      group-hover:text-sienna transition-colors leading-snug">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-navy-600 mb-4 flex-grow leading-relaxed">
          {truncate(post.excerpt, 140)}
        </p>

        {/* Read More Link */}
        <Link
          href={`/news/${post.slug}`}
          className="inline-flex items-center gap-2 text-sienna font-700 text-xs uppercase
                     tracking-wide hover:text-sienna-600 transition-colors group/link"
        >
          Read More
          <ArrowRight
            size={14}
            className="group-hover/link:translate-x-1 transition-transform"
          />
        </Link>
      </div>
    </motion.div>
  );
}
