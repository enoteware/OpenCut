import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "#/lib/utils.ts"

const badgeVariants = cva(
  "group/badge inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-md border border-transparent px-2.5 py-0.5 text-caption font-semibold whitespace-nowrap transition-[background-color,filter] duration-150 ease-standard focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/30 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 [&>svg]:pointer-events-none [&>svg]:size-2.5!",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs [a]:hover:brightness-110",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs [a]:hover:brightness-110",
        destructive:
          "bg-destructive text-destructive-foreground shadow-xs focus-visible:ring-destructive/30 [a]:hover:brightness-110",
        success:
          "bg-success text-success-foreground shadow-xs [a]:hover:brightness-110",
        warning:
          "bg-warning text-warning-foreground shadow-xs [a]:hover:brightness-110",
        info: "bg-info text-info-foreground shadow-xs [a]:hover:brightness-110",
        outline:
          "border-border text-foreground [a]:hover:bg-secondary",
        ghost: "hover:bg-secondary hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  render,
  ...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(badgeVariants({ variant }), className),
      },
      props
    ),
    render,
    state: {
      slot: "badge",
      variant,
    },
  })
}

export { Badge, badgeVariants }
