import { cn } from "@/lib/utils";
import * as React from "react";
import Inner from "@/components/layouts/inner";

interface ILayoutProps {
  children: React.ReactNode;
  className?: string;
}

const Layout: React.FunctionComponent<ILayoutProps> = ({
  children,
  className,
}) => {
  return (
    <main
      className={cn("pt-[55px] w-full h-full flex-grow px-4 my-8", className)}
    >
      <Inner>{children}</Inner>
    </main>
  );
};

export default Layout;
