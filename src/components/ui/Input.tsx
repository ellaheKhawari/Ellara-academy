import { forwardRef, type InputHTMLAttributes, type LabelHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "h-11 w-full rounded-xl border border-black/10 bg-white/70 px-4 text-sm text-ink placeholder:text-black/40 outline-none transition-colors focus:border-chrome focus:ring-2 focus:ring-chrome/30",
        "dark:border-white/10 dark:bg-white/5 dark:text-cream dark:placeholder:text-white/30",
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";

export const Label = ({ className, ...props }: LabelHTMLAttributes<HTMLLabelElement>) => (
  <label className={cn("mb-1.5 block text-xs font-medium text-black/60 dark:text-white/60", className)} {...props} />
);
