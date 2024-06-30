import { useDispatch, useSelector } from "react-redux";

import { Outlet } from "react-router";
import { useEffect } from "react";
import { getUserBook } from "../../../../../redux/action/userBook";
import { initStudyPlan } from "../../../../../redux/action/studyPlan";
import { BottomClient } from "./Components/bottomClient";
import { WordPageNav } from "./Components/wordNav";

export const WordPageContainer = () => {
  const auth = useSelector((store: any) => store.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("word容器中", { deom: auth.accessToken });

    if (auth.accessToken !== "") {
      //请求用户书籍
      getUserBook(dispatch);
      //初始化 api 请求用户数据
      initStudyPlan(dispatch);
    }
  }, [auth]);

  if (auth.accessToken === "") {
    return (
      <div className="mi1n-h-[90vh] flex h-[100%] w-full flex-col items-center justify-center">
        请登录后再尝试
      </div>
    );
  }

  return (
    <>
      <div className="fle1x-wrap w1-96 hidde1nScrollBar overfl1ow-x-auto s1m:h-fit mx-auto flex h-10 w-[80%] max-w-[1320px] flex-row gap-1 overflow-auto pt-2 text-[#666666]">
        <WordPageNav />
      </div>
      <div
        id="WordPageContainer"
        className="m1x-auto se1lf-center mb-10 flex min-h-[600px] w-[80%] max-w-[1320px] flex-col items-center gap-2 bg-white"
      >
        <Outlet />
      </div>

      <div className="flex min-h-[260px] items-start justify-between gap-1 self-stretch bg-[#2d2e2a] px-32 pb-10 pt-10 text-white sm:flex-col sm:items-center">
        <BottomClient />
      </div>
    </>
  );
};
