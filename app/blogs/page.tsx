"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import {
  IconArrowRight,
  IconCalendar,
  IconClock,
} from "@tabler/icons-react";
import aboutImg1 from "@/public/aboutpage1.png";
import aboutImg2 from "@/public/aboutpage2.png";
import aboutImg3 from "@/public/aboutpage3.png";
import introImg from "@/public/intro_img.png";

const blogs = [
  {
    id: 1,
    title: "5 Funding Strategies Every Growing MSME Should Know",
    excerpt:
      "Explore practical funding options that help MSMEs scale sustainably — from working capital to long-term growth capital.",
    category: "Funding",
    date: "Mar 12, 2026",
    readTime: "5 min read",
    image: aboutImg1,
    featured: true,
  },
  {
    id: 2,
    title: "How Debt Restructuring Can Strengthen Your Balance Sheet",
    excerpt:
      "Learn when and how debt advisory can reduce financial pressure while improving lender confidence and cash flow.",
    category: "Debt Advisory",
    date: "Mar 8, 2026",
    readTime: "6 min read",
    image: aboutImg2,
  },
  {
    id: 3,
    title: "Virtual CFO Services: A Smart Move for Scaling Businesses",
    excerpt:
      "Why more MSMEs are turning to virtual CFO support for strategic planning, reporting, and financial decision-making.",
    category: "Advisory",
    date: "Feb 28, 2026",
    readTime: "4 min read",
    image: aboutImg3,
  },
  {
    id: 4,
    title: "IPO Readiness: Key Steps Before Entering Capital Markets",
    excerpt:
      "A practical checklist for businesses preparing for IPO — governance, compliance, valuation, and investor readiness.",
    category: "Capital Markets",
    date: "Feb 20, 2026",
    readTime: "7 min read",
    image: introImg,
  },
  {
    id: 5,
    title: "Government Schemes MSMEs Often Overlook",
    excerpt:
      "Discover incentives and support programs that can reduce costs and unlock growth opportunities for your business.",
    category: "MSME Growth",
    date: "Feb 14, 2026",
    readTime: "5 min read",
    image: aboutImg2,
  },
  {
    id: 6,
    title: "Building Financial Discipline for Long-Term Stability",
    excerpt:
      "Simple frameworks to improve cash flow visibility, control costs, and plan confidently for the year ahead.",
    category: "Finance",
    date: "Feb 5, 2026",
    readTime: "4 min read",
    image: aboutImg1,
  },
];

const featuredBlog = blogs.find((b) => b.featured)!;
const gridBlogs = blogs.filter((b) => !b.featured);

function BlogCard({
  blog,
  index,
}: {
  blog: (typeof blogs)[number];
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
      className="group flex flex-col overflow-hidden rounded-4xl border border-gray-100 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative h-52 overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#084E75]/60 via-transparent to-transparent" />
        {/* <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#084E75]">
          {blog.category}
        </span> */}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex flex-wrap items-center gap-4 text-xs text-[#8E8E90]">
          <span className="inline-flex items-center gap-1">
            <IconCalendar className="size-3.5" />
            {blog.date}
          </span>
          <span className="inline-flex items-center gap-1">
            <IconClock className="size-3.5" />
            {blog.readTime}
          </span>
        </div>

        <h3 className="mb-3 line-clamp-2 text-xl font-semibold leading-snug text-[#084E75] transition-colors group-hover:text-[#0a5d8a]">
          {blog.title}
        </h3>

        <p className="mb-6 line-clamp-3 flex-1 text-sm leading-relaxed text-[#8E8E90]">
          {blog.excerpt}
        </p>

        <Link
          href="#"
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
  return (
    <>
      <section className="relative flex h-150 items-end bg-linear-to-br from-[#084E75]/20 from-30% to-[#DDB162]/20 py-30 backdrop-blur-2xl">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative mx-auto w-full max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl font-bold leading-[1.15] text-[#084E75] md:text-5xl lg:text-6xl">
              Financial Advisory
              <br />
              <span className="text-[#DDB162]">Blog & Resources</span>
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-[#084E75]">
              Expert perspectives on funding, growth strategy, and financial planning for MSMEs and enterprises.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-linear-to-b from-white via-gray-50 to-gray-100 py-24">
        <div className="pointer-events-none absolute -right-32 top-20 size-96 rounded-full bg-[#084E75]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <h2 className="text-2xl font-semibold text-[#084E75] md:text-3xl">Featured Article</h2>
          </motion.div>

          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group mb-16 grid overflow-hidden rounded-4xl border border-gray-100 bg-white shadow-lg md:grid-cols-2"
          >
            <div className="relative min-h-64 md:min-h-full">
              <Image
                src={featuredBlog.image}
                alt={featuredBlog.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#084E75]/20" />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-10">
              <span className="mb-4 w-fit rounded-full bg-[#084E75]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#084E75]">
                {featuredBlog.category}
              </span>
              <div className="mb-4 flex flex-wrap gap-4 text-xs text-[#8E8E90]">
                <span className="inline-flex items-center gap-1">
                  <IconCalendar className="size-3.5" />
                  {featuredBlog.date}
                </span>
                <span className="inline-flex items-center gap-1">
                  <IconClock className="size-3.5" />
                  {featuredBlog.readTime}
                </span>
              </div>
              <h3 className="mb-4 text-2xl font-bold leading-snug text-[#084E75] md:text-3xl">
                {featuredBlog.title}
              </h3>
              <p className="mb-8 text-base leading-relaxed text-[#8E8E90]">
                {featuredBlog.excerpt}
              </p>
              <Link
                href="#"
                className="inline-flex w-fit items-center gap-2 rounded-xl bg-[#084E75] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0a5d8a]"
              >
                Read article
                <IconArrowRight className="size-4" />
              </Link>
            </div>
          </motion.article>

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
        </div>
      </section>
    </>
  );
}
