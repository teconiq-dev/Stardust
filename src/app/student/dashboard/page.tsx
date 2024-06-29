"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react"
import { Separator } from "@/components/ui/separator"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export default function Component() {
  const [activeTab, setActiveTab] = useState("student-resume")
  return (
    <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] lg:grid-cols-[240px_1fr] gap-6 p-4 md:p-6">
      <div className="hidden md:block">
        <div className="flex flex-col gap-4 items-start py-2">
          <Link href="/student/EditProfile">
          <Button
            variant="outline"
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Edit Profile
          </Button>
          </Link>
          <Button
            variant="outline"
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Settings
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Logout
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="col-span-1 md:col-span-2 lg:col-span-3">
          <TabsList className="grid w-full grid-cols-3 bg-muted rounded-md mb-4">
            <TabsTrigger
              value="student-resume"
              className={`px-4 py-2 rounded-md transition-colors ${
                activeTab === "student-resume" ? "bg-primary text-primary-foreground" : "hover:bg-muted/50"
              }`}
            >
              Student Resume
            </TabsTrigger>
            <TabsTrigger
              value="placement-announcements"
              className={`px-4 py-2 rounded-md transition-colors ${
                activeTab === "placement-announcements" ? "bg-primary text-primary-foreground" : "hover:bg-muted/50"
              }`}
            >
              Placement Announcements
            </TabsTrigger>
            <TabsTrigger
              value="upcoming-events"
              className={`px-4 py-2 rounded-md transition-colors ${
                activeTab === "upcoming-events" ? "bg-primary text-primary-foreground" : "hover:bg-muted/50"
              }`}
            >
              Upcoming Events
            </TabsTrigger>
          </TabsList>
          <TabsContent value="student-resume">
          <Card className="flex flex-col h-full">
              <CardHeader className="bg-primary text-primary-foreground p-4 rounded-t-md">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Student Resume</h2>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-primary-foreground text-primary hover:bg-primary/90 transition-colors"
                  >
                    Download
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="flex-1 overflow-auto p-4">
                <div className="grid gap-6">
                  <div className="grid gap-2">
                    <div className="text-sm font-medium">Name</div>
                    <div className="text-lg font-semibold">Jude Saju</div>
                  </div>
                  <div className="grid gap-2">
                    <div className="text-sm font-medium">Email</div>
                    <div>jude@vazhathottam.com</div>
                  </div>
                  <div className="grid gap-2">
                    <div className="text-sm font-medium">Phone</div>
                    <div>+91 8714465131</div>
                  </div>
                  <div className="grid gap-2">
                    <div className="text-sm font-medium">Education</div>
                    <div>
                      Masters in Artificial Intelligence and Machine Learning, University of Pathalam
                      <br />
                      2021 - 2026
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <div className="text-sm font-medium">Skills</div>
                    <div>React, Typescript, Linuxfunda, Git, </div>
                  </div>
                  <div className="grid gap-2">
                    <div className="text-sm font-medium">Experience</div>
                    <div>
                      ML Intern, Ajalabs.ai.
                      <br />
                      June 2024 - November 2024
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <div className="text-sm font-medium">Objective</div>
                    <div>
                      To secure a challenging position as a Vazha where I can utilize my technical skills
                      and experience to contribute to the success of the vazhathottam.
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <div className="text-sm font-medium">Achievements</div>
                    <div>
                      - Developed a responsive web application using React, Node.js, and SQL
                      <br />- Created development environment cloning system using React 
                      <br />- Created website for college
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <div className="text-sm font-medium">Certifications</div>
                    <div>
                      - Google Cloud certification
                      <br />- Github students pack
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="placement-announcements">
            <Card className="flex flex-col h-full">
              <CardHeader className="bg-primary text-primary-foreground p-4 rounded-t-md">
                <h2 className="text-xl font-semibold">Placement Announcements</h2>
              </CardHeader>
              <CardContent className="flex-1 overflow-auto p-4">
                <div className="grid gap-4">
                  <Card className="border-2 border-primary rounded-md">
                    <CardHeader className="bg-primary/10 p-4 rounded-t-md">
                      <CardTitle className="text-primary">New Company Registered</CardTitle>
                      <CardDescription>
                        Ajalabs Inc. has been registered for the upcoming placement season.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-4">
                      <p>
                        Acme Inc., a initiative startup, has registered for the upcoming placement season.
                        Students are encouraged to prepare their resumes and apply for the available positions.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 border-primary rounded-md">
                    <CardHeader className="bg-primary/10 p-4 rounded-t-md">
                      <CardTitle className="text-primary">Resume Submission Deadline</CardTitle>
                      <CardDescription>The deadline for submitting resumes is June 15th.</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4">
                      <p>
                        The deadline for submitting resumes for the upcoming placement season is June 15th. Students are
                        advised to ensure their resumes are up-to-date and submitted on time.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 border-primary rounded-md">
                    <CardHeader className="bg-primary/10 p-4 rounded-t-md">
                      <CardTitle className="text-primary">Placement Orientation Session</CardTitle>
                      <CardDescription>A placement orientation session will be held on July 13th.</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4">
                      <p>
                        A placement orientation session will be held on July 13th to provide students with information
                        about the placement process, available opportunities, and tips for success. Attendance is highly
                        recommended.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="upcoming-events">
            <Card className="flex flex-col h-full">
              <CardHeader className="bg-primary text-primary-foreground p-4 rounded-t-md">
                <h2 className="text-xl font-semibold">Upcoming Events</h2>
              </CardHeader>
              <CardContent className="flex-1 overflow-auto p-4">
                <div className="bg-yellow-100 p-4 rounded-md mb-4">
                  <div className="flex items-center">
                    <CircleAlertIcon className="w-5 h-5 mr-2 text-yellow-500" />
                    <p className="text-yellow-700 font-medium">
                      A new event has been added to the calendar. Check it out!
                    </p>
                  </div>
                </div>
                <Calendar
                  numberOfMonths={1}
                  className="p-0 [&_td]:w-10 [&_td]:h-10 [&_th]:w-10 [&_[name=day]]:w-10 [&_[name=day]]:h-10 [&>div]:space-x-0 [&>div]:gap-6"
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

function CircleAlertIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" x2="12" y1="8" y2="12" />
      <line x1="12" x2="12.01" y1="16" y2="16" />
    </svg>
  )
}