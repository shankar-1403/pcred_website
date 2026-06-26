'use client';

import { useState } from "react";
import {Navbar,NavBody,NavItems,MobileNav,NavbarLogo,NavbarButton,MobileNavHeader,MobileNavToggle,MobileNavMenu,} from "../components/ui/resizable-navbar"
import { useAuth } from "@/src/context/AuthContext";
import { useRouter } from "next/navigation";

export default function InternalHeader() {
    const navItems = [
        {
            name: "Scheme",
            link: "/dashboard",
        },
        {
            name: "Blogs",
            link: "/internal-blogs",
        },
    ];
    const {logout}  = useAuth();
    const router = useRouter();
    const handleLogout = () => {
        logout();
        router.replace("/login")
    }
   
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
        <div className="relative w-full">
        <Navbar>
            {/* Desktop Navigation */}
            <NavBody>
            <NavbarLogo />
            <NavItems items={navItems} />
            <button onClick={handleLogout} className="px-6 py-2 rounded-xl bg-[#DDB162] text-white text-xs cursor-pointer text-center z-99">Logout</button>
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
