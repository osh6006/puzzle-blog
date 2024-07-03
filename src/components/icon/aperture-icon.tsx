import React from "react";

interface IApertureIcon {
  size?: number;
}

const ApertureIcon: React.FunctionComponent<IApertureIcon> = ({
  size = 24,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" stroke="black" />
      <path d="m14.31 8 5.74 9.94" stroke="black" />
      <path d="M9.69 8h11.48" stroke="skyblue" />
      <path d="m7.38 12 5.74-9.94" stroke="black" />
      <path d="M9.69 16 3.95 6.06" stroke="skyblue" />
      <path d="M14.31 16H2.83" stroke="black" />
      <path d="m16.62 12-5.74 9.94" stroke="skyblue" />
    </svg>
  );
};

export default ApertureIcon;
