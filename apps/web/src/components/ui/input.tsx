import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"

import { cn } from "#/lib/utils.ts"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "h-(--control-h) w-full min-w-0 rounded-(--control-radius) border border-input bg-background px-(--control-px) text-[length:var(--control-text)] shadow-xs outline-hidden transition-[border-color,box-shadow] duration-150 ease-standard file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-caption file:font-medium file:text-foreground placeholder:text-muted-foreground hover:border-ring/40 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/20 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-muted/30 aria-invalid:border-destructive aria-invalid:ring-[3px] aria-invalid:ring-destructive/20",
        className
      )}
      {...props}
    />
  )
}

export { Input }
