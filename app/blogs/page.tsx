"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { IconArrowRight, IconCalendar, IconClock } from "@tabler/icons-react";
import { useBlogs, type Blog } from "@/src/hooks/useBlogs";

function BlogCard({ blog, index }: { blog: Blog; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
      className="group flex flex-col overflow-hidden rounded-4xl border border-gray-100 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative h-52 overflow-hidden bg-[#084E75]/5">
        {blog.cover_image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={blog.cover_image}
            alt={blog.title ?? "Blog"}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="h-full w-full bg-linear-to-br from-[#084E75]/10 to-[#DDB162]/10" />
        )}
        <div className="absolute inset-0 bg-linear-to-t from-[#084E75]/60 via-transparent to-transparent" />
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

        <h3 className="mb-3 line-clamp-2 text-xl font-semibold leading-snug text-[#084E75] transition-colors group-hover:text-[#0a5d8a]">
          {blog.title}
        </h3>

        <p className="mb-6 line-clamp-3 flex-1 text-sm leading-relaxed text-[#8E8E90]">
          {blog.excerpt}
        </p>

        <Link
          href={`/blogs/${blog.id}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#084E75]"
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

  const featuredBlog = blogs.find((b) => b.featured) ?? blogs[0];
  const gridBlogs = blogs.filter((b) => b.id !== featuredBlog?.id);

  return (
    <>
      <section className="relative overflow-hidden bg-linear-to-br from-[#084E75]/10 via-white to-[#DDB162]/10 pt-36 pb-24">
        <div className="pointer-events-none absolute -right-32 top-20 size-96 rounded-full bg-[#084E75]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="mb-3 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#DDB162]">
              <span className="size-2 rounded-full bg-[#DDB162]" />
              Blog & Resources
            </span>
            <h1 className="mt-1 text-3xl font-bold text-[#084E75] md:text-4xl lg:text-5xl">
              Financial Advisory
              <br />
              <span className="text-[#DDB162]">Blog & Resources</span>
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[#4a5568] max-w-2xl mx-auto">
              Expert perspectives on funding, growth strategy, and financial planning for MSMEs and enterprises.
            </p>
            <div className="mt-10 flex items-center justify-center">
              <div className="h-px w-40 bg-[#DDB162]/30" />
              <span className="mx-3 size-2.5 rotate-45 bg-[#DDB162]/60 shrink-0 block" />
              <div className="h-px w-40 bg-[#DDB162]/30" />
            </div>
          </motion.div>

          {loading ? (
            <div className="mt-24 py-20 text-center text-[#8E8E90]">Loading articles…</div>
          ) : blogs.length === 0 ? (
            <div className="mt-24 py-20 text-center text-[#8E8E90]">No articles published yet.</div>
          ) : (
            <>
              {featuredBlog && (
                <>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mt-24 mb-10"
                  >
                    <h2 className="text-2xl font-semibold text-[#084E75] md:text-3xl">Featured Article</h2>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="group relative mb-16 grid overflow-hidden rounded-[2.5rem] border border-gray-100 bg-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl md:grid-cols-5"
                  >
                    <div className="relative min-h-64 overflow-hidden bg-[#084E75]/5 md:col-span-2 md:min-h-full">
                      {featuredBlog.cover_image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={featuredBlog.cover_image}
                          alt={featuredBlog.title ?? "Featured"}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="h-full w-full bg-linear-to-br from-[#084E75]/10 to-[#DDB162]/10" />
                      )}
                      <div className="absolute inset-0 bg-linear-to-t from-[#084E75]/60 via-transparent to-transparent md:bg-linear-to-r md:from-transparent md:via-transparent md:to-[#084E75]/60" />
                    </div>
                    <div className="relative flex flex-col justify-center p-8 md:col-span-3 md:p-12">
                      <div className="pointer-events-none absolute left-0 top-10 bottom-10 hidden w-px bg-[#DDB162]/40 md:block" />
                      {featuredBlog.category && (
                        <span className="mb-4 w-fit rounded-full border border-[#084E75]/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#084E75]">
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
                      <h3 className="mb-4 text-2xl font-bold leading-snug text-[#084E75] md:text-3xl">
                        {featuredBlog.title}
                      </h3>
                      <p className="mb-8 text-base leading-relaxed text-[#8E8E90]">
                        {featuredBlog.excerpt}
                      </p>
                      <Link
                        href={`/blogs/${featuredBlog.id}`}
                        className="group/btn inline-flex w-fit items-center gap-2 border-b-2 border-[#084E75] pb-1 text-sm font-semibold uppercase tracking-wider text-[#084E75] transition-colors hover:border-[#DDB162] hover:text-[#0a5d8a]"
                      >
                        Read article
                        <IconArrowRight className="size-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </Link>
                    </div>
                  </motion.div>
                </>
              )}

              {gridBlogs.length > 0 && (
                <>
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-10"
                  >
                    <h2 className="text-2xl font-semibold text-[#084E75] md:text-3xl">Latest Articles</h2>
                  </motion.div>

                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {gridBlogs.map((blog, i) => (
                      <BlogCard key={blog.id} blog={blog} index={i} />
                    ))}
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}
