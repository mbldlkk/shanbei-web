import { IoPhonePortraitOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export const BottomClientCard = () => {
  return (
    <div className="flex h-[160px] w-[170px] flex-col items-center justify-center bg-white shadow-xl hover:shadow-2xl">
      <i className="mb-3 text-7xl text-[#209e85]">
        <IoPhonePortraitOutline />
      </i>

      <NavLink to="/">
        <h3 className="text-2xl">扇贝客户端</h3>
      </NavLink>
    </div>
  );
};
