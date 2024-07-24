import React, { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";
import {
  CircleAlertIcon,
  CircleCheckIcon,
  CircleXIcon,
  InfoIcon,
} from "lucide-react";

type CalloutType = "info" | "warn" | "danger" | "normal";

interface CalloutProps extends PropsWithChildren {
  type?: CalloutType;
  title?: string;
  content?: string;
  row?: boolean;
}

interface IconType {
  [key: string]: {
    icon: () => React.ReactNode;
    boxClass: string;
  };
}

const metadata: IconType = {
  info: {
    icon: () => <InfoIcon className="text-green-500 w-6 h-6" />,
    boxClass: "bg-green-100 dark:bg-green-700",
  },
  danger: {
    icon: () => <CircleXIcon className="text-red-500 w-6 h-6" />,
    boxClass: "bg-red-100 dark:bg-red-700",
  },
  warn: {
    icon: () => <CircleAlertIcon className="text-amber-500 w-6 h-6" />,
    boxClass: "bg-amber-100 dark:bg-yellow-700",
  },

  normal: {
    icon: () => <CircleCheckIcon className="text-blue-500 w-6 h-6" />,
    boxClass: "bg-blue-100 dark:bg-blue-700",
  },
};

const Callout = (props: CalloutProps) => {
  const type = props.type || "normal";
  const metaObj = metadata[type];

  const Icon = metaObj.icon;
  const boxClassName = metaObj.boxClass;

  return (
    <div
      className={cn(
        "my-6 relative flex gap-3 justify-start not-prose rounded-md px-12 py-4 dark:text-white",
        boxClassName
      )}
    >
      <div className="absolute top-4 left-4 h-fit">
        <Icon />
      </div>

      <div
        className={cn(
          "flex-1 flex gap-x-2 w-full text-base prose-p:m-0",
          props.row ? "flex-row" : "flex-col"
        )}
      >
        {props.title && (
          <span style={{ fontWeight: "bold" }} className="mb-2">
            {props.title}
          </span>
        )}
        <p>{props.content}</p>
        {props.children}
      </div>
    </div>
  );
};

export default Callout;
