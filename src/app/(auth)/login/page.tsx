import { UserAuthForm } from "./user-auth-form";
import { Tabs } from "@/components/ui/tabs";

export default function AuthenticationPage() {
  const tabs = [
    {
      title: "Student",
      value: "student",
      content: <UserAuthForm selectedRole="Student" />,
    },
    {
      title: "Organization",
      value: "organization",
      content: <UserAuthForm selectedRole="Organization" />,
    },
    {
      title: "Teacher",
      value: "teacher",
      content: <UserAuthForm selectedRole="Teacher" />,
    },
  ];
  return (
    <div className="flex flex-1 w-full flex-col justify-center bg-transparent p-5">
      <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start mb-4">
        <Tabs
          tabs={tabs}
          contentClassName="backdrop-blur-lg h-fit bg-gradient-to-r from-blue-500/5 to-purple-500/5"
          containerClassName="flex justify-center mt-10"
        />
      </div>
    </div>
  );
}
