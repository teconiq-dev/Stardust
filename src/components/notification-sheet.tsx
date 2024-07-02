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
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export const NotificationSheet = () => {
  // thisnotification is fetched from the server
  const notifications = [
    {
      head: "Placement interview next week",
      body: "Your placement interview with ABC Company is scheduled for next Tuesday, June 25th at 2pm.",
    },
    {
      head: "New job opportunity",
      body: "A new job opportunity for Software Developer role has been posted by XYZ Company. Please review the job details and apply if interested.",
    },
    {
      head: "Placement training upcoming",
      body: "Training for interviews and tests has been sheduled for the next week.",
    },
  ];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Bell />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Notification</SheetTitle>
          <SheetDescription>See what&apos;s happening</SheetDescription>
        </SheetHeader>
        <ScrollArea className="h-3/4 p-2">
          {notifications.map((notification, index) => (
            <Card key={index} className="pt-3 pl-2 border-2 mb-2">
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
