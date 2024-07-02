import Logo from "@/components/header/logo";
import Search from "@/components/header/search";
import ThemeSwitch from "../header/theme-switch";

function Header() {
  return (
    <header className="flex w-full h-[55px] border-b items-center justify-center shadow-sm shadow-blue-50">
      <div className="w-full flex items-center justify-between max-w-5xl gap-x-4 ">
        <Logo text="Puzzle" />
        <Search />
        <ThemeSwitch />
      </div>
    </header>
  );
}

export default Header;
