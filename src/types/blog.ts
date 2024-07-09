export interface IPost {
  title: string;
  author: string;
  category: string;
  slug: string | undefined;
  content: string;
  desc: string;
  thumbnail: string;
  date: Date;
  dateString: string;
  lastmod: string;
  readingMinutes: number;
  url: string;
}

export interface IPostHeader
  extends Omit<IPost, "content" | "date" | "slug" | "url"> {}

export interface HeadingItem {
  text: string;
  link: string;
  indent: number;
}

export interface ISearchResult {
  title: string;
  category: string;
  matchedContents: string;
  url: string;
  createdAt: string;
}
