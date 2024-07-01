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
  const path = pathname
    .split("/")
    .filter((p) => p !== "" && p !== "student")[0];

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
          {path !== "login" ? (
            <Link href="/login" prefetch={false}>
              <BreadcrumbLink>Login</BreadcrumbLink>
            </Link>
          ) : (
            <BreadcrumbPage>Login</BreadcrumbPage>
          )}
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          {path !== "dashboard" ? (
            <Link href="/student/dashboard" prefetch={false}>
              <BreadcrumbLink>Dashboard</BreadcrumbLink>
            </Link>
          ) : (
            <BreadcrumbPage>Dashboard</BreadcrumbPage>
          )}
        </BreadcrumbItem>
        {path === "EditProfile" && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <Link href="/student/EditProfile" prefetch={false}>
                <BreadcrumbPage>Edit Profile</BreadcrumbPage>
              </Link>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default PageNav;
