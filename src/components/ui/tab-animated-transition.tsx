"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { ReactNode } from "react";
import { TabsContent } from "./tabs";

interface Props {
  value: string;
  content: ReactNode;
}

export default function TabAnimatedTransition({ value, content }: Props) {
  return (
    <AnimatePresence mode="wait">
      <TabsContent value={value}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.8, 0.5, 1],
          }}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          {content}
        </motion.div>
      </TabsContent>
    </AnimatePresence>
  );
}
