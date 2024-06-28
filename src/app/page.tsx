import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import Globe from "@/components/ui/magicui/globe";
import { Label } from "@/components/ui/label";
import ParticlesWrapper from "../components/particles";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-dvh overflow-hidden bg-gradient-to-br from-zinc-900/40 to-neutral-900/70">
      <nav className="my-16 absolute top-0 right-0 m-4 animate-fade-in">
        <ModeToggle />
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <ParticlesWrapper />
      <Label className="z-10 text-6xl text-transparent duration-1000 text-edge-outline animate-title font-extralight sm:text-6xl md:text-8xl whitespace-nowrap bg-clip-text">
        Stardust
      </Label>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <Link href="/login">
          <Button>Get Started</Button>
        </Link>
      </div>
      <Globe className="z-[-1]" />
    </div>
  );
}
