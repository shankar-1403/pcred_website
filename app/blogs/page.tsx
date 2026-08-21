"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { IconArrowRight, IconCalendar, IconClock, IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { useBlogs, type Blog } from "@/src/hooks/useBlogs";
import heroImage from "@/public/site/blogs_hero_resources.webp";

const BLOGS_PER_PAGE = 6;

function BlogCard({ blog, index }: { blog: Blog; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-navy-900/8 bg-white shadow-[0_16px_40px_-28px_rgba(4,81,120,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_56px_-28px_rgba(4,81,120,0.4)]"
    >
      <div className="relative aspect-video overflow-hidden bg-[#045178]/5">
        {blog.cover_image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={blog.cover_image}
            alt={blog.title ?? "Blog"}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="h-full w-full bg-linear-to-br from-[#045178]/10 to-[#8D8C8F]/10" />
        )}
        <div className="absolute inset-0 bg-linear-to-t from-[#045178]/60 via-transparent to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex flex-wrap items-center gap-4 text-xs text-[#8E8E90]">
          {blog.date && (
            <span className="inline-flex items-center gap-1">
              <IconCalendar className="size-3.5" />
              {blog.date}
            </span>
          )}
          {blog.readTime && (
            <span className="inline-flex items-center gap-1">
              <IconClock className="size-3.5" />
              {blog.readTime}
            </span>
          )}
        </div>

        <h3 className="mb-3 line-clamp-2 text-xl font-semibold leading-snug text-[#045178] transition-colors group-hover:text-[#045178]">
          {blog.title}
        </h3>

        <p className="mb-6 line-clamp-3 flex-1 text-sm leading-relaxed text-[#8E8E90]">
          {blog.excerpt}
        </p>

        <Link
          href={`/blogs/${blog.id}`}
          className="inline-flex w-fit items-center gap-1.5 border-b-2 border-[#045178] pb-1 text-xs font-semibold uppercase tracking-wider text-[#045178] transition-colors hover:border-[#8D8C8F] hover:text-[#045178]"
        >
          Read article
          <IconArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </motion.article>
  );
}

