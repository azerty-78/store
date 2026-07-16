import { cn } from "@/lib/cn";
import { forwardRef, type TextareaHTMLAttributes } from "react";

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          "bg-ios-gray-fill text-foreground min-h-28 w-full resize-none rounded-2xl border-0 px-4 py-3 text-base",
          "placeholder:text-ios-secondary",
          "focus:ring-ios-blue/40 transition-shadow focus:ring-2 focus:outline-none",
          className,
        )}
        {...props}
      />
    );
  },
);

TextArea.displayName = "TextArea";
