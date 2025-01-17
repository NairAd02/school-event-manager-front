"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { DatePicker } from "@/components/ui/data-picker";
import { Input } from "@/components/ui/input";
import { CircleCheck, DockIcon as Docker, Info, Shield } from "lucide-react";

export default function EventsFilers() {
  return (
    <aside className="w-72 p-6 border-r min-h-screen">
      <h2 className="text-xl font-semibold mb-6">Filters</h2>

      {/* Products Section */}
      <div className="mb-8">
        <h3 className="text-sm text-muted-foreground mb-3">Products</h3>
        <div className="space-y-3">
          <label className="flex items-center space-x-2">
            <span className="text-sm">Lugar</span>
            <Input placeholder="introduzca lugar" />
          </label>
          <label className="flex items-center space-x-2">
            <span className="text-sm">Extensions</span>
            <DatePicker />
          </label>
        </div>
      </div>

      {/* Categories Section */}
      <div>
        <h3 className="text-sm text-muted-foreground mb-3">Categories</h3>
        <div className="space-y-3">
          <label className="flex items-center space-x-2">
            <Checkbox />
            <span className="text-sm">API Management</span>
          </label>
          <label className="flex items-center space-x-2">
            <Checkbox />
            <span className="text-sm">Content Management System</span>
          </label>
          <label className="flex items-center space-x-2">
            <Checkbox />
            <span className="text-sm">Data Science</span>
          </label>
          <label className="flex items-center space-x-2">
            <Checkbox />
            <span className="text-sm">Databases & Storage</span>
          </label>
          <label className="flex items-center space-x-2">
            <Checkbox />
            <span className="text-sm">Languages & Frameworks</span>
          </label>
          <label className="flex items-center space-x-2">
            <Checkbox />
            <span className="text-sm">Integration & Delivery</span>
          </label>
          <label className="flex items-center space-x-2">
            <Checkbox />
            <span className="text-sm">Internet of Things</span>
          </label>
        </div>
      </div>
    </aside>
  );
}
