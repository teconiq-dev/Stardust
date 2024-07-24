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
    <section className="flex items-center justify-center h-screen">
      <div className="hidden h-full md:flex flex-1 flex-col p-10 border-r bg-transparent">
        <div className="flex items-center text-lg font-medium">
          <Command size={24} className="mr-2" />
          Teconiq-dev
        </div>
        <div className="w-full flex flex-col justify-center space-y-4">
          <IconCloud iconSlugs={slugs} />
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;Education is the most powerful weapon which you can use to
              change the world.&rdquo;
            </p>
            <footer className="text-sm">Nelson Mandela</footer>
          </blockquote>
        </div>
      </div>
      {children}
    </section>
  );
}
