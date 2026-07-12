import * as React from "react"

import { cn } from "#/lib/utils.ts"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex field-sizing-content min-h-22 w-full resize-y rounded-md border border-input bg-background px-3 py-2.5 text-body leading-normal shadow-xs outline-none transition-[border-color,box-shadow] duration-150 ease-standard placeholder:text-muted-foreground hover:border-ring/40 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-muted/30 aria-invalid:border-destructive aria-invalid:ring-[3px] aria-invalid:ring-destructive/20",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
