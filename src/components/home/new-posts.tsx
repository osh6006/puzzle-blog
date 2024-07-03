import { getNewPosts } from "@/lib/blog";
import * as React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface INewPostsProps {}

const NewPosts: React.FunctionComponent<INewPostsProps> = async () => {
  const newPosts = await getNewPosts();

  return (
    <ul className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {newPosts.map((post) => (
        <Link key={post.title + post.date} href={post.url}>
          <Card className=" cursor-pointer hover:bg-primary-foreground transition-colors rounded-lg overflow-hidden">
            <CardHeader className="relative min-h-[200px]">
              <Image
                src="https://enjoydev.life/posts/12-suspense-errorboundary/240304-055427.png"
                alt="test"
                fill
                style={{
                  backgroundSize: "cover",
                }}
              />
            </CardHeader>
            <CardContent className="mt-4">
              <CardTitle className="text-lg">{post.title}</CardTitle>
            </CardContent>
            <CardFooter className="flex justify-between">
              <time
                dateTime={post.dateString}
                className="w-full text-right text-sm"
              >
                {post.dateString}
              </time>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </ul>
  );
};

export default NewPosts;
