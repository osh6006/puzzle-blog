import * as React from "react";
import { Skeleton } from "../ui/skeleton";

interface ISearchSkeletonProps {}

const SearchSkeleton: React.FunctionComponent<ISearchSkeletonProps> = (
  props
) => {
  return <Skeleton></Skeleton>;
};

export default SearchSkeleton;
