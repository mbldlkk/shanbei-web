import { twMerge as tm } from "tailwind-merge";

export const LeftButtonItem = ({
  children,
  selectIndex,
  index,
  setSelectIndex,
}: any) => {
  return (
    <button
      className={tm(
        "h-[90px] w-full text-center",
        selectIndex === index && "border-r-2 border-r-[#28bea0] text-[#28bea0]",
      )}
      onClick={() => {
        setSelectIndex(index);
      }}
    >
      {children}
    </button>
  );
};
