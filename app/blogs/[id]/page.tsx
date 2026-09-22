"use client";

import { useParams } from "next/navigation";
import { useBlog } from "@/src/hooks/useBlog";
import { motion } from "motion/react";
import Link from "next/link";
import { IconArrowLeft, IconCalendar, IconClock, IconUser } from "@tabler/icons-react";

export default function BlogDetailPage() {
  const params = useParams();
  const blogId = typeof params.id === "string" ? params.id : params.id?.[0];
  const { blog, loading } = useBlog(blogId);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-[#8E8E90]">Loading…</p>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4">
        <p className="text-xl font-semibold text-[#00255a]">Article not found.</p>
        <Link href="/blogs" className="text-sm text-[#00b2fc] underline">
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-linear-to-b from-[#EEF6FB] via-white to-[#FAFAF9] pt-36 pb-16">
        <div className="pointer-events-none absolute -right-32 top-20 size-96 rounded-full bg-[#00b2fc]/5 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link
              href="/blogs"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[#00255a]/60 hover:text-[#00255a] transition-colors"
            >
              <IconArrowLeft className="size-4" />
              Back to Blogs
            </Link>

            {blog.category && (
              <span className="mb-4 block w-fit rounded-full border border-[#00255a]/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#00255a]">
                {blog.category}
              </span>
            )}

            <h1 className="font-serif text-3xl font-bold leading-snug text-[#00255a] md:text-4xl lg:text-5xl">
              {blog.title}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-[#8E8E90]">
              {blog.author && (
                <span className="inline-flex items-center gap-1.5">
                  <IconUser className="size-4" />
                  {blog.author}
                </span>
              )}
              {blog.date && (
                <span className="inline-flex items-center gap-1.5">
                  <IconCalendar className="size-4" />
                  {blog.date}
                </span>
              )}
              {blog.readTime && (
                <span className="inline-flex items-center gap-1.5">
                  <IconClock className="size-4" />
                  {blog.readTime}
                </span>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Internal blog image */}
      {blog.inner_image && (
        <div className="mx-auto max-w-4xl px-6 py-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={blog.inner_image}
            alt={blog.title ?? "Blog image"}
            className="w-full rounded-3xl object-cover shadow-xl"
            style={{ maxHeight: "480px" }}
          />
        </div>
      )}

      {/* Article content */}
      <section className="mx-auto max-w-4xl px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {blog.excerpt && (
            <p className="mb-10 text-base leading-relaxed text-[#4a5568] border-l-4 border-[#00b2fc] pl-5 italic">
              {blog.excerpt}
            </p>
          )}

          {blog.content ? (
            <div
              className="prose prose-base max-w-none prose-headings:text-[#00255a] prose-a:text-[#00b2fc] prose-strong:text-[#00255a]"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          ) : (
            <p className="text-[#8E8E90]">No content available for this article.</p>
          )}
        </motion.div>

        <div className="mt-16 border-t border-navy-900/8 pt-8">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#00255a] hover:text-[#00b2fc] transition-colors"
          >
            <IconArrowLeft className="size-4" />
            Back to all articles
          </Link>
        </div>
      </section>
    </>
  );
}
