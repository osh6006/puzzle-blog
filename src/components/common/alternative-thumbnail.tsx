import { cn } from "@/lib/utils";
import ApertureIcon from "../icon/aperture-icon";

interface IAlternativeThumbnailProps {
  className?: string;
}

const AlternativeThumbnail: React.FunctionComponent<
  IAlternativeThumbnailProps
> = ({ className }) => {
  return (
    <div
      className={cn(
        "w-full items-center justify-center flex bg-gray-200 h-[350px] rounded-md",
        className
      )}
    >
      <ApertureIcon size={200} />
    </div>
  );
};

export default AlternativeThumbnail;
