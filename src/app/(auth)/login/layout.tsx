import { Metadata } from "next";
import { Command } from "lucide-react";
import IconCloud from "@/components/ui/magicui/icon-cloud";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Signup/Login to access your account and manage your profile",
};

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-purple-950/10 dark:bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      {/*BUG: bg-[size:6rem_4rem] is removed to fix  dark mode but it removes check effect in light mode*/}
      <div className="flex items-center justify-center flex-wrap bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)] dark:bg-none">
        <div className="flex md:flex-1 flex-col mx-5 mt-10 md:m-10 bg-transparent border-r-0 md:border-r">
          <div className="flex items-center text-lg font-medium mb-3">
            <Command className="mr-2" />
            Bharata Mata College - Computer Science Department
          </div>
          <div className="hidden relative z-10 w-full md:flex flex-col justify-center space-y-4">
            <IconCloud iconSlugs={slugs} />
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;Education is the most powerful weapon which you can use
                to change the world.&rdquo;
              </p>
              <footer className="text-sm">Nelson Mandela</footer>
            </blockquote>
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}
