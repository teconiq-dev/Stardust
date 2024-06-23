import { Separator } from "@/components/ui/separator"
import { AccountForm } from "@/app/EditProfile/account/account-form"

export default function SettingsAccountPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Account</h3>
        <p className="text-sm text-muted-foreground">
          Update your account settings. Set your skills and education background.
        </p>
      </div>
      <Separator />
      <AccountForm />
    </div>
  )
}