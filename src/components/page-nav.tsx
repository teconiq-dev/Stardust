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

const PageNav = () => {
  const pathname = usePathname();
  const path = pathname.split("/").filter((p) => p !== "" && p !== "student");
  const currentPath = path[path.length - 1];

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
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          {currentPath !== "dashboard" ? (
            <BreadcrumbLink asChild>
              <Link href="/student/dashboard" prefetch={false}>
                Dashboard
              </Link>
            </BreadcrumbLink>
          ) : (
            <BreadcrumbPage>Dashboard</BreadcrumbPage>
          )}
        </BreadcrumbItem>
        {currentPath === "EditProfile" && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Edit Profile</BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default PageNav;
