import { getPostList } from "@/lib/blog";
import PostList from "@/components/layouts/post-list";
import Link from "next/link";
import PostCard from "../common/post-card";

interface IFilteredPostListProps {
  filter?: string;
}

const FilteredPostList: React.FunctionComponent<
  IFilteredPostListProps
> = async ({ filter }) => {
  const category = !filter ? undefined : filter === "all" ? undefined : filter;
  const filteredPostList = await getPostList(category);

  return (
    <ul className="w-full grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-3">
      <PostList
        items={filteredPostList}
        renderItem={(item) => (
          <li key={item.title + item.date}>
            <Link href={item.url}>
              <PostCard
                date={item.dateString}
                title={item.title}
                category={item.category}
                imageUrl={item.thumbnail}
              />
            </Link>
          </li>
        )}
      />
    </ul>
  );
};

export default FilteredPostList;
