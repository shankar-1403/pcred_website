"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import logo from "../../public/logo.webp"
import Image from "next/image";
import React, { useRef, useState } from "react";


interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItem {
  name: string;
  link?: string;
  children?: NavItem[];
}

interface NavItemsProps {
  items: NavItem[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  return (
    <div className={cn("fixed bg-white/70 shadow-xl backdrop-blur-lg border-b border-b-gray-300 inset-x-0 top-0 z-40 w-full", className)}>
      <div>
        {children}
      </div>
    </div>
  );
};

export const NavBody = ({ children, className }: NavBodyProps) => {
  return (
    <motion.div
      className={cn(
        "relative z-60 mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full bg-transparent px-6 py-2 lg:flex dark:bg-transparent",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({
  items,
  className,
  onItemClick,
}: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  const openMenu = (idx: number) => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }

    setHovered(idx);
  };

  const closeMenu = () => {
    closeTimeout.current = setTimeout(() => {
      setHovered(null);
    }, 150);
  };

  return (
    <motion.div
      className={cn(
        "absolute inset-0 hidden flex-1 items-center justify-center gap-2 text-sm font-medium lg:flex",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={`link-${idx}`}
          className="relative"
          onMouseEnter={() => openMenu(idx)}
          onMouseLeave={closeMenu}
        >
          {item.link ? (
            <Link
              href={item.link}
              onClick={onItemClick}
              className="relative flex cursor-pointer items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold text-[#084E75]"
            >
              {hovered === idx && (
                <motion.div
                  layoutId="hovered"
                  className="absolute inset-0 rounded-full bg-[#DDB162]/20"
                />
              )}

              <span className="relative z-20">{item.name}</span>

              {item.children && (
                <svg
                  className="relative z-20 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              )}
            </Link>
          ) : (
            <button
              type="button"
              className="relative flex cursor-pointer items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold text-[#084E75]"
            >
              {hovered === idx && (
                <motion.div
                  layoutId="hovered"
                  className="absolute inset-0 rounded-full bg-[#DDB162]/20"
                />
              )}

              <span className="relative z-20">{item.name}</span>

              <svg
                className="relative z-20 h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
          )}

          {/* Mega Menu */}
          {item.children && hovered === idx && (
            <div
              className="fixed left-0 right-0 top-14 z-50 px-6"
              onMouseEnter={() => openMenu(idx)}
              onMouseLeave={closeMenu}
            >
              <div className="mx-auto max-w-7xl pt-2">
                <div className="overflow-hidden rounded-2xl border border-[#084E75]/10 bg-white shadow-2xl">
                  {/* Mega-menu header */}
                  <div className="border-b border-[#084E75]/8 bg-[#084E75]/3 px-8 py-4">
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#084E75]/50">
                      {item.name}
                    </p>
                  </div>

                  {/* Mega-menu content */}
                  <div className="p-8">
                    {item.children.length === 0 ? (
                      <p className="text-sm italic text-[#084E75]/40">
                        More schemes coming soon.
                      </p>
                    ) : (
                      <div className="grid grid-cols-3 gap-2 lg:grid-cols-4">
                        {item.children.map((child) => (
                          <Link
                            key={child.link}
                            href={child.link!}
                            onClick={onItemClick}
                            className="group/item flex items-center gap-2.5 rounded-xl px-4 py-3 text-sm font-medium text-[#084E75] transition-all hover:bg-[#DDB162]/10"
                          >
                            <span className="size-1.5 shrink-0 rounded-full bg-[#DDB162]" />

                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </motion.div>
  );
};


export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <div
      className={cn(
        "relative z-50 flex w-full flex-col items-center justify-between bg-transparent px-0 py-2 lg:hidden",
        visible && "bg-white/80 shadow-lg backdrop-blur-md dark:bg-neutral-950/80",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
  onClose,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={cn(
            "fixed inset-x-0 top-16 z-50 flex w-full flex-col items-center justify-start gap-4 rounded-b-lg bg-white px-4 py-8 shadow-[0_8px_24px_rgba(34,42,53,0.12)] dark:bg-neutral-950",
            className,
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return isOpen ? (
    <IconX className="text-black dark:text-white" onClick={onClick} />
  ) : (
    <IconMenu2 className="text-black dark:text-white" onClick={onClick} />
  );
};

export const NavbarLogo = () => {
  return (
    <Link href="/" className="relative z-20 flex items-center text-black">
      <Image src={logo} alt="logo" className="h-10 w-auto"/>
    </Link>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
} & (
  | React.ComponentPropsWithoutRef<"a">
  | React.ComponentPropsWithoutRef<"button">
)) => {
  const baseStyles =
    "px-4 py-2 rounded-md bg-white button bg-white text-black text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center";

  const variantStyles = {
    primary:
      "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    secondary: "bg-transparent shadow-none dark:text-white",
    dark: "bg-black text-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    gradient:
      "bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]",
  };

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};
