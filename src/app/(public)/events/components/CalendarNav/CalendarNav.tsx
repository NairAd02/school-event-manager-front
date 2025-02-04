"use client";
import { useState } from 'react';
import { MONTHS } from '@/lib/utils';

export default function Calendar() {
  const [selected, setSelected] = useState(MONTHS[0]);

  const handleSelection = (month: string) => {
    setSelected(month);
    const element = document.getElementById(month);
    if (element) {
      const yOffset = -100; // Ajusta el valor según sea necesario
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="p-4 bg-card text-card-foreground rounded-md shadow-md">
      <div className="grid grid-cols-3 gap-4">
        {MONTHS.map((month) => (
          <button
            key={month}
            onClick={() => handleSelection(month)}
            className={`text-center border border-border rounded-md p-2 transition duration-300 ease-in-out transform hover:scale-105 ${selected === month ? 'bg-primary text-primary-foreground font-normal' : ''}`}
          >
            {month}
          </button>
        ))}
      </div>
    </div>
  );
}
