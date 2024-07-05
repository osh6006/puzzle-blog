import { getSearchPost } from "@/lib/blog";

export async function GET(
  request: Request,
  { params }: { params: { query: string } }
) {
  const searchedList = await getSearchPost(params.query);
  return Response.json({ searchedList });
}
