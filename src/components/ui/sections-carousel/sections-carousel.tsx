import React, { ReactNode } from "react";
import { Tabs, TabsList, TabsTrigger } from "../tabs";
import TabAnimatedTransition from "../tab-animated-transition";
import useSectionsCarousel from "./hooks/useSectionsCarousel";

export interface SectionTab {
  value: string;
  content: ReactNode;
}

interface Props {
  sections: SectionTab[];
}

export default function SectionsCarousel({ sections }: Props) {
  const { activeTab, setActiveTab } = useSectionsCarousel({ sections });
  return (
    <Tabs
      value={activeTab}
      onValueChange={setActiveTab}
      className="relative flex w-full flex-col gap-6"
    >
      {sections.map((section, index) => (
        <TabAnimatedTransition
          key={index}
          value={section.value}
          content={section.content}
        />
      ))}

      <TabsList className="absolute bottom-0 z-20 mb-4 flex w-full items-center justify-center gap-5 bg-transparent">
        {sections.map((section, index) => (
          <TabsTrigger
            key={index}
            value={section.value}
            className="h-6 w-6 rounded-full bg-gray-300 transition-all hover:bg-gray-400 data-[state=active]:bg-primary data-[state=active]:ring-2 data-[state=active]:ring-primary"
          />
        ))}
      </TabsList>
    </Tabs>
  );
}
