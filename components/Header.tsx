'use client';
import { useState } from "react";
import {Navbar,NavBody,NavItems,MobileNav,NavbarLogo,NavbarButton,MobileNavHeader,MobileNavToggle,MobileNavMenu,} from "../components/ui/resizable-navbar"
import Link from "next/link";

export default function Header() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About Us",
      link: "/about-us",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Blogs",
      link: "/blogs",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <Link href="/contact" className="px-6 py-3 rounded-4xl bg-[#DDB162] text-white text-xs cursor-pointer text-center z-99">Contact Us</Link>
        </NavBody>
 
        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>
 
          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton onClick={() => setIsMobileMenuOpen(false)} variant="primary" className="w-full">Contact Us</NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
