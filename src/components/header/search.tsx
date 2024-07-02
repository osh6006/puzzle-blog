import { SearchIcon } from "lucide-react";
import React from "react";

const Search = () => {
  return (
    <div
      className="flex w-full max-w-[300px] justify-between rounded-md bg-gray-100 items-center gap-x-4 text-sm border p-2 cursor-pointer 
  hover:bg-gray-200 hover:text-gray-800 text-gray-400
    transition-colors"
    >
      <span>제목으로 검색하기</span>
      <SearchIcon className="w-4 h-4" />
    </div>
  );
};

export default Search;
