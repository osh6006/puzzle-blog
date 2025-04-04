import * as React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import ApertureIcon from "@/components/icon/aperture-icon";
import { cn } from "@/lib/utils";

interface IPostCardProps {
  title: string;
  date: string;
  imageUrl?: string;
  category: string;
}

const PostCard: React.FunctionComponent<IPostCardProps> = ({
  date,
  title,
  imageUrl,
  category,
}) => {
  return (
    <Card
      className="flex  h-full flex-col cursor-pointer group hover:shadow-md hover:bg-primary-foreground transition-colors rounded-lg overflow-hidden 
     dark:bg-background  dark:hover:shadow dark:hover:shadow-primary dark:transition
    "
    >
      <CardHeader className="relative min-h-[200px] overflow-hidden p-2 bg-slate-50">
        {imageUrl ? (
          <div
            style={{
              backgroundImage: `url('${imageUrl}')`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            className={cn(
              "group-hover:scale-105 transition-all w-full h-[190px] "
            )}
          />
        ) : (
          <div
            className="w-full flex items-center group-hover:bg-primary-foreground transition duration-200 justify-center flex-col inset-0 absolute bg-slate-100
          "
          >
            <ApertureIcon size={100} />
          </div>
        )}
      </CardHeader>
      <CardContent className="mt-4 flex-grow dark:">
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <span className="text-primary font-semibold uppercase whitespace-nowrap">
          {category}
        </span>
        <time dateTime={date} className="w-full text-right text-sm">
          {date}
        </time>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
