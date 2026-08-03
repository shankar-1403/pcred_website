import Image from "next/image";
import Link from "next/link";
import logo from "@/public/pcred_cms_logo.webp";
import {
  IconMail,
  IconMapPin,
  IconPhone,
  IconId,
  IconChevronRight,
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
  { label: "Blogs", href: "/blogs" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#003958] text-white" style={{ backgroundImage: "url('/who_we_are.webp')", backgroundSize: "cover", backgroundPosition: "center 35%" }}>
      <div className="absolute inset-0 bg-[#003958]/90" />
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/60 to-transparent" />
      <div className="pointer-events-none absolute -right-32 top-0 size-64 rounded-full bg-[#5BBCEB]/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 size-80 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-8">
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
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#DDB162] text-center">Quick Links</h3>
            <div className="flex justify-center gap-x-10 md:justify-evenly md:gap-x-0">
              {[quickLinks.slice(0, 3), quickLinks.slice(3)].map((group, gi) => (
                <ul key={gi} className="space-y-1">
                  {group.map((quicklink) => (
                    <li key={quicklink.label}>
                      <Link
                        href={quicklink.href}
                        className="group flex items-center gap-2.5 py-1.5 text-sm text-white/60 transition-all duration-200 hover:text-[#DDB162]"
                      >
                        <span className="size-1.5 shrink-0 rounded-full bg-[#DDB162] transition-colors duration-200" />
                        {quicklink.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-5 lg:pl-8">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#DDB162] text-center">Get In Touch</h3>
            <div className="flex flex-col gap-5">
            <div className="flex items-start gap-3 text-sm text-white/70">
              <IconId className="size-5 shrink-0" color="#DDB162" />
              <p className="max-w-sm leading-relaxed">
                CIN: [Add CIN number]
              </p>
            </div>
            <div className="flex items-start gap-3 text-sm text-white/70">
              <IconMapPin className="size-5 shrink-0" color="#DDB162" />
              <p className="max-w-sm leading-relaxed">
                Lodha Supremus, 520, Off Mahakali Caves Rd, Chakala Industrial Area (MIDC), Andheri East, Mumbai, Maharashtra 400093
              </p>
            </div>
            <div className="mt-2 flex flex-col gap-4">
              <a
                href="tel:+912235120060"
                className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white"
              >
                <IconPhone className="size-5" color="#DDB162" />
                +91 22 3512 0060
              </a>
              <a
                href="mailto:info@pcred.org"
                className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white"
              >
                <IconMail className="size-5" color="#DDB162" />
                info@pcred.org
              </a>
            </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} Pcred Venture Private Limited.
            All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="text-sm text-white/50 transition-colors hover:text-white">Privacy Policy</Link>
            <span className="text-white/20">|</span>
            <Link href="/terms-of-service" className="text-sm text-white/50 transition-colors hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
