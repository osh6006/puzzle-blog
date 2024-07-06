import Link from "next/link";
import ApertureIcon from "@/components/icon/aperture-icon";

const Logo = ({ text }: { text: string }): React.ReactNode => {
  const words = text.split("");
  return (
    <Link
      href="/"
      className="text-2xl flex gap-x-2 items-center w-fit  font-semibold"
    >
      <ApertureIcon />
      <span className="hidden sm:inline">
        {words.map((word, index) => {
          const color = word === "z" ? "text-sky-300" : "";
          return (
            <span key={index} className={color}>
              {word}
            </span>
          );
        })}
      </span>
    </Link>
  );
};

export default Logo;
