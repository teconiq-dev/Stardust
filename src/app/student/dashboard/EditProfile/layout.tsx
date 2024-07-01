import { Separator } from "@/components/ui/separator";
import { SidebarNav } from "@/components/sidebar-nav";

const sidebarNavItems = [
  {
    title: "Profile",
    href: "/student/dashboard/EditProfile",
  },
  {
    title: "Account",
    href: "/student/dashboard/EditProfile/account",
  },
  {
    title: "Projects",
    href: "/student/dashboard/EditProfile/projects",
  },
  {
    title: "Internships",
    href: "/student/dashboard/EditProfile/internships",
  },
];

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <>
      <div className="space-y-6 p-10 pb-16 md:block">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Edit Profile</h2>
          <p className="text-muted-foreground">
            Manage your account and set/edit your info.
          </p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1 lg:max-w-2xl">{children}</div>
        </div>
      </div>
    </>
  );
}
