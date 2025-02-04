"use client";
import { motion } from "framer-motion";
import { StandardCarouselProvider } from "@/components/ui/standard-carousel/context/standard-carousel-context";
import StandartCarousel from "@/components/ui/standard-carousel/standard-carousel";
import HomeBannerSection from "./home-section";
import {
  BookOpenText,
  Calendar,
  GraduationCap,
  School,
  Sparkles,
} from "lucide-react";
import type React from "react";
import PackageCard from "./PackageCard/PackageCard";

export interface HomeSection {
  id: string;
  title: string;
  image: string;
  icon: React.ReactNode;
}

const homeSections: HomeSection[] = [
  {
    id: "1",
    title: "Mire Eventos de la Cujae",
    image: "/images/cujae-front.jpeg",
    icon: <School className="w-8 h-8" />,
  },
  {
    id: "2",
    title: "Mire Eventos del Citi",
    image: "/images/city.jpeg",
    icon: <Calendar className="w-8 h-8" />,
  },
  {
    id: "3",
    title: "Mire Eventos Especiales",
    image: "/images/altar.jpeg",
    icon: <Sparkles className="w-8 h-8" />,
  },
];

export default function HomeContainer() {
  const words = [
    "Bienvenido",
    "al Repositorio de Eventos",
    "de nuestra",
    "comunidad universitaria.",
  ];

  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden">
      {/* Sections Carousel */}
      <StandardCarouselProvider>
        <StandartCarousel
          items={homeSections}
          dimsension="100vw"
          itemsStyles="basis-full pl-0"
          withStylesContent={false}
          withProgressBar
          autoPlay
          loop
          renderCard={(item) => (
            <HomeBannerSection
              title={item.title}
              image={item.image}
              icon={item.icon}
            />
          )}
        />
      </StandardCarouselProvider>
      <div className="relative z-10 text-center px-4 py-12 bg-gradient-to-b from-white/90 via-emerald-50/95 to-emerald-100/80 w-full backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-6xl mx-auto relative">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-primary">
              <GraduationCap className="w-24 h-24" />
            </div>
            <div className="absolute bottom-10 right-0 translate-x-1/2 translate-y-1/2 text-primary">
              <School className="w-24 h-24" />
            </div>
            {/* Welcome Text */}
            <div className="mb-12 space-y-2 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-emerald-500/10 blur-3xl -z-10" />
              {words.map((word, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight ${
                    index === words.length - 1
                      ? "text-secondary"
                      : "text-primary"
                  }`}
                >
                  {word}
                </motion.div>
              ))}
            </div>
            {/* Decorative Line */}
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent mx-auto mb-8" />
          </div>
          {/* Package Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: words.length * 0.2 }}
            className="flex flex-col items-center gap-12"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              {homeSections.map((section) => (
                <PackageCard
                  title={section.title}
                  image={section.image}
                  icon={section.icon}
                />
              ))}
            </div>
            <PackageCard
              title={"Mire todos los Eventos !!!"}
              image={"images/cujae-monument.jpeg"}
              icon={<BookOpenText className="w-8 h-8" />}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
