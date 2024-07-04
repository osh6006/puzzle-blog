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
