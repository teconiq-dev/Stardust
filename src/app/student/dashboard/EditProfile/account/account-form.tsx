"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import { DatePickerWithRange } from "@/components/ui/date-range-picker";
import SkillComponent from "./SkillComponent";

const accountFormSchema = z.object({
  skill: z
    .string()
    .min(1, {
      message: "Skills must be at least 1 characters.",
    })
    .max(15, {
      message: "Skills must not be longer than 15 characters.",
    }),
  doj: z.date({
    required_error: "Date is required",
  }),
  language: z.string({
    required_error: "Please select a language.",
  }),
  cv: z.string({
    required_error: "Please select a file.",
  }),
  edu: z
    .string()
    .min(1, { message: "Enter valid name." })
    .max(3, { message: "Enter valid name." }),
});

type AccountFormValues = z.infer<typeof accountFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<AccountFormValues> = {
  // name: "Your name",
  // dob: new Date("2023-01-23"),
};

export function AccountForm() {
  const form = useForm<AccountFormValues>({
    resolver: zodResolver(accountFormSchema),
    defaultValues,
  });

  function onSubmit(data: AccountFormValues) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="skill"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Skills</FormLabel>
              <SkillComponent />
              <FormDescription>
                These will be the skills displayed on your profile.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Separator />
        <FormField
          control={form.control}
          name="edu"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Higher Secondary school</FormLabel>
              <FormControl>
                <Input placeholder="eg. Cardinal HSS, Thrikkakara" {...field} />
              </FormControl>
              <FormDescription>Enter your XII school.</FormDescription>
              <FormMessage />
              <FormLabel>Passout year</FormLabel>
              <FormControl>
                <Input placeholder="YYYY" {...form.register("doj")} />
              </FormControl>
              <FormDescription>eg. 2019</FormDescription>
            </FormItem>
          )}
        />
        <Separator />

        <FormField
          control={form.control}
          name="skill"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Experiences
                <br />
                <br />
              </FormLabel>

              <FormLabel>Role</FormLabel>
              <FormControl>
                <Input placeholder="eg. Tech Lead" {...field} />
              </FormControl>
              <FormLabel>Company/Organization</FormLabel>
              <FormControl>
                <Input placeholder="eg. Tech Lead" {...field} />
              </FormControl>
              <FormField
                control={form.control}
                name="doj"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>From - To</FormLabel>
                    <DatePickerWithRange className="[&>button]:w-[260px]" />
                    <FormDescription>Enter you active term.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </FormItem>
          )}
        />
        <Button variant="outline" size="icon">
          <PlusCircledIcon className="h-4 w-4" />
        </Button>
        <br />
        <Separator />
        <FormField
          control={form.control}
          name="cv"
          render={({ field }) => (
            <FormItem>
              <FormLabel>CV</FormLabel>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Input id="cv" type="file" />
              </div>
              <FormDescription>Include a CV of pdf format.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Update account</Button>
      </form>
    </Form>
  );
}
