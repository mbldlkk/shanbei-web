import { IoArrowForwardOutline } from "react-icons/io5";

export const NextWordButton = ({
  onclick,
  content,
}: {
  onclick: () => void;
  content: string;
}) => {
  return (
    <button
      className="absolute right-[-20%] top-[30%] flex flex-col items-center rounded border px-4 py-2 hover:bg-[#f2f3f6]"
      onClick={onclick}
    >
      <i className="text-3xl">
        <IoArrowForwardOutline />
      </i>
      <span>{content}</span>
    </button>
  );
};
