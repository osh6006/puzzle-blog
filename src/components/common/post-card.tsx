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

interface IPostCardProps {
  title: string;
  date: string;
  imageUrl?: string;
}

const PostCard: React.FunctionComponent<IPostCardProps> = ({
  date,
  title,
  imageUrl,
}) => {
  return (
    <Card className=" cursor-pointer group hover:bg-primary-foreground transition-colors rounded-lg overflow-hidden">
      <CardHeader className="relative min-h-[200px]">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt="postThumbnail"
            fill
            style={{
              backgroundSize: "cover",
            }}
          />
        ) : (
          <div className="w-full flex items-center group-hover:bg-primary-foreground transition duration-200 justify-center flex-col inset-0 absolute bg-gray-200 ">
            <ApertureIcon size={100} />
          </div>
        )}
      </CardHeader>
      <CardContent className="mt-4">
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardContent>
      <CardFooter className="flex justify-between">
        <time dateTime={date} className="w-full text-right text-sm">
          {date}
        </time>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
