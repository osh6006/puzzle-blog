import { parsePost } from "@/lib/blog";
import { BASE_PATH } from "@/constants/blog";
import BlogHeader from "@/components/blog-detail/blog-header";
import BlogBody from "@/components/blog-detail/blog-body";

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

  return (
    <>
      <BlogHeader />
      <BlogBody blogDetail={blogDetail} />
    </>
  );
}
