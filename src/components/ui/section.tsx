import { cn } from "@/lib/utils";
import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> { }

export function Section({ className, ...props }: BadgeProps) {
  return (
    <section
      className={cn("min-h-0 flex flex-col gap-y-4", className)}
      {...props}
    />
  );
}