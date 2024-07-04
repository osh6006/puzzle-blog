"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  CheckIcon,
  CornerRightUpIcon,
  LinkIcon,
  MessageCircleMoreIcon,
} from "lucide-react";
import { toast } from "@/components/ui/use-toast";

interface ISidebarFooterProps {}

const SidebarFooter: React.FunctionComponent<ISidebarFooterProps> = (props) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        setCopied(true);
        toast({
          title: "클립보드에 복사 되었습니다.",
          variant: "success",
        });
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };
  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleComment = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };
  return (
    <div className="flex gap-x-2">
      <Button variant="outline" size="icon" onClick={handleCopy}>
        {copied ? <CheckIcon size={18} /> : <LinkIcon size={18} />}
      </Button>
      <Button variant="outline" size="icon" onClick={handleTop}>
        <CornerRightUpIcon size={18} />
      </Button>
      <Button variant="outline" size="icon" onClick={handleComment}>
        <MessageCircleMoreIcon size={18} />
      </Button>
    </div>
  );
};

export default SidebarFooter;
