import { cn } from "@/lib/cn";
import { forwardRef, type InputHTMLAttributes } from "react";

type InputVariant = "default" | "pill";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  variant?: InputVariant;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant = "default", type = "text", ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(
          "bg-ios-gray-fill text-foreground w-full border-0 px-4 py-3 text-base",
          "placeholder:text-ios-secondary",
          "focus:ring-ios-blue/40 transition-shadow focus:ring-2 focus:outline-none",
          variant === "pill" ? "rounded-full" : "rounded-2xl",
          className,
        )}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";
