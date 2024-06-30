import { twMerge as tm } from "tailwind-merge";
import { useTodayFamousState } from "../redux/store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTodayFamous } from "../redux/action/famousQuote";
import { STATUS } from "../redux/slice/tag";

export const FamousQuotes = ({ tmStyle }: { tmStyle: string }) => {
  const dispatch = useDispatch();
  const { todayFamous, status } = useTodayFamousState();

  useEffect(() => {
    if (status === STATUS.pending) {
      getTodayFamous(dispatch);
      //优化:切换页面 回来的时候会重新触发获取.加个判断逻辑即可
    }
  }, []);

  // console.log("名人名言组件中", todayFamous.quoteCN, status);

  return (
    <div
      className={tm("mx-auto max-w-[1130px] bg-white px-5 pb-3 pt-5", tmStyle)}
    >
      {status === STATUS.pending ? (
        <div>名人名言加载中 ...</div>
      ) : (
        <>
          <p>{todayFamous.quoteEN}</p>
          <p>{todayFamous.quoteCN}</p>
          <p className="w-full text-right text-sm text-[#4ba185]">
            —— {todayFamous.author}
          </p>
        </>
      )}
    </div>
  );
};
