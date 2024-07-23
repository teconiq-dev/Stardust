"use client";
import Link from "next/link";
import { UserAuthForm } from "./user-auth-form";
import { useTheme } from "next-themes";

export default function AuthenticationPage() {
  const { theme } = useTheme();

  return (
    <div className="mx-auto flex flex-1 w-full flex-col justify-center space-y-6 bg-transparent">
      {
        // light and dark custom background
        theme === "light" ? (
          <div className="absolute inset-0 z-[-2] h-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
          </div>
        ) : (
          <div className="absolute top-0 inset-0 z-[0] h-full bg-purple-950/10 bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        )
      }

      <div className="flex flex-col m-14 p-10 space-y-2 text-center transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset]">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">
            Students Login
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your StudentID below to login
          </p>
        </div>
        <UserAuthForm />
        <p className="px-8 text-center text-sm text-muted-foreground">
          By clicking continue, you agree to our{" "}
          <Link
            href="/terms"
            className="underline underline-offset-4 hover:text-primary"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy"
            className="underline underline-offset-4 hover:text-primary"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
