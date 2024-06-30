import { useSelector } from "react-redux";
import { SearchByCss } from "./searchByCss";
import { NavLink } from "react-router-dom";
import { twMerge as tm } from "tailwind-merge";
import {
  IoChevronDownOutline,
  IoMailOutline,
  IoPersonOutline,
} from "react-icons/io5";
import { UserDropDownMenu } from "./userDropDownMenu";
import { AboutThisProject } from "./aboutThisProject";

export const TopRight = () => {
  const authState = useSelector((store: any) => store.auth);
  console.log("导航栏上的", { authState });
  return (
    <div
      className={tm(
        "ga1p-6 flex w-[45%] min-w-fit flex-row flex-wrap items-center justify-end gap-5",
      )}
    >
      {authState.accessToken !== "" && (
        <div className="flex w-[186px] justify-end sm:w-full sm:justify-center">
          <SearchByCss />
        </div>
      )}
      <NavLink
        to="/web/help"
        className={({ isActive }) => {
          return isActive
            ? "h-8 border-b-2 border-white px-1 py-1"
            : "h-8 border-white px-1 py-1 text-center hover:border-b-2";
        }}
      >
        帮助
      </NavLink>
      {/* 动态组件 仅登录 */}
      {authState.accessToken !== "" && (
        <NavLink
          to="/web/message"
          className={({ isActive }) => {
            return isActive
              ? "h-8 border-b-2 border-white px-1 py-1"
              : "h-8 border-white px-1 py-1 text-center hover:border-b-2";
          }}
        >
          <i className="text-2xl">
            <IoMailOutline />
          </i>
        </NavLink>
      )}

      {/* <IoPersonOutline /> */}
      {/* 登录才显示头像 */}

      {authState.accessToken === "" ? (
        <div>
          <NavLink
            to="/web/account/auth/signin"
            className={({ isActive }) => {
              return isActive
                ? "h-8 border-b-2 border-white px-1 py-1"
                : "h-8 border-white px-1 py-1 text-center hover:border-b-2";
            }}
          >
            登录
          </NavLink>
          |
          <NavLink
            to="/web/account/auth/signup"
            className={({ isActive }) => {
              return isActive
                ? "h-8 border-b-2 border-white px-1 py-1"
                : "h-8 border-white px-1 py-1 text-center hover:border-b-2";
            }}
          >
            注册
          </NavLink>
        </div>
      ) : (
        <div className="group relative z-10 flex cursor-pointer items-center gap-1 py-2">
          <i className="text-xl">
            <IoPersonOutline />
          </i>
          <span>下拉列表</span>
          <i className="text-2xl transition-all duration-500 group-hover:rotate-180">
            <IoChevronDownOutline />
          </i>
          <UserDropDownMenu />
        </div>
      )}
      <AboutThisProject />
    </div>
  );
};
