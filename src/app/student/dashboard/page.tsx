import { FileBadge2 as FileIcon } from "lucide-react";
import { WobbleCard } from "@/components/ui/wobble-card";
import Image from "next/image";
import { PinContainer } from "@/components/ui/3d-pin";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
  const placements = [
    {
      title: "Amazon Cloud Service intern",
      date: "July 23,2024",
      image: "/amazon_13171583.png",
      href: "https://www.amazon.jobs/content/en/teams/amazon-web-services/internships",
    },
    {
      title: "Microsoft AI internship",
      date: "June 23,2024",
      image: "/microsoft_13171717.png",
      href: "https://careers.microsoft.com/v2/global/en/careers-in-ai.html",
    },
    {
      title: "Apple Internship",
      date: "August 15,2024",
      image: "/apple_13171687.png",
      href: "https://jobs.apple.com/en-in/search?team=internships-STDNT-INTRN",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 px-4 md:px-16 py-6 md:py-8 space-y-10">
        <WobbleCard containerClassName="bg-indigo-800 min-h-[500px] lg:min-h-[300px]">
          <div className="z-10 relative">
            <section>
              <div className="flex items-center justify-start">
                <div className="text-[#1a044d]">
                  <h2 className="text-2xl font-bold">Resume Viewer</h2>
                  <p>Manage your resume and application materials.</p>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-center flex-wrap gap-5">
                <Card>
                  <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
                    <FileIcon className="h-12 w-12 text-primary" />
                    <div className="text-center">
                      <h3 className="text-lg font-semibold">Resume 1</h3>
                      <p className="text-muted-foreground">
                        Last updated: May 15, 2023
                      </p>
                    </div>
                    <div className="flex gap-2">
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
                    <div className="flex gap-2">
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
                    <div className="flex gap-2">
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
          </div>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-2 min-h-[300px] bg-red-900">
          <section className="relative z-10 space-y-8">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div className="text-[#2c0d0b]">
                <h2 className="text-2xl font-bold">Placement Announcements</h2>
                <p>Stay up-to-date with the latest placement opportunities.</p>
              </div>
              <Button variant="outline">View All</Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
              {placements.map((placement, key) => (
                <PinContainer
                  title={placement.title}
                  href={placement.href}
                  key={key}
                  className="my-5"
                >
                  <div className="flex flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-full h-[20rem]">
                    <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                      {placement.title}
                    </h3>
                    <div className="text-base !m-0 !p-0 font-normal">
                      <span className="text-slate-500">{placement.date}</span>
                    </div>
                    <div className="relative flex justify-center items-center flex-1 w-60 h-60 rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
                      <Image
                        src={placement.image}
                        alt="Company Logo"
                        width={400}
                        height={400}
                        className="w-3/4 rounded-lg"
                      />
                    </div>
                  </div>
                </PinContainer>
              ))}
            </div>
          </section>
        </WobbleCard>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <WobbleCard containerClassName="col-span-1 bg-green-900 min-h-[300px]">
            <section className="relative z-10">
              <div className="flex items-center justify-between gap-5 flex-wrap">
                <div className="text-[#291129]">
                  <h2 className="text-2xl font-bold">Upcoming Events</h2>
                  <p>View the calendar of upcoming placement-related events.</p>
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
          <WobbleCard containerClassName="col-span-1 bg-lime-900 min-h-[300px] z-0">
            <section className="relative z-10">
              <div className="flex items-center justify-between">
                <div className="text-[#180713]">
                  <h2 className="text-2xl font-bold">Interview Preparation</h2>
                  <p>Learn tips and strategies to ace your interviews.</p>
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
                          Tailor your resume and cover letter to the specific
                          job requirements.
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
                          Dress professionally and arrive early for the
                          interview.
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
                  <AccordionTrigger className="z-10">
                    How to Design a Resume
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <p>
                        Here are some tips for designing an effective resume:
                      </p>
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
                          Tailor the content to the specific job you are
                          applying for.
                        </li>
                        <li>
                          Use concise, action-oriented language to describe your
                          responsibilities and accomplishments.
                        </li>
                        <li>
                          Include quantifiable results and metrics to
                          demonstrate your impact.
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
                        The main differences between a CV (Curriculum Vitae) and
                        a resume are:
                      </p>
                      <ul className="list-disc space-y-2 pl-6">
                        <li>
                          Length: A CV is typically longer and more detailed,
                          while a resume is a concise summary.
                        </li>
                        <li>
                          Purpose: A CV is used for academic or
                          research-oriented roles, while a resume is used for
                          most other job applications.
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
                          commonly used in the United States and other
                          countries.
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
