'use client';
import { useState } from "react";
import { Navbar, NavBody, NavItems, MobileNav, NavbarLogo, NavbarButton, MobileNavHeader, MobileNavToggle, MobileNavMenu, } from "../components/ui/resizable-navbar"
import Link from "next/link";
import { IconChevronDown } from "@tabler/icons-react";
import { useSchemes } from "@/src/hooks/useSchemes";
import { FontSizeToggle } from "@/components/ui/font-size-toggle";

export default function Header() {
  const { schemes } = useSchemes();

  const services = [
    {id:1,name:"Corporate Finance",link:"corporate-finance"},
    {id:2,name:"M&A Advisory",link:"ma-advisory"},
    {id:3,name:"Valuation & Transaction",link:"valuation-transaction"},
    {id:4,name:"CFO Advisory",link:"cfo-advisory"},
    {id:5,name:"Risk & Governance",link:"risk-governance"},
  ]

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
      children: services.map((service) => ({
        name: service.name ?? "",
        link: `/services/${service.link}`,
      })),
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
    {
      name: "PCRED Group",
      link: "/pcred-group",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<number | null>(null);
  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-3 z-99">
            <FontSizeToggle />
            <Link href="/contact" className="px-6 py-3 rounded-4xl bg-[#084E75] hover:bg-[#0a5d8a] transition-colors text-white text-xs cursor-pointer text-center">Contact Us</Link>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader className="px-6">
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen);
                setOpenMobileDropdown(null);
              }}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => {
              setIsMobileMenuOpen(false);
              setOpenMobileDropdown(null);
            }}
          >
            {navItems.map((item, idx) =>
              item.children ? (
                <div key={`mobile-link-${idx}`} className="w-full">
                  <button
                    type="button"
                    onClick={() =>
                      setOpenMobileDropdown((prev) => (prev === idx ? null : idx))
                    }
                    className="relative flex w-full items-center justify-start gap-2 text-sm text-white"
                  >
                    <span className="block">{item.name}</span>
                    <IconChevronDown
                      className={`size-4 transition-transform ${openMobileDropdown === idx ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openMobileDropdown === idx && (
                    <div className="mt-3 flex flex-col gap-3 pl-4">
                      {item.children.map((child) => (
                        <a
                          key={child.link}
                          href={child.link}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="relative flex items-center gap-2 text-sm text-white/70"
                        >
                          <span className="size-1.5 shrink-0 rounded-full bg-gold-500" />
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
                  className="relative text-sm text-white"
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
