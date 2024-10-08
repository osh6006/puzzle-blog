import { IPostHeader } from "@/types/blog";
import { TimerIcon } from "lucide-react";
import Image from "next/image";
import AlternativeThumbnail from "../common/alternative-thumbnail";

interface IBlogHeaderProps extends IPostHeader {}

const BlogHeader: React.FunctionComponent<IBlogHeaderProps> = ({
  category,
  dateString,
  readingMinutes,
  author,
  title,
  thumbnail,
  lastmod,
}) => {
  return (
    <section className="flex  flex-col w-full items-center relative justify-center mx-auto">
      <h1 className="text-2xl mb-2 sm:mb-4 font-bold break-keep tracking-tight sm:text-4xl mx-auto max-w-3xl text-center">
        {title}
      </h1>

      <div className="text-lg font-semibold text-primary uppercase ">
        {category}
      </div>
      <div className="w-full text-sm md:text-base my-2 flex justify-center text-muted-foreground">
        <span className="text-sm">
          작성 •{" "}
          <time className="font-semibold text-sm sm:text-base">
            {dateString}
          </time>
        </span>
        <span className=" before:content-[''] text-sm before:px-[0.25rem]">
          수정 •{" "}
          <time className="font-semibold text-sm sm:text-base">{lastmod}</time>
        </span>
      </div>
      {thumbnail ? (
        <div className="relative rounded-md w-full my-4 min-h-[400px] overflow-hidden">
          <Image
            alt="thumbnail"
            src={thumbnail}
            fill
            style={{
              objectFit: "scale-down",
            }}
            unoptimized
          />
        </div>
      ) : (
        <AlternativeThumbnail />
      )}
      <div className="flex items-center justify-between w-full mt-2 text-muted-foreground text-sm gap-x-4">
        <div className="flex items-center gap-x-1 ">
          By
          <span className="font-bold">{author}</span>
        </div>
        <div className="flex items-center gap-x-1">
          <TimerIcon size={18} className="text-muted-foreground" />
          <time className="font-bold">{readingMinutes} min read</time>
        </div>
      </div>
    </section>
  );
};

export default BlogHeader;
