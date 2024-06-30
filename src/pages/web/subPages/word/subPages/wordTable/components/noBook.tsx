import { NavLink } from "react-router-dom";

export const NoBook = () => {
  return (
    <div className="flex h-[500px] flex-row items-center justify-center text-2xl font-bold">
      <h3 className="flex h-14 items-end pr-5">您尚未选择书籍学习,前往</h3>
      <NavLink
        to={"/web/word/books/select"}
        className="flex h-14 w-48 items-end justify-center transition-[font-size] hover:text-3xl"
      >
        书籍选择页面
      </NavLink>
    </div>
  );
};
