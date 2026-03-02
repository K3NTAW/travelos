import Link from "next/link";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Product" },
  { href: "/pricing", label: "Pricing" },
  { href: "/security", label: "Security" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/admin", label: "Admin" }
];

export function SiteHeader(): React.JSX.Element {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-lg font-bold">
          TravelOS
        </Link>
        <div className="flex items-center gap-3">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-slate-200 hover:text-white">
              {link.label}
            </Link>
          ))}
          <Button className="ml-2">Request Demo</Button>
        </div>
      </nav>
    </header>
  );
}
