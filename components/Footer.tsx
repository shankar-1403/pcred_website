import Image from "next/image";
import Link from "next/link";
import logo from "@/public/pcred_cms_logo.webp";
import {
  IconMail,
  IconMapPin,
  IconPhone,
  IconId,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";

const socialLinks = [
  { label: "Facebook", href: "#", icon: IconBrandFacebook },
  { label: "Instagram", href: "#", icon: IconBrandInstagram },
  { label: "LinkedIn", href: "#", icon: IconBrandLinkedin },
  { label: "X", href: "#", icon: IconBrandX },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Blogs", href: "/blogs" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
  { label: "Terms of Service", href: "/terms-of-service" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#003958] text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/60 to-transparent" />
      <div className="pointer-events-none absolute -right-32 top-0 size-64 rounded-full bg-[#5BBCEB]/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 size-80 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl pt-16 pb-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <Link href="/" className="inline-block">
              <Image src={logo} alt="Pcred" width={140} height={60} className="h-14 w-auto"/>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              Strategic financial advisory solutions designed to strengthen and
              scale businesses across India.
            </p>
            
            <div className="flex items-center gap-3 mt-5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex size-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-[#DDB162] hover:text-[#DDB162]"
                >
                  <social.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-sm text-center font-semibold uppercase tracking-widest text-[#DDB162]">Quick Links</h3>
            <div className="flex justify-evenly">
              <ul className="space-y-3">
                {quickLinks.filter((_, index) => index % 2 === 0).map((quicklink) => (
                  <li key={quicklink.label}>
                    <Link
                      href={quicklink.href}
                      className="text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {quicklink.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {quickLinks.filter((_, index) => index % 2 === 1).map((quicklink) => (
                  <li key={quicklink.label}>
                    <Link
                      href={quicklink.href}
                      className="text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {quicklink.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-5 lg:pl-8">
            <div className="flex items-start gap-3 text-sm text-white/70">
              <IconId className="size-5 shrink-0" color="#DDB162" />
              <p className="max-w-sm leading-relaxed">
                CIN: [Add CIN number]
              </p>
            </div>
            <div className="flex items-start gap-3 text-sm text-white/70">
              <IconMapPin className="size-5 shrink-0" color="#DDB162" />
              <p className="max-w-sm leading-relaxed">
                PCRED Venture Private Limited, Andheri East, Mumbai, Maharashtra 400069, India
              </p>
            </div>
            <div className="mt-2 flex flex-col gap-4">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white"
              >
                <IconPhone className="size-5" color="#DDB162" />
                +91 98765 43210
              </a>
              <a
                href="mailto:contact@pcred.org"
                className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white"
              >
                <IconMail className="size-5" color="#DDB162" />
                contact@pcred.org
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-center gap-4 border-t border-white/10 pt-8">
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} Pcred Venture Private Limited.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
