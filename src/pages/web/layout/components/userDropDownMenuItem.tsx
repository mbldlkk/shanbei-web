import { NavLink } from "react-router-dom";

export const UserDropDownMenuItem = ({
  content,
  url,
}: {
  content: string;
  url: string;
}) => {
  return (
    <NavLink to={url}>
      <div className="px-2 py-1 hover:bg-[#209e85] hover:text-white">
        {content}
      </div>
    </NavLink>
  );
};
