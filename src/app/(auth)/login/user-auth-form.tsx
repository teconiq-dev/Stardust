"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LoaderCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface UserAuthFormProps {
  selectedRole: string;
}

export function UserAuthForm({ selectedRole }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <div className="relative overflow-hidden rounded-xl flex flex-col p-10 gap-3 text-center transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset]">
      <h1 className="text-2xl font-semibold tracking-tight transition-all duration-300">
        {selectedRole} Login
      </h1>
      <p className="text-sm text-muted-foreground transition-all duration-300">
        Enter your {selectedRole} ID below to login
      </p>
      <form onSubmit={onSubmit}>
        <div className="flex gap-3 flex-col items-center justify-center">
          <Input
            id="userID"
            placeholder="ID"
            type="text"
            autoCapitalize="none"
            autoComplete="username"
            autoCorrect="off"
            disabled={isLoading}
          />
          <Input
            id="password"
            placeholder="Password"
            type="password"
            autoCapitalize="none"
            autoComplete="current-password"
            autoCorrect="off"
            disabled={isLoading}
          />
          <Link
            href={
              selectedRole === "Student"
                ? "/student/dashboard"
                : selectedRole === "Organization"
                  ? "/organization/lookup"
                  : "/teacher/dashboard"
            }
          >
            <Button disabled={isLoading}>
              {isLoading && (
                <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
              )}
              Sign In
            </Button>
          </Link>
        </div>
      </form>

      <footer className="px-8 text-center text-sm text-muted-foreground">
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
      </footer>
    </div>
  );
}
