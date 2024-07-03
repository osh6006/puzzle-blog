import fs from "fs";
import dayjs from "dayjs";
import { sync } from "glob";
import matter from "gray-matter";
import { IPOST } from "@/types/blog";
import { BASE_PATH, POSTS_PATH } from "@/constants/blog";
import readingTime from "reading-time";

// MDX Abstract
// url, cg path, cg name, slug
export const parsePostAbstract = (postPath: string) => {
  // category1/title1/content
  const filePath = postPath
    .slice(postPath.indexOf(BASE_PATH))
    .replace(`${BASE_PATH}/`, "")
    .replace(".mdx", "");

  // category1, title1
  const [category, slug] = filePath.split("/");

  // /blog/category1/title1
  const url = `/blog/${category}/${slug}`;
  return { url, category, slug };
};

// 하나의 글에 대한 머리글과 콘텐츠 반환
export const parsePost = async (postPath: string): Promise<IPOST> => {
  const postAbstract = parsePostAbstract(postPath);
  const postDetail = await parsePostDetail(postPath);
  return { ...postAbstract, ...postDetail } as IPOST;
};

// MDX 상세 조회
const parsePostDetail = async (postPath: string) => {
  const file = fs.readFileSync(postPath, "utf8");
  const { data, content } = matter(file);
  const grayMatter = data;
  const readingMinutes = Math.ceil(readingTime(content).minutes);
  const dateString = dayjs(grayMatter.date)
    .locale("ko")
    .format("YYYY년 MM월 DD일");
  return { ...grayMatter, dateString, content, readingMinutes };
};

// 모든 MDX 파일 조회
export const getPostPaths = (category?: string) => {
  const folder = category || "**";
  const paths: string[] = sync(`${POSTS_PATH}/${folder}/**/*.mdx`);
  return paths;
};

// 모든 포스트 목록 조회
export const getPostList = async (category?: string): Promise<IPOST[]> => {
  const paths: string[] = getPostPaths(category);

  const posts = await Promise.all(
    paths.map((postPath) => parsePost(postPath.replace(/\\/g, "/")))
  );
  return posts;
};

// 모든 카테고리 조회
export const getCategoryList = async (): Promise<(string | undefined)[]> => {
  const paths: string[] = sync(`${POSTS_PATH}/*`);
  const categoryList = paths.map((path) => {
    const tempList = path.split("\\");
    return tempList.at(-1);
  });

  return categoryList;
};

// 모든 포스트 조회 후 날짜순으로 정렬
export const getNewPosts = async (): Promise<IPOST[]> => {
  const allPosts = await getPostList();
  const newPosts = allPosts.sort((a, b) => b.date.getTime() - a.date.getTime());
  return newPosts;
};
