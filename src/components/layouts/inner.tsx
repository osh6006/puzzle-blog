import * as React from "react";

interface IInnerProps {
  children: React.ReactNode;
}

const Inner: React.FunctionComponent<IInnerProps> = ({ children }) => {
  return <div className="max-w-5xl mx-auto">{children}</div>;
};

export default Inner;
