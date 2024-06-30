import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="mx-auto flex w-[60%] justify-between border-t-2 pt-5">
      <div className="flex flex-wrap gap-2">
        <NavLink to="/">免责协议</NavLink>
        <p>|</p>
        <NavLink to="/">使用协议</NavLink>
        <p>苏ICP备</p>
        <p>公安备案号</p>
      </div>
      <Copyright />
    </div>
  );
};

const Copyright = () => {
  return <p>Copyright © ljj 版权所有</p>;
};
