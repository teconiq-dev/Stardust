import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Authentication",
  description: "Signup/Login to access your account and manage your profile",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex items-center justify-center h-screen">
      {children}
    </section>
  );
}
