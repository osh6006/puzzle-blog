export interface IPOST {
  url: string;
  category: string;
  slug: string | undefined;
  title: string;
  date: Date;
  desc: string;
  thumbnail: string;
  dateString: string;
  content: string;
  readingMinutes: number;
}
