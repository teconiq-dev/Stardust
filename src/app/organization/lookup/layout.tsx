import { ModeToggle } from "@/components/ui/mode-toggle";
import Link from "next/link";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LookupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navLink = [
    {
      title: "Home",
      href: "#",
    },
    {
      title: "Students",
      href: "#",
      disabled: true,
    },
    {
      title: "Events",
      href: "#",
    },
    {
      title: "Feedback",
      href: "#",
    },
  ];

  return (
    <section className="p-1">
      <header className="flex items-center justify-between p-4 shadow-md shadow-primary transition-colors duration-300">
        <div className="flex items-center">
          <Star className="w-6 h-6 mr-2" />
          <h1 className="text-xl font-bold">StarDust</h1>
        </div>
        <nav className="flex items-center space-x-4">
          {navLink.map((link, key) => (
            <Link href={link.href} prefetch={false} key={key}>
              <Button
                variant="outline"
                className="hover:text-primary"
                disabled={link.disabled}
              >
                {link.title}
              </Button>
            </Link>
          ))}
          <ModeToggle />
        </nav>
      </header>
      {children}
    </section>
  );
}
