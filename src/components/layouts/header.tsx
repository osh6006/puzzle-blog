import Logo from "@/components/header/logo";
import Search from "@/components/header/search";
import ThemeSwitch from "../header/theme-switch";
import Link from "next/link";

import { GemIcon } from "lucide-react";
import { Button } from "../ui/button";
import Nav from "../header/nav";

function Header() {
  return (
    <header className="fixed flex w-full h-[55px] border-b items-center justify-center shadow-sm shadow-blue-50 z-20 px-4">
      <div className="w-full flex items-center justify-between max-w-5xl gap-x-4 ">
        <div className="flex items-center gap-x-4">
          <Logo text="Puzzle" />
          <Nav />
        </div>
        <Search />
        <div className="flex items-center gap-x-2">
          <ThemeSwitch />
          <Link href="https://github.com/osh6006/">
            <Button variant="outline" size="icon" className="rounded-full">
              <GemIcon className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
