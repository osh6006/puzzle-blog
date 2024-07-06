"use client";

import * as React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ISearchResult } from "@/types/blog";
import { highlightWord, removeMarkdown } from "@/lib/utils";
import { FileXIcon } from "lucide-react";

interface ISearchResultProps {
  query: string;
  onClose?: () => void;
}

const SearchResult: React.FunctionComponent<ISearchResultProps> = ({
  query,
  onClose,
}) => {
  const [searchResult, setSearchResult] = React.useState<ISearchResult[]>([]);

  React.useEffect(() => {
    try {
      fetch(`/api/search/${query}`)
        .then(async (res) => {
          return await res.json();
        })
        .then((data) => setSearchResult(data.searchedList || []));
    } catch (error) {
      throw new Error("에러가 발생하였습니다.");
    }
  }, [query]);

  if (searchResult.length <= 0) {
    return (
      <div className="h-[300px] w-full flex flex-col items-center gap-y-6 text-xl justify-center">
        <FileXIcon size={150} />
        검색 결과를 찾을 수 없습니다!
      </div>
    );
  }

  return (
    <ul className="w-full space-y-4">
      {searchResult
        ? searchResult.map((result) => (
            <li
              key={result.matchedContents}
              onClick={onClose}
              className="w-full"
            >
              <Link href={result.url}>
                <Card className="">
                  <CardHeader>
                    <h2>{result.title}</h2>
                  </CardHeader>
                  <CardContent>
                    <div
                      className="w-full break-keep"
                      dangerouslySetInnerHTML={{
                        __html: result.matchedContents,
                      }}
                    />
                  </CardContent>
                </Card>
              </Link>
            </li>
          ))
        : null}
    </ul>
  );
};

export default SearchResult;
