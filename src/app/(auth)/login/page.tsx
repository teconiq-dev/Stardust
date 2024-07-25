"use client";
import Link from "next/link";
import { UserAuthForm } from "./user-auth-form";
import { useTheme } from "next-themes";
import { FlipWords } from "@/components/ui/flip-words";
import React, { useState } from "react";
import Studentsvg from "../../../components/Icons/studentsvg";
import OrgSvg from "../../../components/Icons/organizationsvg";
import TeachSvg from "../../../components/Icons/teacher";

export default function AuthenticationPage() {
  const { theme } = useTheme();
  const words = ["Student", "Organization", "Faculty"];
  const [, setReset] = useState(false);
// TODO: create toggle mode for each icon and change heading accordingly
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

      <div
          className="flex flex-col m-14 p-10 space-y-2 text-center transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset]">

        <div>
          <h1 className="text-2xl font-semibold tracking-tight">
            <FlipWords words={words}/> Login
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your StudentID below to login
          </p>
        </div>
        <div>
          <div className="grid grid-cols-3 gap-x-3">
            <button
                onMouseEnter={() => setReset(false)}
                onMouseLeave={() => setReset(true)}
                className="group flex transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset]  border-white/10  items-center justify-center py-5 border rounded-lg hover:bg-transparent/50 duration-150 active:bg-transparent/50"
            >
              <Studentsvg/>
              <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Student
              </span>
            </button>
            <button
                onMouseEnter={() => setReset(false)}
                onMouseLeave={() => setReset(true)}
                className="group flex transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset]  border-white/10  items-center justify-center py-5 border rounded-lg hover:bg-transparent/50 duration-150 active:bg-transparent/50"
            >
              <OrgSvg/>
              <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Organization
              </span>
            </button>
            <button
                onMouseEnter={() => setReset(false)}
                onMouseLeave={() => setReset(true)}
                className="group flex transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset]  border-white/10  items-center justify-center py-5 border rounded-lg hover:bg-transparent/50 duration-150 active:bg-transparent/50"
            >
              <TeachSvg/>
              <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Teacher
              </span>
            </button>
            {/*TODO: during hover make icon invisible or give background to text */}
          </div>
        </div>
        <UserAuthForm/>
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
