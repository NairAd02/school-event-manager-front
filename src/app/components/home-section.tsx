import type React from "react"
import Image from "next/image"

interface HomeBannerSectionProps {
  title: string
  image: string
  icon?: React.ReactNode
}

export default function HomeBannerSection({ title, image, icon }: HomeBannerSectionProps) {
  return (
    <div className="relative w-full h-[80vh]">
      <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" priority />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent">
        <div className="p-8 text-white">
          <div className="flex items-center gap-3 bg-black/30 w-fit px-4 py-2 rounded-full">
            {icon}
            <h2 className="text-xl font-semibold">{title}</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

