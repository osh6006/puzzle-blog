import { parseIndex, parsePost } from "@/lib/blog";
import { BASE_PATH } from "@/constants/blog";
import BlogHeader from "@/components/blog-detail/blog-header";
import BlogBody from "@/components/blog-detail/blog-body";
import { IPostHeader } from "@/types/blog";
import BlogSideBar from "@/components/blog-detail/blog-sidebar";

// 허용된 param 외 접근시 404
export const dynamicParams = false;

export default async function BlogDetailPage({
  params,
}: {
  params: { category: string; detail: string };
}) {
  const blogDetail = await parsePost(
    `${BASE_PATH}/${params.category}/${params.detail}.mdx`
  );

  const blogHeader: IPostHeader = {
    title: blogDetail.title,
    desc: blogDetail.desc,
    dateString: blogDetail.dateString,
    category: blogDetail.category,
    thumbnail: blogDetail.thumbnail,
    readingMinutes: blogDetail.readingMinutes,
    lastmod: blogDetail.lastmod,
    author: blogDetail.author,
  };

  const blogIndex = parseIndex(blogDetail.content);

  return (
    <div className="prose relative prose-sm sm:prose-base lg:prose-lg xl:prose-xl 2xl:prose-2xl dark:prose-invert mx-auto">
      <BlogHeader {...blogHeader} />
      <BlogBody blogDetail={blogDetail} />
      <BlogSideBar blogIndex={blogIndex} />
      <hr />
      {/* 댓글 */}
    </div>
  );
}
