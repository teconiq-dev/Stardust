import { Separator } from "@/components/ui/separator";
import { AddInt } from "./inter-form";
import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Internships",
//   description: "Create student profile.",
// };

export default function SettingsInternshipPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Internships</h3>
        <p className="text-sm text-muted-foreground">
          Add your internship info.
        </p>
      </div>
      <Separator />
      <AddInt />
    </div>
  );
}
