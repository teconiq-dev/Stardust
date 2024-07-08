/**
 * v0 by Vercel.
 * @see https://v0.dev/t/8EKumHrAd5W
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  ListFilter as FilterIcon,
  Hand as HandIcon,
  Star as LogInIcon,
  Pin as MapPinIcon,
  MoonStar as MoonIcon,
  SunMedium as SunIcon,
  PhoneCall as PhoneIcon,
  UserRoundSearch as SearchIcon,
  BookOpen as BookIcon,
  Signature as SignatureIcon,
} from "lucide-react";

export default function Component() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const students = [
    {
      name: "Alice Chen",
      email: "alice@stanford.edu",
      course: "Int M.Sc Computer Science (AI & ML)",
      skills: "Data Science",
      languages: ["English", "Mandarin"],
      location: "San Francisco, CA",
      phone: "555-1234",
      year: 5,
      resumeLink: "/resume/alice-chen",
    },
    {
      name: "Bob Smith",
      email: "bob@mit.edu",
      course: "Int M.Sc Computer Science (AI & ML)",
      skills: "Data Science",
      languages: ["English", "Spanish"],
      location: "Boston, MA",
      phone: "555-5678",
      year: 5,
      resumeLink: "/resume/bob-smith",
    },
    {
      name: "Charlie Brown",
      email: "charlie@berkeley.edu",
      course: "Int M.Sc Computer Science (AI & ML)",
      skills: "UX Design",
      languages: ["English", "French"],
      location: "Berkeley, CA",
      phone: "555-9012",
      year: 5,
      resumeLink: "/resume/charlie-brown",
    },
    {
      name: "Diana Davis",
      email: "diana@harvard.edu",
      course: "Int M.Sc Computer Science (AI & ML)",
      skills: "Finance, Marketing",
      languages: ["English", "German"],
      location: "Cambridge, MA",
      phone: "555-3456",
      year: 5,
      resumeLink: "/resume/diana-davis",
    },
    {
      name: "Eve Johnson",
      email: "eve@cmu.edu",
      course: "Int M.Sc Computer Science (AI & ML)",
      skills: "Cybersecurity, AI Research",
      languages: ["English", "Russian"],
      location: "Pittsburgh, PA",
      phone: "555-7890",
      year: 5,
      resumeLink: "/resume/eve-johnson",
    },
    {
      name: "Frank Miller",
      email: "frank@yale.edu",
      course: "BCA Computer Science",
      skills: "Public Policy, Environmental Studies",
      languages: ["English", "Mandarin"],
      location: "New Haven, CT",
      phone: "555-2109",
      year: 4,
      resumeLink: "/resume/frank-miller",
    },
    {
      name: "Grace Lee",
      email: "grace@ucla.edu",
      course: "BCA Computer Science",
      skills: "Biomedical Engineering",
      languages: ["English", "Korean"],
      location: "Los Angeles, CA",
      phone: "555-6543",
      year: 4,
      resumeLink: "/resume/grace-lee",
    },
    {
      name: "Henry Wang",
      email: "henry@nyu.edu",
      course: "BCA Computer Science",
      skills: "Film Production, Graphic Design",
      languages: ["English", "Cantonese"],
      location: "New York, NY",
      phone: "555-0987",
      year: 4,
      resumeLink: "/resume/henry-wang",
    },
    {
      name: "Ivy Taylor",
      email: "ivy@princeton.edu",
      course: "BCA Computer Science",
      skills: "Mathematics, Economics",
      languages: ["English", "Spanish"],
      location: "Princeton, NJ",
      phone: "555-4321",
      year: 4,
      resumeLink: "/resume/ivy-taylor",
    },
    {
      name: "Jack Liu",
      email: "jack@uwaterloo.ca",
      course: "BCA Computer Science",
      skills: "Software Development, Data Analysis",
      languages: ["English", "Mandarin"],
      location: "Waterloo, ON",
      phone: "555-8765",
      year: 4,
      resumeLink: "/resume/jack-liu",
    },
  ];
  const [events, setEvents] = useState<Event[]>([]);
  const [feedback, setFeedback] = useState([]);
  const handleAddEvent = (event: any) => {
    setEvents([...events, event]);
  };
  
  return (
    <div
      className={`min-h-screen p-4 transition-colors duration-300 ${
        theme === "light"
          ? "bg-gray-100 text-gray-900"
          : "bg-gray-900 text-gray-100"
      }`}
    >
      <header
        className={`flex items-center justify-between p-4 shadow-md transition-colors duration-300 ${
          theme === "light"
            ? "bg-white text-gray-900"
            : "bg-gray-800 text-gray-100"
        }`}
      >
        <div className="flex items-center">
          <LogInIcon className="w-6 h-6 mr-2" />
          <h1 className="text-xl font-bold">StarDust</h1>
        </div>
        <nav className="flex space-x-4">
          <Link
            href="#"
            className={`transition-colors duration-300 ${
              theme === "light"
                ? "text-gray-600 hover:text-gray-900"
                : "text-gray-400 hover:text-gray-100"
            }`}
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href="#"
            className={`font-semibold transition-colors duration-300 ${
              theme === "light"
                ? "text-gray-900 hover:text-black"
                : "text-gray-100 hover:text-white"
            }`}
            prefetch={false}
          >
            Students
          </Link>
          <Link
            href="#"
            className={`transition-colors duration-300 ${
              theme === "light"
                ? "text-gray-600 hover:text-gray-900"
                : "text-gray-400 hover:text-gray-100"
            }`}
            prefetch={false}
          >
            Events
          </Link>
          <Link
            href="#"
            className={`transition-colors duration-300 ${
              theme === "light"
                ? "text-gray-600 hover:text-gray-900"
                : "text-gray-400 hover:text-gray-100"
            }`}
            prefetch={false}
          >
            Feedback
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="ml-auto rounded-full"
            onClick={toggleTheme}
          >
            {theme === "light" ? (
              <MoonIcon className="w-5 h-5" />
            ) : (
              <SunIcon className="w-5 h-5" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </nav>
      </header>
      <main
        className={`max-w-6xl mx-auto mt-8 transition-colors duration-300 ${
          theme === "light" ? "text-gray-900" : "text-gray-100"
        }`}
      >
        <div className="mb-6">
          <h2 className="text-3xl font-bold">Students</h2>
          <p
            className={`transition-colors duration-300 ${
              theme === "light" ? "text-gray-600" : "text-gray-400"
            }`}
          >
            We&apos;re here to help you find the right talent for your team
          </p>
        </div>
        <div
          className={`relative mb-6 transition-colors duration-300 ${
            theme === "light" ? "text-gray-400" : "text-gray-500"
          }`}
        >
          <SearchIcon className="absolute left-3 top-3 w-5 h-5" />
          <Input
            type="search"
            placeholder="Search students"
            className={`w-full pl-10 pr-4 py-2 border rounded-md transition-colors duration-300 ${
              theme === "light"
                ? "bg-white text-gray-900 border-gray-300 focus:ring-primary focus:border-primary"
                : "bg-gray-800 text-gray-100 border-gray-700 focus:ring-primary focus:border-primary"
            }`}
          />
        </div>
        <div className="flex space-x-4 mb-6">
          <Button
            variant="outline"
            className={`transition-colors duration-300 ${
              theme === "light"
                ? "text-white border-black hover:bg-gray-900" // Changed colors for better visibility in light mode
                : "text-gray-100 border-gray-700 hover:bg-gray-800"
            }`}
          >
            All students
          </Button>
          <Button
            variant="outline"
            className={`transition-colors duration-300 ${
              theme === "light"
                ? "text-white border-black hover:bg-gray-900" // Changed colors for better visibility in light mode
                : "text-gray-100 border-gray-700 hover:bg-gray-800"
            }`}
          >
            New students
          </Button>
          <Button
            variant="outline"
            className={`transition-colors duration-300 ${
              theme === "light"
                ? "text-white border-black hover:bg-gray-900" // Changed colors for better visibility in light mode
                : "text-gray-100 border-gray-700 hover:bg-gray-800"
            }`}
          >
            Hired students
          </Button>
          <Button
            variant="outline"
            className={`transition-colors duration-300 ${
              theme === "light"
                ? "text-white border-black hover:bg-gray-900" // Changed colors for better visibility in light mode
                : "text-gray-100 border-gray-700 hover:bg-gray-800"
            }`}
          >
            <FilterIcon className="w-5 h-5 mr-2" />
            Filter
          </Button>
        </div>
        <div
          className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-3 transition-colors duration-300 ${
            theme === "light" ? "text-gray-900" : "text-gray-100"
          }`}
        >
          {students.map((student, index) => (
            <HoverCard key={index}>
              <HoverCardTrigger asChild>
                <Link
                  href="/student/resume"
                  className={`block p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow transition-colors duration-300 ${
                    theme === "light"
                      ? "bg-white text-gray-900"
                      : "bg-gray-800 text-gray-100"
                  }`}
                  prefetch={false}
                >
                  <div className="mb-2">
                    <h3 className="text-lg font-semibold">{student.name}</h3>
                    <p
                      className={`transition-colors duration-300 ${
                        theme === "light" ? "text-gray-600" : "text-gray-400"
                      }`}
                    >
                      {student.email}
                    </p>
                  </div>
                  <div
                    className={`text-sm transition-colors duration-300 ${
                      theme === "light" ? "text-gray-500" : "text-gray-400"
                    }`}
                  >
                    <p>Skills: {student.skills}</p>
                    <p>Year: {student.year}</p>
                  </div>
                </Link>
              </HoverCardTrigger>
              <HoverCardContent
                className={`w-80 transition-colors duration-300 ${
                  theme === "light"
                    ? "bg-white text-gray-900"
                    : "bg-gray-800 text-gray-100"
                }`}
              >
                <div className="flex justify-between space-x-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>
                      {student.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">{student.name}</h4>
                    <p
                      className={`text-sm transition-colors duration-300 ${
                        theme === "light" ? "text-gray-600" : "text-gray-400"
                      }`}
                    >
                      {student.email}
                    </p>
                    <div className="flex items-center pt-2">
                      <HandIcon
                        className={`mr-2 h-4 w-4 opacity-70 transition-colors duration-300 ${
                          theme === "light" ? "text-gray-500" : "text-gray-400"
                        }`}
                      />
                      <span
                        className={`text-xs transition-colors duration-300 ${
                          theme === "light" ? "text-gray-500" : "text-gray-400"
                        }`}
                      >
                        {student.skills}
                      </span>
                    </div>
                    <div className="flex items-center pt-2">
                      <MapPinIcon
                        className={`mr-2 h-4 w-4 opacity-70 transition-colors duration-300 ${
                          theme === "light" ? "text-gray-500" : "text-gray-400"
                        }`}
                      />
                      <span
                        className={`text-xs transition-colors duration-300 ${
                          theme === "light" ? "text-gray-500" : "text-gray-400"
                        }`}
                      >
                        {student.location}
                      </span>
                    </div>
                    <div className="flex items-center pt-2">
                      <PhoneIcon
                        className={`mr-2 h-4 w-4 opacity-70 transition-colors duration-300 ${
                          theme === "light" ? "text-gray-500" : "text-gray-400"
                        }`}
                      />
                      <span
                        className={`text-xs transition-colors duration-300 ${
                          theme === "light" ? "text-gray-500" : "text-gray-400"
                        }`}
                      >
                        {student.phone}
                      </span>
                    </div>
                    <div className="flex items-center pt-2">
                      <BookIcon
                        className={`mr-2 h-4 w-4 opacity-70 transition-colors duration-300 ${
                          theme === "light" ? "text-gray-500" : "text-gray-400"
                        }`}
                      />
                      <span
                        className={`text-xs transition-colors duration-300 ${
                          theme === "light" ? "text-gray-500" : "text-gray-400"
                        }`}
                      >
                        {student.course}
                      </span>
                    </div>
                    <div className="flex items-center pt-2">
                      <SignatureIcon
                        className={`mr-2 h-4 w-4 opacity-70 transition-colors duration-300 ${
                          theme === "light" ? "text-gray-500" : "text-gray-400"
                        }`}
                      />
                      <span
                        className={`text-xs transition-colors duration-300 ${
                          theme === "light" ? "text-gray-500" : "text-gray-400"
                        }`}
                      >
                        {student.year}
                      </span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </main>
    </div>
  );
}

