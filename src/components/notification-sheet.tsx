"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { Bell, Check, ExternalLink } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "./ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { useState } from "react";
import { Label } from "./ui/label";

type Notification = {
  id: number;
  head: string;
  body: string;
};
// thisnotification is fetched from the server
const notifications: Notification[] = [
  {
    id: 1,
    head: "Placement interview next week",
    body: "Your placement interview with ABC Company is scheduled for next Tuesday, June 25th at 2pm.",
  },
  {
    id: 2,
    head: "New job opportunity",
    body: "A new job opportunity for Software Developer role has been posted by XYZ Company. Please review the job details and apply if interested.",
  },
  {
    id: 3,
    head: "Placement training upcoming",
    body: "Training for interviews and tests has been sheduled for the next week.",
  },
];

// This component display read and unread notifications
export const NotificationSheet = () => {
  const [unread, setUnread] = useState<Notification[]>(notifications);
  const [read, setRead] = useState<Notification[]>([]);

  function handleMarkAsRead(notification: Notification) {
    setUnread((prev) => prev.filter((n) => n.id !== notification.id));
    setRead((prev) => [...prev, notification]);
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full relative">
          <Bell />
          {unread.length > 0 && (
            <Label className="absolute -top-1 -right-1 bg-primary text-primary-foreground rounded-full p-1 font-semibold">
              {unread.length}
            </Label>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Notification</SheetTitle>
          <SheetDescription>
            {unread.length > 0
              ? `${unread.length} new notifications`
              : "No new notifications"}
          </SheetDescription>
        </SheetHeader>
        <ScrollArea className="h-3/4 p-2">
          {unread.map((notification: Notification) => (
            <Card key={notification.id} className="pt-3 pl-2 border-2 mb-2">
              <CardTitle>{notification.head}</CardTitle>
              <CardContent className="mt-2 text-muted-foreground">
                {notification.body}
              </CardContent>
              <CardFooter className="flex justify-end items-center gap-4">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-6 w-6 p-1"
                        onClick={() => handleMarkAsRead(notification)}
                      >
                        <Check />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent className="bg-secondary text-secondary-foreground">
                      Mark as read
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        size="icon"
                        variant="link"
                        className="h-6 w-6 p-1"
                      >
                        <ExternalLink />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent className="bg-secondary text-secondary-foreground">
                      View details
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </CardFooter>
            </Card>
          ))}

          {read.map((notification: Notification) => (
            <>
              <SheetDescription className="mt-6 mb-2">
                Viewed notifications
              </SheetDescription>
              <Card
                key={notification.id}
                className="pt-3 pl-2 border-2 mb-2 bg-secondary"
              >
                <CardTitle>{notification.head}</CardTitle>
                <CardContent className="mt-2 text-muted-foreground">
                  {notification.body}
                </CardContent>
                <CardFooter className="flex justify-end items-center gap-4">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          size="icon"
                          variant="outline"
                          className="h-6 w-6 p-1"
                        >
                          <ExternalLink />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent className="bg-secondary text-secondary-foreground">
                        View details
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </CardFooter>
              </Card>
            </>
          ))}
        </ScrollArea>
        <SheetFooter>
          <SheetClose>
            <Button>Dismiss</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
