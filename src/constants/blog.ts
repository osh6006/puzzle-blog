import path from "path";

export const BASE_PATH = "src/posts";
export const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

export const META = {
  title: "Frontend Puzzle",
  description:
    "프론트엔드 라는 퍼즐을 한 조각 한 조각씩 맞춰가고 있는 중입니다. 이 블로그는 프론트엔드 개발 여정을 기록하고, 배운 것들을 공유하기 위해 만들었습니다.",
  url: "https://www.puzzler.life/",
  ogImage: "",
} as const;
