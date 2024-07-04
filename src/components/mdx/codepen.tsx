"use client";

import { Suspense } from "react";

interface ICodepenProps {
  title: string;
  user: string;
  hash: string;
}

const Codepen: React.FunctionComponent<ICodepenProps> = ({
  hash,
  title,
  user,
}) => {
  return (
    <iframe
      width="100%"
      height="450"
      title="인터섹션 옵저버 사용하기"
      src={`https://codepen.io/osh6006/embed/${hash}?default-tab=html%2Cresult`}
      loading="lazy"
      allowFullScreen
    >
      See the Pen
      <a href={`https://codepen.io/osh6006/pen/${hash}`}>{title}</a>
      by osh6006 (<a href={`https://codepen.io/${user}`}>@{user}</a>) on
      <a href="https://codepen.io">CodePen</a>.
    </iframe>
  );
};

export default Codepen;
