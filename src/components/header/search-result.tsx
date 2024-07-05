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

  return (
    <ul className="w-full space-y-4">
      {searchResult
        ? searchResult.map((result) => (
            <li key={result.matchedContents} onClick={onClose}>
              <Link href={result.url}>
                <Card>
                  <CardHeader>
                    <h2>{result.title}</h2>
                  </CardHeader>
                  <CardContent>
                    <div
                      className="article-content"
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
