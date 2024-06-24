import { Separator } from "@/components/ui/separator";
import { AddPro } from "./proj-form";

export default function SettingsProjectPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Projects</h3>
        <p className="text-sm text-muted-foreground">
          Add your Github repo, Websites & Papers.
        </p>
      </div>
      <Separator />
      <AddPro />
    </div>
  );
}
