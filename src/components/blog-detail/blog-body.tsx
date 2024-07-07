import * as React from "react";
import { IPost } from "@/types/blog";
import { MdxComponents } from "@/components/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";

// @ts-expect-error no types
import remarkA11yEmoji from "@fec/remark-a11y-emoji";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import remarkBreaks from "remark-breaks";
import rehypePrettyCode from "rehype-pretty-code";

interface IBlogBodyProps {
  blogDetail: IPost;
}

const BlogBody: React.FunctionComponent<IBlogBodyProps> = ({ blogDetail }) => {
  return (
    <section
      className="
        w-full
        relative
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
    </section>
  );
};

export default BlogBody;
