import { IPostHeader } from "@/types/blog";
import { PenLineIcon, TimerIcon } from "lucide-react";
import Image from "next/image";
import * as React from "react";
import AlternativeThumbnail from "../common/alternative-thumbnail";

interface IBlogHeaderProps extends IPostHeader {}

const BlogHeader: React.FunctionComponent<IBlogHeaderProps> = ({
  category,
  dateString,
  desc,
  readingMinutes,
  author,
  title,
  thumbnail,
  lastmod,
}) => {
  console.log(thumbnail);

  return (
    <div className="flex w-full items-center relative justify-center max-w-2xl mx-auto flex-col">
      <h1 className="text-3xl font-bold break-keep tracking-tight sm:text-4xl mx-auto max-w-3xl text-center">
        {title}
      </h1>
      <div className="text-lg font-semibold text-primary uppercase mt-4">
        {category}
      </div>
      <div className="w-full text-sm md:text-base  my-2 flex justify-start text-muted-foreground">
        <span>
          작성 일 <time className="font-semibold">{dateString}</time>
        </span>
        <span className="before:content-['•'] before:px-[0.25rem]">
          수정 일 <time className="font-semibold ">{lastmod}</time>
        </span>
      </div>
      {thumbnail ? (
        <div className="relative rounded-md overflow-hidden w-full h-[350px]">
          <Image
            alt="thumbnail"
            src={thumbnail}
            fill
            className="aspect-video"
          />
        </div>
      ) : (
        <AlternativeThumbnail />
      )}
      <div className="flex items-center justify-between w-full my-2 text-muted-foreground text-sm gap-x-4">
        <div className="flex items-center gap-x-1 ">
          By
          <span className="font-bold">{author}</span>
        </div>
        <div className="flex items-center gap-x-1">
          <TimerIcon size={18} className="text-muted-foreground" />
          <time className="font-bold">{readingMinutes} min read</time>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
