import { cn } from "@/lib/utils";
import * as React from "react";

interface IInnerProps {
  children: React.ReactNode;
  className?: string;
}

const Inner: React.FunctionComponent<IInnerProps> = ({
  children,
  className,
}) => {
  return <div className={cn("max-w-6xl mx-auto", className)}>{children}</div>;
};

export default Inner;
