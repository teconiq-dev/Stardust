import { Separator } from "@/components/ui/separator"
import { AddInt } from "./inter-form"

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
  )
}
