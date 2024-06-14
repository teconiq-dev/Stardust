import { Skeleton } from "@/components/ui/skeleton"

export default function SkeletonGrid() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="grid grid-cols-3 gap-16">
        {Array(9).fill().map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  )
}

function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}