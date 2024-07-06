"use client";

import React, { useState } from "react";
import { SearchIcon } from "lucide-react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import SearchDialog from "./search-dialog";

const Search = () => {
  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={(isOpen) => setOpen(isOpen)}>
      <DialogTrigger
        className="flex w-[40px] sm:w-[300px] justify-center sm:justify-between rounded-md bg-gray-100 items-center gap-x-4 text-sm border p-2 cursor-pointer 
  hover:bg-gray-200 hover:text-gray-800 text-gray-400 
  dark:bg-background dark:border-gray-400 dark:hover:bg-slate-800 dark:hover:text-gray-200
    transition-colors duration-300"
      >
        <span className="hidden sm:block">제목으로 검색하기</span>
        <SearchIcon className="w-4 h-4 text-primary" />
      </DialogTrigger>
      <SearchDialog onClose={onClose} />
    </Dialog>
  );
};

export default Search;
