import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "#/lib/utils.ts"

// Noteware: hover lifts and brightens, never scales down. Focus ring is always --ring.
const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-md border border-transparent bg-clip-padding font-medium whitespace-nowrap outline-none select-none transition-[transform,box-shadow,background-color,filter,border-color] duration-200 ease-standard focus-visible:ring-[3px] focus-visible:ring-ring/30 focus-visible:border-ring disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-[3px] aria-invalid:ring-destructive/20 motion-safe:hover:not-disabled:-translate-y-px [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-sm hover:brightness-110 hover:shadow-md",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:brightness-110 hover:shadow-md focus-visible:ring-destructive/30",
        outline:
          "border-input bg-background text-foreground shadow-xs hover:bg-secondary hover:border-ring/40 aria-expanded:bg-secondary",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-accent hover:shadow-sm aria-expanded:bg-accent",
        ghost:
          "text-foreground hover:bg-secondary aria-expanded:bg-secondary motion-safe:hover:translate-y-0",
        link: "text-primary underline-offset-4 hover:underline motion-safe:hover:translate-y-0",
      },
      size: {
        default:
          "h-9 gap-2 px-3.5 text-body has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5",
        xs: "h-7 gap-1 rounded-sm px-2 text-caption [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1.5 px-2.5 text-caption has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-11 gap-2 rounded-lg px-8 text-base",
        icon: "size-9",
        "icon-xs": "size-7 rounded-sm [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8 [&_svg:not([class*='size-'])]:size-3.5",
        "icon-lg": "size-11 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
