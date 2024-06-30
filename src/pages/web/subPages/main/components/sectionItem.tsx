import { NavLink } from "react-router-dom";

export const SectionItem = ({ title, url }: { title: string; url: string }) => {
  return (
    <div className="h-[270px] w-[370px] rounded-xl bg-green-400 shadow-md hover:shadow-xl">
      <p className="mx-auto flex h-[40%] w-full flex-row items-center justify-center bg-white text-3xl">
        {title}
      </p>
      <div className="flex h-[60%] flex-row items-center justify-center bg-[#f0f0f0]">
        <div className="flex h-[50%] flex-col items-center justify-center gap-2">
          <NavLink to={url} className="text-xl text-[#7c8a8a]">
            去学习
          </NavLink>
        </div>
      </div>
    </div>
  );
};
