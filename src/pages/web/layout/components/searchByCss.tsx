import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { twMerge as tm } from "tailwind-merge";
import { getWordByName } from "../../../../redux/action/word";
import { IoSearchOutline } from "react-icons/io5";
import { SearchCard } from "./searchCard";

// 通过css 伪类实现的搜索框
export const SearchByCss = () => {
  //  展开的时候变成白色

  const [isShowSearchCard, setIsShowSearchCard] = useState(false);
  const dispatch = useDispatch();

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      className={tm(
        "relative flex w-[132px] flex-row items-center rounded-xl border bg-[#209e85] px-2 py-[2px] transition-[width]",
        "group focus-within:w-[186px] focus-within:bg-white",
      )}
      onBlur={() => {
        console.log("触发了 div失焦");
        setIsShowSearchCard(false);
      }}
    >
      <input
        ref={inputRef}
        type="text"
        className={tm(
          "w-[82px] border-none bg-[#209e85] pl-2 pr-1 outline-none transition-[width]",
          "focus:w-[132px] focus:bg-white focus:text-black",
        )}
        placeholder="查找单词"
      />
      <div
        className={tm(
          "pr- hidden cursor-pointer pr-1 text-sm text-black",
          "group-focus-within:block",
        )}
        onMouseDown={(e) => {
          e.preventDefault();
        }}
        onClick={() => {
          (inputRef.current as any).value = "";
        }}
      >
        X
      </div>
      <div
        className={tm(
          "m-auto flex h-5 w-5 cursor-pointer items-center justify-center pl-1 text-2xl focus:border-solid group-focus-within:border-l-2 group-focus-within:text-black",
        )}
        onMouseDown={(e) => {
          e.preventDefault();
        }}
        onClick={() => {
          const wordName = inputRef.current?.value;
          console.log(wordName);
          if (wordName !== undefined && wordName !== "") {
            setIsShowSearchCard(true);
            getWordByName(dispatch, wordName);
          }
        }}
        onBlur={() => {
          setIsShowSearchCard(false);
        }}
      >
        <IoSearchOutline />
      </div>
      <SearchCard isShowSearchCard={isShowSearchCard} />
    </div>
  );
};
