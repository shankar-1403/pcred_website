import Image from "next/image";
import Link from "next/link";
import logo from "@/public/pcred_cms_logo.webp";
import {
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

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#003958] text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/60 to-transparent" />
      <div className="pointer-events-none absolute -right-32 top-0 size-64 rounded-full bg-[#5BBCEB]/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 size-80 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl pt-16 pb-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-block">
              <Image src={logo} alt="Pcred" width={140} height={60} className="h-14 w-auto"/>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              Strategic financial advisory solutions designed to strengthen and
              scale businesses across India.
            </p>
            
            <ul className="space-y-4 mt-4">
              <li className="flex items-start gap-3">
                <IconMapPin className="mt-0.5 size-5" color="#DDB162" />
                <span className="text-sm text-white/70">
                  Mumbai, Maharashtra, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <IconPhone className="size-5" color="#DDB162" />
                <a
                  href="tel:+919876543210"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <IconMail className="size-5" color="#DDB162" />
                <a
                  href="mailto:contact@pcred.org"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  contact@pcred.org
                </a>
              </li>
            </ul>
          </div>          
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((quicklink,index) => (
                <li key={index+1}>
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
          <div className="col-span-2 p-4 border rounded-4xl">
            <label htmlFor="" className="absolute -mt-8 ml-4 px-2 bg-[#003958] text-lg">Our Location</label>
            <div className="overflow-hidden rounded-3xl">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7539.342371665663!2d72.86381847497857!3d19.122075682091978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c96714ce57ed%3A0x1b179a27f41db6f0!2sPCRED!5e0!3m2!1sen!2sin!4v1783146736429!5m2!1sen!2sin" width="600" height="250" loading="lazy" referrerPolicy="strict-origin-when-cross-origin"/>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} Pcred Venture Private Limited.
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
