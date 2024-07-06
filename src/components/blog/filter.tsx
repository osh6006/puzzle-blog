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

  const [mounted, setMounted] = React.useState(false);

  const handleFiltering = (filter?: string) => {
    if (!filter) return;
    const params = new URLSearchParams(searchParams);
    params.set("filter", filter);
    replace(`${pathname}?${params.toString()}`);
  };

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <ul className="flex items-center gap-2 sm:gap-4 flex-wrap">
      {["all", ...categoryList].map((category, index) => (
        <li key={index}>
          <Button
            onClick={() => handleFiltering(category)}
            variant="outline"
            className={cn(
              "uppercase",
              selectedFilter === category
                ? "bg-primary text-white hover:bg-primary hover:text-white dark:bg-sky-800"
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
