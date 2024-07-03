"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface IFilterProps {
  categoryList: (string | undefined)[];
  selectedFilter?: string;
}

const Filter: React.FunctionComponent<IFilterProps> = ({
  categoryList = [],
  selectedFilter = "all",
}) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleFiltering = (filter?: string) => {
    if (!filter) return;
    const params = new URLSearchParams(searchParams);
    params.set("filter", filter);
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <ul className="flex items-center gap-x-4 ">
      {["all", ...categoryList].map((category, index) => (
        <li key={index}>
          <Button
            onClick={() => handleFiltering(category)}
            variant="outline"
            className={cn(
              "uppercase",
              selectedFilter === category
                ? "bg-primary text-white hover:bg-primary hover:text-white"
                : ""
            )}
          >
            {category}
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default Filter;
