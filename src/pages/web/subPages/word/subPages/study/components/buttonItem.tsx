import { MouseEventHandler } from "react";
import { twMerge } from "tailwind-merge";

export const ButtonItem = ({
  hoverColorClassName,
  a,
  b,
  ...props
}: {
  hoverColorClassName: string;
  a: number;
  b: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      className={twMerge("bg-[purp flex hover:text-white", hoverColorClassName)}
      {...props}
    >
      <span className="border px-5 py-6">{a} </span>
      <span className="w-full border px-20 py-6">{b}</span>
    </button>
  );
};
