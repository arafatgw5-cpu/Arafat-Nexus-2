import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
<<<<<<< HEAD
      "rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] shadow-sm",
=======
      "rounded-lg border bg-card text-card-foreground shadow-sm",
>>>>>>> 5ecbec057e38bb4142a7f973d49e609781513972
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
<<<<<<< HEAD
      "text-2xl font-semibold leading-none tracking-tight text-[var(--color-text)]",
=======
      "text-2xl font-semibold leading-none tracking-tight",
>>>>>>> 5ecbec057e38bb4142a7f973d49e609781513972
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
<<<<<<< HEAD
    className={cn("text-sm text-[var(--color-muted)]", className)}
=======
    className={cn("text-sm text-muted-foreground", className)}
>>>>>>> 5ecbec057e38bb4142a7f973d49e609781513972
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

<<<<<<< HEAD
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
=======
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
>>>>>>> 5ecbec057e38bb4142a7f973d49e609781513972
