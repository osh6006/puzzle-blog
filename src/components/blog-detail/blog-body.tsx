import * as React from "react";
import { IPOST } from "@/types/blog";
import { MdxComponents } from "@/components/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";

// @ts-expect-error no types
import remarkA11yEmoji from "@fec/remark-a11y-emoji";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import remarkBreaks from "remark-breaks";
import rehypePrettyCode from "rehype-pretty-code";

interface IBlogBodyProps {
  blogDetail: IPOST;
}

const BlogBody: React.FunctionComponent<IBlogBodyProps> = ({ blogDetail }) => {
  return (
    <div
      className="
        w-full
        relative
        prose prose-sm sm:prose-base lg:prose-lg xl:prose-xl 2xl:prose-2xl dark:prose-invert mx-auto
    "
    >
      <MDXRemote
        source={blogDetail.content}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm, remarkA11yEmoji, remarkBreaks],
            rehypePlugins: [
              [
                rehypePrettyCode,
                {
                  theme: "one-dark-pro",
                  // theme: {
                  //   dark: "one-dark-pro",
                  //   light: "github-light",
                  // },
                  defaultLang: "plaintext",
                  grid: false,
                  keepBackground: false,
                },
              ],
              rehypeSlug,
            ],
          },
        }}
        components={MdxComponents}
      />
    </div>
  );
};

export default BlogBody;
