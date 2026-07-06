import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 whitespace-nowrap",
  {
    variants: {
      variant: {
        primary:
          "bg-chrome text-ink hover:bg-white shadow-[0_8px_28px_-8px_rgba(255,255,255,0.35)] focus-visible:ring-chrome",
        outline:
          "border border-black/15 dark:border-white/15 text-current hover:bg-black/5 dark:hover:bg-white/5 focus-visible:ring-chrome",
        ghost: "text-current hover:bg-black/5 dark:hover:bg-white/10",
        dark: "bg-ink text-cream hover:bg-black focus-visible:ring-chrome",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-[3.25rem] px-8 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />
  )
);
Button.displayName = "Button";
