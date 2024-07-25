"use client";

import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

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

type LinkKeys = keyof typeof links;

const PageNav = () => {
  const pathname = usePathname();
  const path: string[] = pathname
    .split("/")
    .filter((p) => p !== "" && p !== "student");
  const currentPath: string = path[path.length - 1];

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/" prefetch={false}>
              Home
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          {currentPath !== "login" ? (
            <BreadcrumbLink asChild>
              <Link href="/login" prefetch={false}>
                Login
              </Link>
            </BreadcrumbLink>
          ) : (
            <BreadcrumbPage>Login</BreadcrumbPage>
          )}
        </BreadcrumbItem>
        {path.map((p: string, index) => {
          const link = links[p as LinkKeys];
          if (!link) return null; // Handle undefined link safely
          const isLast = index === path.length - 1;
          return (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItem key={index}>
                {isLast ? (
                  <BreadcrumbPage>{link.name}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link href={link.href} prefetch={false}>
                      {link.name}
                    </Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default PageNav;
