import Lookup from "./Lookup";

export default function LookupComponent() {
  return (
    <div className="min-h-screen p-4 transition-colors duration-300">
      <main className="max-w-6xl mx-auto mt-8 transition-colors duration-300">
        <div className="mb-6">
          {/* TODO: find suitable Heading*/}
          <h2 className="text-3xl font-bold">Students</h2>
          <p className="transition-colors duration-300">
            We&apos;re here to help you find the right talent for your team
          </p>
        </div>
        <Lookup />
      </main>
    </div>
  );
}
