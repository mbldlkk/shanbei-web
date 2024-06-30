import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";
import { useTagState } from "../../../../../../../redux/store";
import { useDispatch } from "react-redux";
import { tagAction } from "../../../../../../../redux/slice/tag";

export const TagItem2 = ({ name }: { name: string }) => {
  const buttonRef = useRef<any>();
  const tagState = useTagState();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(tagAction.setCurrentTag(name));
  };
  useEffect(() => {
    if (tagState.currentTag === name) {
      (buttonRef.current as HTMLButtonElement).scrollIntoView({
        behavior: "smooth",
        inline: "start",
      });
    }
  }, []);
  return (
    <button
      ref={buttonRef}
      className={twMerge(
        "w-full px-7 py-5 hover:bg-[#209e85] hover:text-white",
        tagState.currentTag === name ? "bg-[#209e85] text-white" : "",
      )}
      onClick={handleClick}
    >
      {name}
    </button>
  );
};
