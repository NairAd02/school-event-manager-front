"use client";

import { useEffect, useState } from "react";
import { SectionTab } from "../sections-carousel";

interface Props {
  sections: SectionTab[];
}

export default function useSectionsCarousel({ sections }: Props) {
  const [activeTab, setActiveTab] = useState(sections[0].value);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prevValue) => {
        const currentIndex = sections.findIndex(
          (section) => section.value === prevValue
        );

        const nextIndex = (currentIndex + 1) % sections.length;

        return sections[nextIndex].value;
      });
    }, 10000);

    return () => clearInterval(interval);
  }, []);
  return { activeTab, setActiveTab };
}
