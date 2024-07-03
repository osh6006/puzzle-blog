import { PropsWithChildren } from "react";

import { LinkProps } from "next/link";

const ExternalLink = ({
  children,
  href,
  ...props
}: PropsWithChildren<LinkProps>) => {
  return (
    <a
      {...props}
      target="_blank"
      href={href.toString() || ""}
      className="break-words text-primary no-underline underline-offset-4 hover:underline"
    >
      {children}
    </a>
  );
};

export default ExternalLink;
