import Link from "next/link";
import * as React from "react";
import { Button } from "@/components/ui/button";

interface INavProps {}

const Nav: React.FunctionComponent<INavProps> = (props) => {
  return (
    <nav>
      <Link href="/blog">
        <Button variant="ghost" className="text-base">
          Blog
        </Button>
      </Link>
    </nav>
  );
};

export default Nav;
