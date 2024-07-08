import { MDXComponents } from "mdx/types";
import Image from "next/image";
import Callout from "@/components/mdx/callout";
import Codepen from "@/components/mdx/codepen";
import CodeSandbox from "@/components/mdx/code-sandbox";

export const MdxComponents: MDXComponents = {
  a: (props) => (
    <a
      {...props}
      target="_blank"
      className="break-words text-lg text-primary no-underline underline-offset-4 hover:underline"
    >
      {props.children}
    </a>
  ),

  img: (props) => (
    <>
      <Image
        src={props.src || ""}
        alt={props.alt || "image"}
        width={700}
        height={500}
        className="mx-auto mb-0 mt-8 rounded-md "
      />
      {props.alt !== "" && (
        <span className="mb-8 mt-2 block w-full text-center text-sm text-gray-500 dark:text-gray-400">
          {props.alt}
        </span>
      )}
    </>
  ),
  blockquote: (props) => (
    <div className="bg-sky-500/10 px-4 py-[1px] text-lg rounded-md my-2">
      {props.children}
    </div>
  ),
  Callout: Callout,
  CodePen: Codepen,
  CodeSandbox: CodeSandbox,
};
