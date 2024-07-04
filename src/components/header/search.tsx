import { SearchIcon } from "lucide-react";
import React from "react";

const Search = () => {
  return (
    <div
      className="flex w-full max-w-[300px] justify-between rounded-md bg-gray-100  items-center gap-x-4 text-sm border p-2 cursor-pointer 
  hover:bg-gray-200 hover:text-gray-800 text-gray-400 
  dark:bg-background dark:border-gray-400 dark:hover:bg-slate-800 dark:hover:text-gray-200
    transition-colors duration-300"
    >
      <span>제목으로 검색하기</span>
      <SearchIcon className="w-4 h-4 text-primary" />
    </div>
  );
};

export default Search;
