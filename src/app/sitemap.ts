import { getPostList } from "@/lib/blog";
import { MetadataRoute } from "next";

const BASE_URL =
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const defaultSitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
    },
  ];

  const allPost = await getPostList();

  const allPostSitemaps = allPost.map((post) => {
    return {
      url: `${BASE_URL}/${post.url}`,
      lastModified: new Date(),
    };
  });

  return [...defaultSitemap, ...allPostSitemaps];
}
