"use client";

import Link from "next/link";
import * as React from "react";
import { cn } from "@/lib/utils";
import { HeadingItem } from "@/types/blog";
import { useHeadingObserver } from "@/hook/use-heading-observer";
import SidebarFooter from "./sidebar-footer";

interface IBlogSideBarProps {
  blogIndex: HeadingItem[];
}

const BlogSideBar: React.FunctionComponent<IBlogSideBarProps> = ({
  blogIndex,
}) => {
  const activeIndexList = useHeadingObserver("h2, h3");
  return (
    <aside className="not-prose absolute -top-[200px] left-full -mb-[100px] hidden h-[calc(100%+150px)] xl:block ">
      <div className="sticky bottom-0 border rounded-md py-4 top-[100px] z-10 ml-[5rem] mt-[200px] w-[200px]">
        <div className="mb-4 text-base font-semibold px-4">On this page</div>
        <ul className="text-sm scrollbar-thin px-4 overflow-y-auto max-h-[350px] w-full">
          {blogIndex.map((item) => {
            const isH3 = item.indent === 1;
            const isIntersecting = activeIndexList.includes(item.link);
            return (
              <li
                key={item.link}
                className={cn(
                  isH3 && "ml-4",
                  isIntersecting && "font-medium text-primary",
                  "py-1 transition"
                )}
              >
                <Link href={item.link}>{item.text}</Link>
              </li>
            );
          })}
        </ul>
        <div className="px-4">
          <hr className="my-4" />
          <SidebarFooter />
        </div>
      </div>
    </aside>
  );
};

export default BlogSideBar;
