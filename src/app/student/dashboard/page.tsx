import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ButtonDemo() {
  return (
    <Link href="/student/EditProfile">
      <Button>Edit Profile</Button>
    </Link>
  );
}

