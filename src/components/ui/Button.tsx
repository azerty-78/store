"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = Omit<HTMLMotionProps<"button">, "ref"> & {
  variant?: ButtonVariant;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-ios-blue text-white hover:bg-ios-blue/90 active:bg-ios-blue/80",
  secondary:
    "bg-ios-gray-fill text-foreground hover:bg-ios-gray-fill/80 active:bg-ios-gray-fill/70",
  ghost:
    "bg-transparent text-ios-blue hover:bg-ios-blue/10 active:bg-ios-blue/15",
};

export function Button({
  className,
  variant = "primary",
  children,
  disabled,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <motion.button
      type={type}
      whileTap={disabled ? undefined : { scale: 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold",
        "focus-visible:ring-ios-blue/50 transition-colors focus-visible:ring-2 focus-visible:outline-none",
        "disabled:pointer-events-none disabled:opacity-50",
        variantStyles[variant],
        className,
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </motion.button>
  );
}
