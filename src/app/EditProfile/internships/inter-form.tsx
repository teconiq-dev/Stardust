"use client";
import {
  ChevronDownIcon,
  CircleIcon,
  PlusIcon,
  StarIcon,
} from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";

import DatePickerWithRange from "@/app/EditProfile/components/date-picker-withrange";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";

import * as button from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export function AddInt() {
  return (
    <div>
      <h1>Saved Internships</h1>
      <br />
      <div>
        <Card>
          <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
            <div className="space-y-1">
              <CardTitle>Google/ML</CardTitle>
              <CardDescription>
                Did a google ML project that improves accuracy by 4%.
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <CircleIcon className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
                Notebook
              </div>
              <Separator orientation="vertical" />
              <div>Started June 2024</div>
              <Separator orientation="vertical" />
              <div>Ended August 2024</div>
            </div>
          </CardContent>
        </Card>
      </div>
      <br />
      <Separator />
      <br />

      <div>
        <Card>
          <CardHeader>
            <CardTitle>Manage Internships</CardTitle>
            <CardDescription>Add new internship</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" placeholder="Google" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="pr_name">Project Name</Label>
                <Input id="pr_name" placeholder="Project Name" />
              </div>
              {/* <div className="grid gap-2">
                <Label htmlFor="lang">Language</Label>
                <Input id="lang" placeholder="C++" />
              </div> */}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Please give a short description about you internship."
              />
            </div>
            <div>
            <Label htmlFor="date">From - To</Label>
              <DatePickerWithRange className="[&>button]:w-[260px]" />
            </div>
            <div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="certificate">Certificate</Label>
                <Input id="certificate" type="file" />
              </div>
            </div>
          </CardContent>
          <CardFooter className="justify-between space-x-2">
            <button.Button variant="ghost">Cancel</button.Button>
            <button.Button>Submit</button.Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
