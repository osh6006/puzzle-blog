"use client";

import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import SearchResult from "./search-result";
import React, { Suspense } from "react";
import { FileXIcon } from "lucide-react";

interface ISearchDialogProps {
  onClose?: () => void;
}

const SearchDialog: React.FunctionComponent<ISearchDialogProps> = ({
  onClose,
}) => {
  const [query, setQuery] = React.useState("");
  const deferredQuery = React.useDeferredValue(query);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <DialogContent className="sm:max-w-[550px] overscroll-y-auto overflow-x-hidden max-h-[500px] px-6 py-6 dark:bg-zinc-900">
      <DialogHeader>
        <DialogTitle>블로그 내 검색</DialogTitle>
      </DialogHeader>
      <Input
        onChange={(e) => handleSearch(e)}
        id="name"
        value={query}
        placeholder="제목 혹은 내용을 입력하세요"
        className="sm:max-w-[550px]"
      />
      <>
        {query ? (
          <Suspense fallback={<div>loading...</div>}>
            <SearchResult onClose={onClose} query={deferredQuery} />
          </Suspense>
        ) : (
          <div className="h-[300px] w-full flex flex-col items-center gap-y-6 text-xl justify-center">
            <FileXIcon size={150} />
            검색 결과를 찾을 수 없습니다!
          </div>
        )}
      </>
    </DialogContent>
  );
};

export default SearchDialog;
