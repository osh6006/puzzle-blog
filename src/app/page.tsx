import { getCategoryList } from "@/lib/blog";

export default async function Home() {
  const categoryList = await getCategoryList();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      홈 페이지 입니다!
    </main>
  );
}
