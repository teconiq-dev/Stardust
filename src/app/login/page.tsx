import { Button } from "@/components/ui/button";
import Link from "next/link";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type FormComponentProps = {
  mode: "student" | "institution";
};

const FormComponent = ({ mode }: FormComponentProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{mode} account</CardTitle>
        <CardDescription>Login here</CardDescription>
      </CardHeader>
      <form>
        <CardContent className="space-y-2">
          {mode === "student" ? (
            <div className="space-y-1">
              <Label htmlFor="rollNo">Roll Number</Label>
              <Input id="rollNo" required />
            </div>
          ) : (
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" required />
            </div>
          )}
          <div className="space-y-1">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>
        </CardContent>
        <CardFooter>
          <Link href={mode === "student" ? "/dashboard" : "/lookup"}>
            <Button type="submit">Login</Button>
          </Link>
        </CardFooter>
      </form>
    </Card>
  );
};

export default function Login() {
  return (
    <Tabs defaultValue="student" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="student">Student</TabsTrigger>
        <TabsTrigger value="institution">Institution</TabsTrigger>
      </TabsList>
      <TabsContent value="student">
        <FormComponent mode="student" />
      </TabsContent>
      <TabsContent value="institution">
        <FormComponent mode="institution" />
      </TabsContent>
    </Tabs>
  );
}
