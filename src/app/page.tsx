import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import { getCategoryList } from "@/lib/blog";

export default async function Home() {
  const categoryList = await getCategoryList();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      {/* CategoryList */}
      {/* PostList */}
      <div className="">Contents</div>
      <Footer />
    </main>
  );
}
