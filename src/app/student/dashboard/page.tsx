import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export const metadata: Metadata = {
  title: "Overview",
  description: "Overview provides the student dashboard.",
};

export default function ResizableDemo() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-screen max-w-full rounded-lg border"
    >
      <ResizablePanel defaultSize={25}>
        <div className="flex h-full items-center justify-center p-6">
          <Link href="/student/EditProfile">
            <Button>Edit Profile</Button>
          </Link>
        </div>
      </ResizablePanel>

      <ResizableHandle withHandle />

      <ResizablePanel defaultSize={50}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={25}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Certificates</span>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={25}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Projects</span>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Notice Board</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={25}>
        <div className="flex h-full flex-col items-center justify-center p-6">
          <span className="font-semibold">Notification Graph</span>
          <div className="mt-4 flex h-full items-center justify-center">
            <Link href="/student/ViewProfile">
              <Button>View Profile</Button>
            </Link>
          </div>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
