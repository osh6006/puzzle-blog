import Heading from "@/components/common/heading";
import PostSkeleton from "@/components/common/post-skeleton";
import NewPosts from "@/components/home/new-posts";
import Layout from "@/components/layouts/layout";
import { PuzzleIcon } from "lucide-react";
import { Suspense } from "react";

export default async function Home() {
  return (
    <>
      <Layout>
        <div className="flex items-center gap-x-2 mt-10">
          <Heading as="h1" className="text-3xl sm:text-4xl  font-semibold ">
            프론트엔드 퍼즐 맞추기
          </Heading>
          <PuzzleIcon className="text-primary" size={28} />
        </div>
        <p className="text-lg mt-6 font-light">
          안녕하세요 프론트엔드를 한 조각 한 조각씩 맞춰가고 있는 중입니다.
        </p>
        <p className="text-lg font-light">
          이 블로그는 프론트엔드 개발 여정을 기록하고, 배운 것들을 공유하기 위해
          만들었습니다.
        </p>

        <Heading as="h2" className="text-2xl sm:text-3xl font-semibold my-4">
          새로 올라온 글
        </Heading>
        <Suspense fallback={<PostSkeleton />}>
          <NewPosts />
        </Suspense>
      </Layout>
    </>
  );
}
