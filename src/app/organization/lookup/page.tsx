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
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  ListFilter as FilterIcon,
  Hand as HandIcon,
  Pin as MapPinIcon,
  PhoneCall as PhoneIcon,
  UserRoundSearch as SearchIcon,
  BookOpen as BookIcon,
  Signature as SignatureIcon,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Component() {
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
    <div className="min-h-screen p-4 transition-colors duration-300">
      <main className="max-w-6xl mx-auto mt-8 transition-colors duration-300">
        <div className="mb-6">
          <h2 className="text-3xl font-bold">Students</h2>
          <p className="transition-colors duration-300">
            We&apos;re here to help you find the right talent for your team
          </p>
        </div>
        <div className="relative mb-6 transition-colors duration-300">
          <SearchIcon className="absolute left-3 top-3 w-5 h-5" />
          <Input
            type="search"
            placeholder="Search students"
            className="w-full pl-10 pr-4 py-2 border rounded-md transition-colors duration-300"
          />
        </div>
        <div className="flex gap-4 mb-6 flex-wrap md:justify-between">
          <div className="flex gap-2 md:gap-3 flex-wrap">
            <Button variant="outline">All students</Button>
            <Button variant="outline">New students</Button>
            <Button variant="outline">Hired students</Button>
          </div>
          <Button variant="outline">
            <FilterIcon className="w-5 h-5 mr-2" />
            Filter
          </Button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 transition-colors duration-300">
          {students.map((student, index) => (
            <HoverCard key={index}>
              <HoverCardTrigger asChild>
                <Link href="/student/resume" prefetch={false}>
                  <Card className="rounded-lg shadow-md hover:shadow-lg hover:border-primary flex flex-col">
                    <CardHeader>
                      <CardTitle>{student.name}</CardTitle>
                      <CardDescription>{student.email}</CardDescription>
                    </CardHeader>
                    <CardContent className="text-sm">
                      <p>Skills: {student.skills}</p>
                      <p>Year: {student.year}</p>
                    </CardContent>
                  </Card>
                </Link>
              </HoverCardTrigger>
              <HoverCardContent className="w-80 transition-colors duration-300">
                <div className="flex justify-between space-x-4">
                  <Avatar>
                    {/* <AvatarImage src="/placeholder-user.jpg" /> */}
                    <AvatarFallback>
                      {student.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">{student.name}</h4>
                    <p className="text-sm transition-colors duration-300">
                      {student.email}
                    </p>
                    <div className="flex items-center pt-2">
                      <HandIcon className="mr-2 h-4 w-4 opacity-70 transition-colors duration-300" />
                      <span className="text-xs transition-colors duration-300">
                        {student.skills}
                      </span>
                    </div>
                    <div className="flex items-center pt-2">
                      <MapPinIcon className="mr-2 h-4 w-4 opacity-70 transition-colors duration-300" />
                      <span className="text-xs transition-colors duration-300">
                        {student.location}
                      </span>
                    </div>
                    <div className="flex items-center pt-2">
                      <PhoneIcon className="mr-2 h-4 w-4 opacity-70 transition-colors duration-300" />
                      <span className="text-xs transition-colors duration-300">
                        {student.phone}
                      </span>
                    </div>
                    <div className="flex items-center pt-2">
                      <BookIcon className="mr-2 h-4 w-4 opacity-70 transition-colors duration-300" />
                      <span className="text-xs transition-colors duration-300">
                        {student.course}
                      </span>
                    </div>
                    <div className="flex items-center pt-2">
                      <SignatureIcon className="mr-2 h-4 w-4 opacity-70 transition-colors duration-300" />
                      <span className="text-xs transition-colors duration-300">
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
