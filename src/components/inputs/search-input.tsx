import React from "react";
import { Input } from "../ui/input";
import { Search } from "lucide-react";

export default function SearchInput() {
  return (
    <div className="relative w-full">
      <Input
        type="text"
        placeholder="Buscar"
        className="pl-10 w-full bg-white"
      />
      <Search
        size={18}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary pointer-events-none"
      />
    </div>
  );
}
