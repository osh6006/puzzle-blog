import * as React from "react";
import { Skeleton } from "../ui/skeleton";
import { cn } from "@/lib/utils";

interface IPostSkeletonProps {
  className?: string;
}

const PostSkeleton: React.FunctionComponent<IPostSkeletonProps> = ({
  className,
}) => {
  return (
    <div
      className={cn(
        "w-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {[1, 2, 3, 4, 5].map((skeleton) => (
        <div className="flex flex-col space-y-3" key={skeleton}>
          <Skeleton className="h-[200px] w-full rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostSkeleton;
