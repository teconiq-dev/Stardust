import { ProfileForm } from "./profile-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
  description: "Create student profile.",
};

export default function SettingsProfilePage() {
  return (
    <div className="space-y-6">
      <ProfileForm />
    </div>
  );
}
