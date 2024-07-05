import { IPost } from "@/types/blog";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const extractSurroundingSentences = (
  articles: IPost[],
  keyword: string,
  windowSize = 3
) => {
  return articles
    .map((article) => {
      const words = article.content.split(/\s+/); // 단어를 구분하는 정규 표현식
      const keywordLowerCase = keyword.toLowerCase();
      const matchedWords: string[] = [];

      words.forEach((word, index) => {
        if (word.toLowerCase().includes(keywordLowerCase)) {
          const start = Math.max(0, index - windowSize);
          const end = Math.min(words.length, index + windowSize + 1);
          matchedWords.push(words.slice(start, end).join(" "));
        }
      });

      return {
        title: article.title,
        category: article.category,
        matchedContents: matchedWords.join(" "),
        url: article.url,
      };
    })
    .filter((article) => article.matchedContents !== "");
};

export const removeMarkdown = (markdown: string): string => {
  return (
    markdown
      // Remove headers
      .replace(/^#{1,6}\s+/gm, "")
      // Remove emphasis (bold, italic)
      .replace(/(\*\*|__)(.*?)\1/g, "$2")
      .replace(/(\*|_)(.*?)\1/g, "$2")
      // Remove strikethrough
      .replace(/~~(.*?)~~/g, "$1")
      // Remove links
      .replace(/\[([^\]]+)\]\([^\)]+\)/g, "$1")
      // Remove inline code
      .replace(/`([^`]+)`/g, "$1")
      // Remove blockquotes
      .replace(/^\s{0,3}>\s?/g, "")
      // Remove horizontal rules
      .replace(/^\s*(\*|-|_){3,}\s*$/gm, "")
      // Remove unordered lists
      .replace(/^\s*([-+*])\s+/gm, "")
      // Remove ordered lists
      .replace(/^\s*\d+\.\s+/gm, "")
      // Remove images
      .replace(/!\[([^\]]*)\]\([^\)]+\)/g, "$1")
      // Remove code blocks
      .replace(/```[\s\S]*?```/g, "")
      // Remove remaining inline HTML tags
      .replace(/<\/?[^>]+(>|$)/g, "")
      // Remove extra spaces
      .replace(/\s{2,}/g, " ")
      // Trim leading and trailing whitespace
      .trim()
  );
};

export const highlightWord = (text: string, word: string): string => {
  const regex = new RegExp(`(${word})`, "gi");
  return text.replace(regex, '<span class="highlight">$1</span>');
};
