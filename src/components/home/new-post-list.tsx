import { getNewPosts } from "@/lib/blog";
import * as React from "react";
import Link from "next/link";
import PostList from "../layouts/post-list";
import PostCard from "../common/post-card";

interface INewPostsProps {}

const NewPostList: React.FunctionComponent<INewPostsProps> = async () => {
  const newPosts = await getNewPosts();

  return (
    <ul className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <PostList
        items={newPosts}
        renderItem={(item, index) => (
          <li key={item.title + item.date}>
            <Link href={item.url}>
              <PostCard date={item.dateString} title={item.title} />
            </Link>
          </li>
        )}
      />
    </ul>
  );
};

export default NewPostList;
