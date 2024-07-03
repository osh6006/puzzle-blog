import * as React from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface IFilterSkeletonProps {}

const FilterSkeleton: React.FunctionComponent<IFilterSkeletonProps> = ({}) => {
  return (
    <div className="flex items-center space-x-4">
      {[1, 2, 3, 4, 5].map((skeleton) => (
        <Skeleton className="h-10 w-[100px] rounded-lg" key={skeleton} />
      ))}
    </div>
  );
};

export default FilterSkeleton;
