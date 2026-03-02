import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends PropsWithChildren {
  className?: string;
}

export function Card({ className, children }: CardProps): React.JSX.Element {
  return <section className={cn("rounded-xl border border-border bg-card p-5", className)}>{children}</section>;
}
