import { useDispatch } from "react-redux";
import { twMerge } from "tailwind-merge";
import { tagAction } from "../../../../../../../redux/slice/tag";

export const TagItem = ({
  content,
  isPrimary,
}: {
  content: any;
  isPrimary: boolean;
}) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(tagAction.setCurrentTag(content));
  };
  return (
    <button
      className={twMerge(
        "rounded-full border border-gray-200 px-8 py-1 text-gray-200 hover:bg-[#209e85] hover:text-white",
        isPrimary ? "border-[#40c5ab] text-[#40c5ab]" : "",
      )}
      onClick={handleClick}
    >
      {content}
    </button>
  );
};
