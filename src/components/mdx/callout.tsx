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
    boxClass: "bg-green-100",
  },
  danger: {
    icon: () => <CircleXIcon className="text-red-500 w-6 h-6" />,
    boxClass: "bg-red-100",
  },
  warn: {
    icon: () => <CircleAlertIcon className="text-amber-500 w-6 h-6" />,
    boxClass: "bg-amber-100",
  },

  normal: {
    icon: () => <CircleCheckIcon className="text-blue-500 w-6 h-6" />,
    boxClass: "bg-blue-100",
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
        "my-6 relative flex gap-3 justify-start rounded-md px-12 py-4",
        boxClassName
      )}
    >
      <div className="absolute top-4 left-4 h-fit">
        <Icon />
      </div>
      <div className="flex-1 flex text-base prose-p:m-0">
        {props.title && (
          <span style={{ fontWeight: "bold" }}>{props.title}</span>
        )}
        {props.children}
      </div>
    </div>
  );
};

export default Callout;
