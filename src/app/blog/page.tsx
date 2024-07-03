import Filter from "@/components/blog/filter";
import FilteredPostList from "@/components/blog/filtered-post-list";
import { getCategoryList } from "@/lib/blog";

export default async function BlogPage({
  searchParams,
}: {
  searchParams?: {
    filter?: string;
  };
}) {
  const categoryList = await getCategoryList();
  const filter = searchParams?.filter || "";

  return (
    <>
      <Filter selectedFilter={filter || "all"} categoryList={categoryList} />
      <FilteredPostList filter={filter} />
    </>
  );
}
