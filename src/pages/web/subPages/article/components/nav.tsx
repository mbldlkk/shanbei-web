import { NavLink, Outlet } from "react-router-dom";

const navData = [
  { title: "短文首页", url: "home" },
  { title: "我的短文", url: "mineArticle" },
  { title: "短文计划", url: "plans" },
  { title: "短文进度", url: "progress" },
];

export const Nav = () => {
  return (
    <div className="flex flex-row gap-5">
      {navData.map((item, index) => {
        return (
          <NavLink
            to={item.url}
            key={index}
            className={({ isActive }) => {
              return isActive ? "bg-green-400" : "";
            }}
          >
            {item.title}
          </NavLink>
        );
      })}
      <Outlet />
    </div>
  );
};
