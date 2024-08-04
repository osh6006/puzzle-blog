import { getPostList } from "@/lib/blog";
import { MetadataRoute } from "next";

const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://www.puzzler.life";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const defaultSitemap: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "daily", // 문자열 리터럴 값
      priority: 1,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily", // 문자열 리터럴 값
    },
  ];

  const allPost = await getPostList();

  const allPostSitemaps: MetadataRoute.Sitemap = allPost.map((post) => {
    return {
      url: `${BASE_URL}/${post.url}`,
      lastModified: new Date(),
      changeFrequency: "daily", // 문자열 리터럴 값
    };
  });

  return [...defaultSitemap, ...allPostSitemaps];
}
