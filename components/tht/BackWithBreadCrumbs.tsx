"use client"

import { ArrowLeftIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"

const BackWithBreadCrumbs = ({ page, textTheme }: { page: string; textTheme?: string; }) => {
  const router = useRouter();

  return (
    <div className="flex items-center gap-2 mb-8">
      <Button onClick={router.back} variant="link" size="icon" className="p-0">
        <ArrowLeftIcon size={18} className="text-gray-500" />
      </Button>
      <p className="text-gray-400 regular-16">Back</p>
      <p className="text-gray-400 regular-16">Plans / </p>
      <p className={cn("text-blue-950 regular-16", textTheme)}>{page}</p>
    </div>
  )
}

export default BackWithBreadCrumbs