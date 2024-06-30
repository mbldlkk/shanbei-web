import { NavLink } from "react-router-dom";

const baseUrl = "/web/word";

const pages = [
  { name: "单词学习", path: baseUrl + "/study/entry" },
  { name: "单词书", path: baseUrl + "/books" },
  { name: "词表", path: baseUrl + "/table" },
  { name: "生词本", path: baseUrl + "/collection" },
  { name: "拓展包", path: baseUrl + "/applet" },
  { name: "设置", path: baseUrl + "/setting" },
];


export const WordPageNav = () => {
  return (
    <>
      {pages.map((item, index) => (
        <NavLink
          to={item.path}
          className={({ isActive }) => {
            return isActive
              ? "w1-48 w1-fit w-fit shrink-0 border-b-2 border-[#209e85] px-3 text-[#209e85]"
              : "w-fit shrink-0 border-[#209e85] px-3 hover:border-b-2";
          }}
          key={index}
        >
          {item.name}
        </NavLink>
      ))}
    </>
  );
};
