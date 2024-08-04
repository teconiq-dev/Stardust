import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import PageNav from "@/components/page-nav";
import { NotificationSheet } from "@/components/notification-sheet";
import { ModeToggle } from "@/components/ui/mode-toggle";

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const links = {
    dashboard: {
      name: "Dashboard",
      href: "/student/dashboard",
    },
    EditProfile: {
      name: "Edit Profile",
      href: "/student/dashboard/EditProfile",
    },
    account: {
      name: "Account",
      href: "",
    },
    projects: {
      name: "Projects",
      href: "",
    },
    internships: {
      name: "Internship",
      href: "",
    },
  };

  return (
    <section>
      {/* TODO: set bg-color for navbar*/}
      <header className="sticky top-0 z-40 border-b-2 bg-secondary rounded-br-lg rounded-bl-lg px-4 py-2 sm:px-6 md:py-3">
        <div className="mx-auto flex items-center justify-between">
          <PageNav links={links} />
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <User />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>My Account</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <ModeToggle toggle />
            <NotificationSheet />
          </div>
        </div>
      </header>
      {children}
      <footer className="bg-muted px-4 py-6 sm:px-6 md:py-8">
        <div className="container mx-auto flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; 2024 Teconiq-dev. All rights reserved.
          </p>
          <nav className="flex items-center gap-4">
            <Link
              href="/extras/privacypolicy"
              className="text-sm hover:underline"
              prefetch={false}
            >
              Privacy Policy
            </Link>
            <Link
              href="/tos"
              className="text-sm hover:underline"
              prefetch={false}
            >
              Terms of Service
            </Link>
            <Link
              href="/contactus"
              className="text-sm hover:underline"
              prefetch={false}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </footer>
    </section>
  );
}
