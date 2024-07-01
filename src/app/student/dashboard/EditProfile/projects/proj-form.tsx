"use client";

import { CircleIcon, StarIcon } from "@radix-ui/react-icons";
import { Separator } from "@/components/ui/separator";
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
import { Button } from "@/components/ui/button";

export function AddPro() {
  return (
    <div>
      <h1>Saved Projects</h1>
      <br />
      <div>
        <Card>
          <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
            <div className="space-y-1">
              <CardTitle>stalinosmj/eleytra</CardTitle>
              <CardDescription>
                Electrical vehicle charging station finder. Accessible.
                Customizable. Open Source.
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <CircleIcon className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
                Flutter
              </div>
              <div className="flex items-center">
                <StarIcon className="mr-1 h-3 w-3" />
                20k
              </div>
              <div>Updated June 2024</div>
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
            <CardTitle>Manage Projects</CardTitle>
            <CardDescription>Add new project</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="pr_type">Project Type</Label>
                <Select defaultValue="repo">
                  <SelectTrigger id="pr_type">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="repo">Github repo</SelectItem>
                    <SelectItem value="website">Website</SelectItem>
                    <SelectItem value="Researchpaper">
                      Research Paper
                    </SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="pr_name">Project Name</Label>
                <Input id="pr_name" placeholder="Project Name" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="Position">Position</Label>
                <Input id="lang" placeholder="Developer" />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="subject">Link</Label>
              <Input id="subject" placeholder="https://github.com/...." />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Please give a short description of your project."
              />
            </div>
          </CardContent>
          <CardFooter className="justify-between space-x-2">
            <Button variant="ghost">Cancel</Button>
            <Button>Submit</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
