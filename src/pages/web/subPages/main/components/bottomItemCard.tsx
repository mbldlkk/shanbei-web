import { NavLink } from "react-router-dom";

export const BottomItemCard = ({
  title,
  url,
}: {
  title: string;
  url: string;
}) => {
  return (
    <div className="h-[160px] w-[170px] bg-white px-2 py-3 shadow-xl hover:shadow-2xl">
      <h3 className="mx-auto w-fit pb-10">扇贝</h3>
      <h3 className="mx-auto w-fit pb-5">{title}</h3>

      <NavLink to={url} className="mx-auto block w-fit pb-10 text-[#479685]">
        了解更多
      </NavLink>
    </div>
  );
};
