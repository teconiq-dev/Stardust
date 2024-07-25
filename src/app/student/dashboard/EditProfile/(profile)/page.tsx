import { ProfileForm } from "./profile-form";
import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Profile",
//   description: "Create student profile.",
// };

export default function SettingsProfilePage() {
  return (
    <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
      <ProfileForm />
    </div>
  );
}
