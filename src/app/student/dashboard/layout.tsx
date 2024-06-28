import { Metadata } from "next";
export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
export const metadata: Metadata = {
  title: "Dashboard",
  description:
    "The Dashboard allows users to view their profile,add their projects,Certificates and see the user notitifications.",
};