export default function BlogsPage() {
  const { blogs, loading } = useBlogs();
  const [currentPage, setCurrentPage] = useState(1);
  const articlesRef = useRef<HTMLDivElement>(null);

  const featuredBlog = blogs.find((b) => b.featured) ?? blogs[0];
  const gridBlogs = blogs
    .filter((b) => b.id !== featuredBlog?.id)
    .sort((a, b) => new Date(b.date ?? 0).getTime() - new Date(a.date ?? 0).getTime());
  const page1Count = 3;
  const totalPages = gridBlogs.length <= page1Count ? 1 : 1 + Math.ceil((gridBlogs.length - page1Count) / BLOGS_PER_PAGE);
  const pagedBlogs = currentPage === 1
    ? gridBlogs.slice(0, page1Count)
    : gridBlogs.slice(page1Count + (currentPage - 2) * BLOGS_PER_PAGE, page1Count + (currentPage - 1) * BLOGS_PER_PAGE);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    articlesRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <section className="relative overflow-hidden pt-36 pb-20 md:pb-24 min-h-[560px]">
        <Image
          src={heroImage}
          alt="Curated resources and guides for financial advisory"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(4,81,120,0.58)_0%,rgba(4,81,120,0.46)_42%,rgba(4,81,120,0.18)_70%,rgba(4,81,120,0.08)_100%),linear-gradient(to_top,rgba(4,81,120,0.28)_0%,transparent_40%)]" />
        <div className="pointer-events-none absolute -right-32 top-20 size-96 rounded-full bg-[#D9B872]/8 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-10 size-72 rounded-full bg-[#045178]/25 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#D9B872]">
              <span className="size-2 rounded-full bg-[#D9B872]" />
              Blog & Resources
            </span>
            <h1 className="font-serif mt-1 text-3xl font-bold text-white md:text-4xl lg:text-5xl leading-tight">
              Financial Advisory
              <br />
              <span className="bg-linear-to-r from-[#D9B872] to-[#96701F] bg-clip-text text-transparent">Blog & Resources</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
              Expert perspectives on funding, growth strategy, and financial planning for businesses and enterprises.
            </p>
            <div className="mt-10 flex items-center">
              <div className="h-px w-40 bg-white/15" />
              <span className="mx-3 size-2.5 shrink-0 rotate-45 bg-[#D9B872]/60" />
              <div className="h-px w-24 bg-white/15" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[conic-gradient(from_200deg_at_20%_-10%,white,rgba(141,140,143,0.12),white_60%)] py-20 md:py-24">
        <div className="pointer-events-none absolute -right-32 top-20 size-96 rounded-full bg-[#045178]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          {loading ? (
            <div className="mt-24 py-20 text-center text-[#8E8E90]">Loading articles…</div>
          ) : blogs.length === 0 ? (
            <div className="mt-24 py-20 text-center text-[#8E8E90]">No articles published yet.</div>
          ) : (
            <>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="mt-14 grid grid-cols-3 gap-x-6 gap-y-6 border-t border-[#045178]/8 pt-10"
              >
                {[
                  { value: blogs.length, label: "Published articles" },
                  { value: new Set(blogs.map((b) => b.category).filter(Boolean)).size, label: "Topics covered" },
                  { value: new Set(blogs.map((b) => b.author).filter(Boolean)).size, label: "Contributing authors" },
                ].map((stat) => (
                  <div key={stat.label} className="relative border-l border-[#045178]/10 pl-5 first:border-l-0 first:pl-0">
                    <span className="font-serif block text-3xl font-bold leading-none text-[#045178] md:text-4xl">
                      {stat.value}
                    </span>
                    <span className="mt-2 block text-xs leading-snug text-[#4a5568] md:text-sm">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </motion.div>

              {currentPage === 1 && featuredBlog && (
                <>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mt-24 mb-10"
                  >
                    <h2 className="font-serif text-3xl font-semibold text-[#045178] md:text-4xl">Featured Article</h2>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="group relative mb-16 grid overflow-hidden rounded-3xl border border-navy-900/8 bg-white shadow-[0_24px_60px_-32px_rgba(4,81,120,0.4)] transition-all duration-300 hover:-translate-y-1 md:grid-cols-5"
                  >
                    <div className="relative aspect-video overflow-hidden bg-[#045178]/5 md:col-span-3">
                      {featuredBlog.cover_image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={featuredBlog.cover_image}
                          alt={featuredBlog.title ?? "Featured"}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="h-full w-full bg-linear-to-br from-[#045178]/10 to-[#8D8C8F]/10" />
                      )}
                      <div className="absolute inset-0 bg-linear-to-t from-[#045178]/60 via-transparent to-transparent md:bg-linear-to-r md:from-transparent md:via-transparent md:to-[#045178]/60" />
                    </div>
                    <div className="relative flex flex-col justify-center p-8 md:col-span-2 md:p-12">
                      <div className="pointer-events-none absolute left-0 top-10 bottom-10 hidden w-px bg-[#8D8C8F]/40 md:block" />
                      {featuredBlog.category && (
                        <span className="mb-4 w-fit rounded-full border border-[#045178]/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#045178]">
                          {featuredBlog.category}
                        </span>
                      )}
                      <div className="mb-4 flex flex-wrap gap-4 text-xs text-[#8E8E90]">
                        {featuredBlog.date && (
                          <span className="inline-flex items-center gap-1">
                            <IconCalendar className="size-3.5" />
                            {featuredBlog.date}
                          </span>
                        )}
                        {featuredBlog.readTime && (
                          <span className="inline-flex items-center gap-1">
                            <IconClock className="size-3.5" />
                            {featuredBlog.readTime}
                          </span>
                        )}
                      </div>
                      <h3 className="mb-4 line-clamp-2 text-2xl font-bold leading-snug text-[#045178] md:text-3xl">
                        {featuredBlog.title}
                      </h3>
                      <p className="mb-8 line-clamp-2 text-base leading-relaxed text-[#8E8E90]">
                        {featuredBlog.excerpt}
                      </p>
                      <Link
                        href={`/blogs/${featuredBlog.id}`}
                        className="group/btn inline-flex w-fit items-center gap-2 border-b-2 border-[#045178] pb-1 text-sm font-semibold uppercase tracking-wider text-[#045178] transition-colors hover:border-[#8D8C8F] hover:text-[#045178]"
                      >
                        Read article
                        <IconArrowRight className="size-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </Link>
                    </div>
                  </motion.div>
                </>
              )}

              {pagedBlogs.length > 0 && (
                <>
                  <div ref={articlesRef}>
                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="mb-10"
                    >
                      <h2 className="font-serif text-3xl font-semibold text-[#045178] md:text-4xl">Latest Articles</h2>
                    </motion.div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {pagedBlogs.map((blog, i) => (
                      <BlogCard key={blog.id} blog={blog} index={i} />
                    ))}
                  </div>

                  {totalPages > 1 && (
                    <div className="mt-14 flex items-center justify-center gap-2">
                      <button
                        onClick={() => goToPage(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="flex size-10 items-center justify-center rounded-full border border-[#045178]/20 text-[#045178] transition-all hover:border-[#045178] hover:bg-[#045178]/5 disabled:pointer-events-none disabled:opacity-30"
                      >
                        <IconChevronLeft className="size-4" />
                      </button>

                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                          key={page}
                          onClick={() => goToPage(page)}
                          className={`flex size-10 items-center justify-center rounded-full text-sm font-semibold transition-all ${
                            page === currentPage
                              ? "bg-[#045178] text-white shadow-md"
                              : "border border-[#045178]/20 text-[#045178] hover:border-[#045178] hover:bg-[#045178]/5"
                          }`}
                        >
                          {page}
                        </button>
                      ))}

                      <button
                        onClick={() => goToPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="flex size-10 items-center justify-center rounded-full border border-[#045178]/20 text-[#045178] transition-all hover:border-[#045178] hover:bg-[#045178]/5 disabled:pointer-events-none disabled:opacity-30"
                      >
                        <IconChevronRight className="size-4" />
                      </button>
                    </div>
                  )}
                </>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}
