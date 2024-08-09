"use client";

import { Input } from "@/components/ui/input";
import {
  Hand as HandIcon,
  Pin as MapPinIcon,
  PhoneCall as PhoneIcon,
  UserRoundSearch as SearchIcon,
  BookOpen as BookIcon,
  Signature as SignatureIcon,
} from "lucide-react";
import {
  Card,
  CardFooter,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Filter } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

const students = [
  {
    name: "Alice Chen",
    email: "alice@stanford.edu",
    course: "Int M.Sc Computer Science (AI & ML)",
    skills: ["Data Science"],
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
    skills: ["Data Science"],
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
    skills: ["UX Design"],
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
    skills: ["Finance", "Marketing"],
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
    skills: ["Cybersecurity", "AI Research"],
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
    skills: ["HTML", "CSS"],
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
    skills: ["Biomedical Engineering"],
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
    skills: ["Film Production", "Graphic Design"],
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
    skills: ["Mathematics", "Economics"],
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
    skills: ["Flutter", "Firebase"],
    languages: ["English", "Mandarin"],
    location: "Waterloo, ON",
    phone: "555-8765",
    year: 4,
    resumeLink: "/resume/jack-liu",
  },
];
function Lookup() {
  const [layout, setLayout] = useState("grid");
  const [sort, setSort] = useState("name");

  return (
    <>
      <div className="flex items-center justify-between mb-8 flex-wrap gap-4 p-1">
        <div className="relative flex items-center transition-colors duration-300 basis-full md:basis-1/2 lg:basis-1/3">
          <SearchIcon className="absolute left-3 top-2 w-5 h-5" />
          <Input
            type="search"
            placeholder="Search students"
            className="w-full pl-10 pr-4 py-2 border rounded-md transition-colors duration-300"
          />
        </div>
        <div className="basis-full md:basis-auto flex justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 border-primary">
              <DropdownMenuLabel>Display layout</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value={layout} onValueChange={setLayout}>
                <DropdownMenuRadioItem value="grid">Grid</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="list">List</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Sort order</DropdownMenuLabel>
              <DropdownMenuRadioGroup value={sort} onValueChange={setSort}>
                <DropdownMenuRadioItem value="name">Name</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="year">Year</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="skill">
                  Skill
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div
        className={`gap-4 ${layout === "list" ? "flex flex-col" : "grid sm:grid-cols-2 lg:grid-cols-3"}`}
      >
        {students.map((student, index) => (
          <HoverCard key={index}>
            <HoverCardTrigger asChild>
              <Link href="/student/resume" prefetch={false}>
                <Card
                  className={`rounded-lg shadow-md hover:shadow-lg hover:border-primary flex ${layout === "grid" ? "flex-col" : "flex-row justify-between items-center"}`}
                >
                  <CardHeader>
                    <CardTitle>{student.name}</CardTitle>
                    <CardDescription>{student.email}</CardDescription>
                  </CardHeader>
                  <CardFooter className="text-sm flex justify-between">
                    <div className="flex flex-wrap gap-1">
                      {student.skills.map((skill, index) => (
                        <Badge key={index}>{skill}</Badge>
                      ))}
                    </div>
                    <p>Year: {student.year}</p>
                  </CardFooter>
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
    </>
  );
}

export default Lookup;
