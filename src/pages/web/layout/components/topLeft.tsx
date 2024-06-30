import { NavLink } from "react-router-dom";
import { twMerge as tm } from "tailwind-merge";

const baseUrl = "/web";

const pages = [
  { name: "主页", path: baseUrl + "/main" },
  { name: "单词", path: baseUrl + "/word" },
  { name: "编程", path: baseUrl + "/code" },
  { name: "听力口语", path: baseUrl + "/listen" },
  { name: "短文", path: baseUrl + "/article" },
  { name: "读书", path: baseUrl + "/readBook" },
  { name: "社区", path: baseUrl + "/community" },
];

export const TopLeft = () => {
  return (
    <div
      className={tm(
        "gap1-8 flex w-[50%] min-w-fit flex-row flex-wrap items-center justify-between gap-1",
        "sm1:text-black sm:flex1-col sm:justify-start sm:self-start sm:bg-[#209e85]",
        //sm:opacity-[0.5]
      )}
    >
      <p className="pr-6 text-3xl sm:w-full sm:border-b-2 sm:py-3 sm:pr-0">
        扇贝官网 - Clone
      </p>
      {pages.map((item, index) => (
        <NavLink
          to={item.path}
          key={index}
          className={({ isActive }) => {
            return isActive
              ? "h-8 border-b-2 border-white px-1 py-1"
              : "h-8 border-white px-1 py-1 text-center hover:border-b-2";
          }}
        >
          {item.name}
        </NavLink>
      ))}
    </div>
  );
};
