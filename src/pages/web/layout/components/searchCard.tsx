import { NavLink } from "react-router-dom";
import { useWordState } from "../../../../redux/store";
import { AuidoItem } from "../../../../shareComponent/audio";
import { STATUS } from "../../../../redux/slice/tag";
import { twMerge as tm } from "tailwind-merge";

export const SearchCard = ({
  isShowSearchCard,
}: {
  isShowSearchCard: boolean;
}) => {
  const {
    status,
    error,
    searchWord: { name, explainCN, UKSymbol, USSymbol, USAudio, UKAudio, type },
  } = useWordState();

  //加载中的页面逻辑
  const Loading = (
    <>
      <div className="self-center text-2xl">正在查找单词中...</div>
    </>
  );

  //查不到的页面逻辑
  const NotFound = (
    <>
      <p className="self-center text-2xl">单词库中查不到该单词</p>
    </>
  );

  const Success = (
    <>
      <div
        className="relative flex flex-col gap-2"
        onMouseDown={(e) => e.preventDefault()}
      >
        <div
          style={{ clipPath: "polygon( 100% 50%, 52% 10%,49% 10%, 0 50%)" }}
          className="border-reda-600 absolute left-[35%] top-[-34px] h-10 w-12 border bg-white"
        ></div>
        <NavLink
          to={`/web/word/detail/${name}`}
          onMouseDown={(e) => e.preventDefault()}
        >
          <p className="absolute right-6 top-2 text-[#3dbfa0]">详情 &gt;</p>
        </NavLink>
        <p className="text-4xl">{name}</p>
        <div className="flex items-center gap-2">
          <p className="text-xl text-[#28c5c3]">US</p>
          <AuidoItem url={USAudio} />
          <p className="text-[#b8b9b9]">{USSymbol}</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-xl text-[#28c5c3]">UK</p>
          <AuidoItem url={UKAudio} />
          <p className="text-[#b8b9b9]">{UKSymbol}</p>
        </div>
        <p>
          {type}. {explainCN}
        </p>
      </div>
      <button className="self-center rounded-full bg-[#28bea0] px-5 py-1 text-white">
        添加到生词本
      </button>
    </>
  );
  console.log("查询组件执行");

  let Current = Loading;

  if (status === STATUS.pending) {
    Current = Loading;
  }

  if (status === STATUS.resolve) {
    Current = Success;
  }

  //不应该用status判断, 而是error. 如果错误是找不到, 那么就显示找不到单词
  if (error === 404) {
    Current = NotFound;
  }

  return (
    <div
      className={tm(
        "absolute left-[-80px] top-[50px] z-10 hidden min-h-[246px] w-80 flex-col justify-around gap-2 rounded-xl bg-white p-2 px-5 text-black shadow-2xl",
        isShowSearchCard && "flex",
      )}
    >
      {Current}
    </div>
  );
};
