'use client';
import { Children, useState } from "react";
import {Navbar,NavBody,NavItems,MobileNav,NavbarLogo,NavbarButton,MobileNavHeader,MobileNavToggle,MobileNavMenu,} from "../components/ui/resizable-navbar"
import Link from "next/link";
import { IconChevronDown } from "@tabler/icons-react";
import { useSchemes } from "@/src/hooks/useSchemes";
import { FontSizeToggle } from "@/components/ui/font-size-toggle";

export default function Header() {
  const {schemes} = useSchemes();
  
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
      name: "Schemes",
      children: schemes.map((scheme) => ({
        name: scheme.dropdown_label ?? "",
        link: `/scheme/${scheme.id}`, 
      })),
    },
    {
      name: "Blogs",
      link: "/blogs",
    },
    {
      name: "Careers",
      link: "/careers",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSchemesOpen, setIsMobileSchemesOpen] = useState(false);
  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-3 z-99">
            <FontSizeToggle />
            <Link href="/contact" className="px-6 py-3 rounded-4xl bg-[#DDB162] text-white text-xs cursor-pointer text-center">Contact Us</Link>
          </div>
        </NavBody>
 
        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader className="px-6">
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
            {navItems.map((item, idx) =>
              item.children ? (
                <div key={`mobile-link-${idx}`} className="w-full">
                  <button
                    type="button"
                    onClick={() => setIsMobileSchemesOpen((prev) => !prev)}
                    className="relative flex w-full items-center justify-center gap-2 text-sm text-neutral-600 dark:text-neutral-300"
                  >
                    <span className="block">{item.name}</span>
                    <IconChevronDown
                      className={`size-4 transition-transform ${isMobileSchemesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isMobileSchemesOpen && (
                    <div className="mt-3 flex flex-col gap-3 pl-4">
                      {item.children.map((child) => (
                        <a
                          key={child.link}
                          href={child.link}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="relative text-sm text-neutral-500 dark:text-neutral-400"
                        >
                          {child.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative text-sm text-neutral-600 dark:text-neutral-300"
                >
                  <span className="block">{item.name}</span>
                </a>
              )
            )}
<div className="flex w-full flex-col gap-4">
              <NavbarButton href="/contact" onClick={() => setIsMobileMenuOpen(false)} variant="primary" className="w-full">Contact Us</NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
