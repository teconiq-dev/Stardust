"use client";

import Link from 'next/link';
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/ui/magicui/animated-grid-pattern";
import ShinyButton from "@/components/ui/magicui/shiny-button";

export default function NotFound() {
  return (
    <div className="flex h-screen w-screen items-center justify-center overflow-hidden bg-background">
      <div className="z-10 flex flex-col items-center justify-center space-y-4">
        <p className="whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
          Could not find requested resource 🙏😌
        </p>
        <Link href="/">
        <ShinyButton text="Return Home" />
        </Link>
      </div>
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.5}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
          "absolute top-0 right-0 bottom-0 left-0"
        )}
      />
    </div>
  );
}





{/* <div>
<h2>Not Found</h2>
<p>Could not find requested resource</p>
<Link href="/">Return Home</Link>
</div> */}