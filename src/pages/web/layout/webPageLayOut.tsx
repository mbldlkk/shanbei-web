import { useEffect } from "react";
import { Outlet } from "react-router";
import { useDispatch } from "react-redux";

import { getLocalAuth } from "../../../redux/action/auth";
import { studyAction } from "../../../redux/slice/study";
import { Nav } from "./components/nav";

export const WebPageContainer = () => {
  console.log("web 容器组件");
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("初始化加载本地的token");
    getLocalAuth(dispatch);
    dispatch(studyAction.getSettings());
  }, []);

  return (
    <>
      <div className="min- h-[vh] w-[100v1w] min-w-[1700px1] bg-[#209e85] py-2 text-white sm:static sm:py-1">
        <Nav />
      </div>
      <div className="min flex min-h-[90vh] w-full flex-col items-center justify-center gap-3 bg-[#f2f3f6]">
        <Outlet />
      </div>
    </>
  );
};
