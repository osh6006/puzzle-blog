import { GemIcon, MailIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import Logo from "@/components/header/logo";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-5 border-t w-full ">
      <div className="max-w-5xl flex flex-col mx-auto w-full items-center justify-center">
        <div className="mb-4">
          <Logo text="Puzzle" />
        </div>

        <div className="mb-4 flex justify-center space-x-4">
          <Link
            href="mailto:ohs6006@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <MailIcon />
          </Link>

          <Link
            href="https://github.com/osh6006"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <GemIcon />
          </Link>
        </div>

        <div>
          <p>&copy; {currentYear} Puzzle. made by ❤️ ohs6006 </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
