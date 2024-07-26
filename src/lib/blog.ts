import * as fs from "fs";
import * as path from "path";
import dayjs from "dayjs";
import { sync } from "glob";
import matter from "gray-matter";
import { HeadingItem, IPost, ISearchResult } from "@/types/blog";
import { BASE_PATH, POSTS_PATH } from "@/constants/blog";
import readingTime from "reading-time";
import {
  extractSurroundingSentences,
  highlightWord,
  removeMarkdown,
} from "./utils";

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
export const parsePost = async (postPath: string): Promise<IPost> => {
  const postAbstract = parsePostAbstract(postPath);
  const postDetail = await parsePostDetail(postPath);
  return { ...postAbstract, ...postDetail } as IPost;
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

  const lastmod = dayjs(grayMatter.lastmod)
    .locale("ko")
    .format("YYYY년 MM월 DD일");

  return { ...grayMatter, dateString, content, readingMinutes, lastmod };
};

// 모든 MDX 파일 조회
export const getPostPaths = (category?: string) => {
  const folder = category || "**";
  const paths: string[] = sync(`${POSTS_PATH}/${folder}/**/*.mdx`);
  return paths;
};

// 모든 포스트 목록 조회
export const getPostList = async (category?: string): Promise<IPost[]> => {
  const paths: string[] = getPostPaths(category);

  const posts = await Promise.all(
    paths.map((postPath) => parsePost(postPath.replace(/\\/g, "/")))
  );
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
};

// 모든 카테고리 조회
export const getCategoryList = async (): Promise<string[]> => {
  // 상위 경로의 디렉토리 목록을 가져옴
  const paths: string[] = sync(`${POSTS_PATH}/*`);

  // 디렉토리 경로에서 이름을 추출하여 반환
  const categoryList = paths
    .filter((path) => fs.lstatSync(path).isDirectory())
    .map((dirPath) => {
      return path.basename(dirPath);
    });

  return categoryList;
};

// 모든 포스트 조회 후 날짜순으로 정렬
export const getNewPosts = async (): Promise<IPost[]> => {
  const allPosts = await getPostList();
  const newPosts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  return newPosts.filter((_, i) => i <= 10);
};

// 테이블에 있는 헤딩
export const parseIndex = (content: string): HeadingItem[] => {
  const regex = /^(##|###) (.*$)/gim;
  const headingList = content.match(regex);
  return (
    headingList?.map((heading: string) => ({
      text: heading.replace("##", "").replace("#", ""),
      link:
        "#" +
        heading
          .replace("# ", "")
          .replace("#", "")
          .replace(/[\[\]:!@#$/%^&*()+=,.]/g, "")
          .replace(/ /g, "-")
          .toLowerCase()
          .replace("?", ""),
      indent: (heading.match(/#/g)?.length || 2) - 2,
    })) || []
  );
};

// 블로그 검색
export const getSearchPost = async (
  query: string
): Promise<ISearchResult[]> => {
  if (!query) return [];

  const allPosts = await getPostList();

  const searchedPosts = allPosts.filter((post) => {
    if (
      post.title.includes(query) ||
      post.content.includes(query) ||
      post.category.includes(query)
    ) {
      return true;
    } else return false;
  });

  const results = extractSurroundingSentences(searchedPosts, query);

  return results.map((result) => {
    return {
      ...result,
      matchedContents: highlightWord(
        removeMarkdown(result.matchedContents),
        query
      ),
    };
  });
};
