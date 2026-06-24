import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.webp";
import {
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandFacebook,
  IconMail,
  IconMapPin,
  IconPhone,
} from "@tabler/icons-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/#contact" },
];

const services = [
  "Capital Market Advisory",
  "Debt Advisory",
  "Virtual CFO Services",
  "IPO Advisory",
  "Investment Strategy",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#084E75] text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/60 to-transparent" />
      <div className="pointer-events-none absolute -right-32 top-0 size-64 rounded-full bg-[#5BBCEB]/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 size-80 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl pt-16 pb-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src={logo}
                alt="Pcred"
                width={140}
                height={60}
                className="h-14 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              Strategic financial advisory solutions designed to strengthen and
              scale businesses across India.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex size-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition-colors hover:border-white/40 hover:bg-white/10 hover:text-white"
              >
                <IconBrandLinkedin className="size-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex size-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition-colors hover:border-white/40 hover:bg-white/10 hover:text-white"
              >
                <IconBrandInstagram className="size-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex size-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition-colors hover:border-white/40 hover:bg-white/10 hover:text-white"
              >
                <IconBrandFacebook className="size-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <IconMapPin className="mt-0.5 size-5 shrink-0 text-white" />
                <span className="text-sm text-white/70">
                  Mumbai, Maharashtra, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <IconPhone className="size-5 shrink-0 text-white" />
                <a
                  href="tel:+919876543210"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <IconMail className="size-5 shrink-0 text-white" />
                <a
                  href="mailto:contact@pcred.org"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  contact@pcred.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} Pcred Corporate Advisory Services.
            All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-sm text-white/50 transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-white/50 transition-colors hover:text-white"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
