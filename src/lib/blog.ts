import fs from "fs";
import dayjs from "dayjs";
import { sync } from "glob";
import matter from "gray-matter";
import { IPOST } from "@/types/blog";
import { BASE_PATH, POSTS_PATH } from "@/constants/blog";
import readingTime from "reading-time";

// 하나의 글에 대한 머리글과 콘텐츠 반환
const parsePost = async (postPath: string): Promise<IPOST> => {
  const postAbstract = parsePostAbstract(postPath);
  const postDetail = await parsePostDetail(postPath);
  return { ...postAbstract, ...postDetail };
};

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
  const posts = await Promise.all(paths.map((postPath) => parsePost(postPath)));
  return posts;
};

// 모든 카테고리 조회
export const getCategoryList = async (): Promise<IPOST[]> => {
  const paths: string[] = sync(`${POSTS_PATH}/*`);
  const categoryList = paths.map((path) => {
    const tempList = path.split("\\");
    return tempList.at(-1);
  });

  return categoryList;
};
