"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  IoCart,
  IoCartOutline,
  IoGrid,
  IoGridOutline,
  IoHome,
  IoHomeOutline,
  IoPerson,
  IoPersonOutline,
} from "react-icons/io5";
import { cn } from "@/lib/cn";
import type { IconType } from "react-icons";

type TabItem = {
  href: string;
  label: string;
  icon: IconType;
  activeIcon: IconType;
};

const tabs: TabItem[] = [
  {
    href: "/",
    label: "Accueil",
    icon: IoHomeOutline,
    activeIcon: IoHome,
  },
  {
    href: "/demo",
    label: "Catalogue",
    icon: IoGridOutline,
    activeIcon: IoGrid,
  },
  {
    href: "/demo",
    label: "Panier",
    icon: IoCartOutline,
    activeIcon: IoCart,
  },
  {
    href: "/demo",
    label: "Compte",
    icon: IoPersonOutline,
    activeIcon: IoPerson,
  },
];

export function MobileTabBar() {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        "fixed inset-x-0 bottom-0 z-30 md:hidden",
        "border-t border-black/5 dark:border-white/10",
        "bg-ios-surface/80 backdrop-blur-xl backdrop-saturate-150",
        "pb-[env(safe-area-inset-bottom,0px)]",
      )}
      aria-label="Navigation principale"
    >
      <ul className="flex items-stretch justify-around px-2 pt-2 pb-1">
        {tabs.map((tab) => {
          const isActive = pathname === tab.href;
          const Icon = isActive ? tab.activeIcon : tab.icon;

          return (
            <li key={tab.label} className="flex-1">
              <Link
                href={tab.href}
                className="flex flex-col items-center gap-0.5 py-1"
              >
                <motion.span
                  whileTap={{ scale: 0.88 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="flex flex-col items-center"
                >
                  <Icon
                    className={cn(
                      "h-6 w-6",
                      isActive ? "text-ios-blue" : "text-ios-secondary",
                    )}
                    aria-hidden="true"
                  />
                  <span
                    className={cn(
                      "text-[10px] font-medium",
                      isActive ? "text-ios-blue" : "text-ios-secondary",
                    )}
                  >
                    {tab.label}
                  </span>
                </motion.span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
