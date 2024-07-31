import {
  FileBadge2 as FileIcon,
  CalendarFold as CalendarIcon,
} from "lucide-react";
import { WobbleCard } from "@/components/ui/wobble-card";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import Link from "next/link";

// TODO: change colours of shadcn components(stale black in dark mode and pure white in light mode)

export default function Dashboard() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <main className="flex-1 px-4 py-6 sm:px-6 md:py-8">
        <div className="container mx-auto grid gap-8">
          <WobbleCard
              containerClassName="col-span-1 lg:col-span-2 h-full bg-indigo-800 min-h-[500px] lg:min-h-[300px]"
          >
          <section>
            <div className="flex items-center justify-between z-10">
              <div>
                <h2 className="text-2xl font-bold">Resume Viewer</h2>
                <p className="text-muted-foreground">
                  Manage your resume and application materials.
                </p>
              </div>

              <Button>Upload Resume</Button>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
                  <FileIcon className="h-12 w-12 text-primary" />
                  <div className="text-center">
                    <h3 className="text-lg font-semibold">Resume 1</h3>
                    <p className="text-muted-foreground">
                      Last updated: May 15, 2023
                    </p>
                  </div>
                  <div className="flex gap-2 z-10">
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                    <Link
                      href="/student/dashboard/EditProfile"
                      prefetch={false}
                    >
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                    </Link>
                    <Button variant="outline" size="sm">
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
                  <FileIcon className="h-12 w-12 text-primary" />
                  <div className="text-center">
                    <h3 className="text-lg font-semibold">Resume 2</h3>
                    <p className="text-muted-foreground">
                      Last updated: April 20, 2023
                    </p>
                  </div>
                  <div className="flex gap-2 z-10">
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                    <Link
                      href="/student/dashboard/EditProfile"
                      prefetch={false}
                    >
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                    </Link>
                    <Button variant="outline" size="sm">
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
                  <FileIcon className="h-12 w-12 text-primary" />
                  <div className="text-center">
                    <h3 className="text-lg font-semibold">Resume 3</h3>
                    <p className="text-muted-foreground">
                      Last updated: March 10, 2023
                    </p>
                  </div>
                  <div className="flex gap-2 z-10">
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                    <Link
                      href="/student/dashboard/EditProfile"
                      prefetch={false}
                    >
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                    </Link>
                    <Button variant="outline" size="sm">
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-red-900">
          <section>
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Placement Announcements</h2>
                <p className="text-muted-foreground">
                  Stay up-to-date with the latest placement opportunities.
                </p>
              </div>
              <Button variant="outline">View All</Button>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Amazon Campus Placement</CardTitle>
                  <CardDescription>
                    Amazon is conducting on-campus interviews for software
                    engineering roles.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <div className="flex items-center justify-between w-full">
                    <div className="text-muted-foreground">
                      <CalendarIcon className="mr-1 inline-block h-4 w-4" />
                      June 15, 2023
                    </div>
                    <Button variant="outline" size="sm">
                      Apply Now
                    </Button>
                  </div>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Microsoft Internship Program</CardTitle>
                  <CardDescription>
                    Microsoft is offering summer internships for computer
                    science students.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <div className="flex items-center justify-between w-full">
                    <div className="text-muted-foreground flex items-center justify-between">
                      <CalendarIcon className="mr-1 inline-block h-4 w-4" />
                      July 1, 2023
                    </div>
                    <Button variant="outline" size="sm">
                      Apply Now
                    </Button>
                  </div>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Google Developer Student Club</CardTitle>
                  <CardDescription>
                    Google is organizing a workshop on building web
                    applications.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <div className="flex items-center justify-between w-full">
                    <div className="text-muted-foreground">
                      <CalendarIcon className="mr-1 inline-block h-4 w-4" />
                      June 30, 2023
                    </div>
                    <Button variant="outline" size="sm">
                      Register
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </section>
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 bg-green-900 min-h-[300px]">
          <section>
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Upcoming Events</h2>
                <p className="text-muted-foreground">
                  View the calendar of upcoming placement-related events.
                </p>
              </div>
              <Button variant="outline">View Calendar</Button>
            </div>
            <div className="mt-6">
              <Card>
                <CardContent>
                  <Calendar className="w-full" />
                </CardContent>
              </Card>
            </div>
          </section>
          </WobbleCard>
          <WobbleCard containerClassName="col-span-2 bg-lime-900 min-h-[300px] z-0">
          <section>
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Interview Preparation</h2>
                <p className="text-muted-foreground">
                  Learn tips and strategies to ace your interviews.
                </p>
              </div>
            </div>
            <Accordion type="single" collapsible className="mt-6">
              <AccordionItem value="item-1">
                <AccordionTrigger className="z-10">
                  How to Get Selected on Interviews
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <p>
                      To increase your chances of getting selected for
                      interviews, focus on the following:
                    </p>
                    <ul className="list-disc space-y-2 pl-6">
                      <li>
                        Tailor your resume and cover letter to the specific job
                        requirements.
                      </li>
                      <li>
                        Practice common interview questions and prepare
                        thoughtful responses.
                      </li>
                      <li>
                        Research the company and industry to demonstrate your
                        knowledge and interest.
                      </li>
                      <li>
                        Develop a strong understanding of your own skills,
                        experiences, and career goals.
                      </li>
                      <li>
                        Dress professionally and arrive early for the interview.
                      </li>
                      <li>
                        Follow up with the interviewer after the meeting to
                        express your continued interest.
                      </li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="z-10">How to Design a Resume</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <p>Here are some tips for designing an effective resume:</p>
                    <ul className="list-disc space-y-2 pl-6">
                      <li>
                        Use a clean, easy-to-read layout with clear section
                        headings.
                      </li>
                      <li>
                        Highlight your most relevant skills, experiences, and
                        achievements.
                      </li>
                      <li>
                        Tailor the content to the specific job you are applying
                        for.
                      </li>
                      <li>
                        Use concise, action-oriented language to describe your
                        responsibilities and accomplishments.
                      </li>
                      <li>
                        Include quantifiable results and metrics to demonstrate
                        your impact.
                      </li>
                      <li>
                        Proofread carefully to ensure there are no spelling or
                        grammatical errors.
                      </li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="z-10">
                  CV vs. Resume: What&apos;s the Difference?
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <p>
                      The main differences between a CV (Curriculum Vitae) and a
                      resume are:
                    </p>
                    <ul className="list-disc space-y-2 pl-6">
                      <li>
                        Length: A CV is typically longer and more detailed,
                        while a resume is a concise summary.
                      </li>
                      <li>
                        Purpose: A CV is used for academic or research-oriented
                        roles, while a resume is used for most other job
                        applications.
                      </li>
                      <li>
                        Content: A CV includes a comprehensive list of your
                        academic and professional achievements, while a resume
                        focuses on your most relevant skills and experiences.
                      </li>
                      <li>
                        Formatting: A CV has a more formal, structured layout,
                        while a resume is more flexible in its design.
                      </li>
                      <li>
                        Audience: A CV is typically used for international or
                        academic job applications, while a resume is more
                        commonly used in the United States and other countries.
                      </li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
          </WobbleCard>
        </div>
      </main>
    </div>

  );
}
