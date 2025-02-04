"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
interface Props {
  title: string;
  image: string;
  icon: ReactNode;
  w?: string;
}

export default function PackageCard({
  title,
  image,
  icon,
  w = "w-full",
}: Props) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      whileTap={{ scale: 0.95 }}
      className={
        "relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 ease-in-out " +
        w
      }
    >
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-600/70 to-emerald-900/90 z-10" />
      <div className="relative z-20 flex flex-col items-center justify-center h-64 p-6 text-white">
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
          className="bg-white text-primary rounded-full p-4 mb-4"
        >
          {icon}
        </motion.div>
        <h3 className="text-2xl font-bold text-center mb-2">{title}</h3>
        <motion.div
          initial={{ width: 0 }}
          whileHover={{ width: "80%" }}
          transition={{ duration: 0.3 }}
          className="h-1 bg-white rounded-full"
        />
      </div>
    </motion.div>
  );
}
