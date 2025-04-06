"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FilterOption {
  label: string;
  value: string;
  count?: number;
}

interface FilterCategory {
  name: string;
  options: FilterOption[];
}

export default function ProductFilter() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string>
  >({});

  // Sample filter data
  const filterCategories: FilterCategory[] = [
    {
      name: "MODEL",
      options: [
        { label: "Scale", value: "scale", count: 21 },
        { label: "Scale RC", value: "scale-rc", count: 4 },
        { label: "Spark RC", value: "spark-rc", count: 3 },
      ],
    },
    {
      name: "GENDER",
      options: [
        { label: "Men", value: "men" },
        { label: "Women", value: "women" },
        { label: "Unisex", value: "unisex" },
      ],
    },
    {
      name: "BEST FOR",
      options: [
        { label: "Racing", value: "racing" },
        { label: "Trail", value: "trail" },
        { label: "Endurance", value: "endurance" },
      ],
    },
    {
      name: "FRAME MATERIAL",
      options: [
        { label: "Carbon", value: "carbon" },
        { label: "Aluminum", value: "aluminum" },
        { label: "Alloy", value: "alloy" },
      ],
    },
  ];

  const handleFilterChange = (categoryName: string, value: string) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [categoryName]: value,
    }));
  };

  return (
    <div className="w-full">
      {/* Mobile Filters */}
      <div className="md:hidden border border-gray-300 rounded-md">
        <button
          className="w-full flex items-center justify-between p-4 text-gray-700"
          onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
        >
          <span className="font-medium">FILTERS</span>
          <Icon
            icon={mobileFiltersOpen ? "mdi:chevron-up" : "mdi:chevron-down"}
            className="h-5 w-5"
          />
        </button>

        {mobileFiltersOpen && (
          <div className="px-4 pb-4">
            <Accordion type="single" collapsible className="w-full">
              {filterCategories.map((category) => (
                <AccordionItem
                  key={category.name}
                  value={category.name}
                  className="border-b last:border-b-0"
                >
                  <AccordionTrigger className="text-gray-500 font-medium py-3">
                    {category.name}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      {category.options.map((option) => (
                        <div
                          key={option.value}
                          className="flex items-center justify-between text-gray-600"
                        >
                          <span>{option.label}</span>
                          {option.count !== undefined && (
                            <span className="text-gray-400">
                              ({option.count})
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        )}
      </div>

      {/* Desktop Filters */}
      <div className="hidden md:flex flex-wrap gap-3 py-4 border-t border-b">
        {filterCategories.map((category) => (
          <div key={category.name} className="relative">
            <Select
              value={selectedFilters[category.name] || ""}
              onValueChange={(value) =>
                handleFilterChange(category.name, value)
              }
            >
              <SelectTrigger className="border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 rounded-none h-10 w-[180px]">
                <SelectValue placeholder={category.name} />
              </SelectTrigger>
              <SelectContent className="rounded-none">
                <SelectItem value=" ">{category.name}</SelectItem>
                {category.options.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}{" "}
                    {option.count !== undefined && `(${option.count})`}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        ))}
      </div>
    </div>
  );
}
