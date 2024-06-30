import { IconType } from "react-icons";
import { FaWeibo } from "react-icons/fa6";
import { IoCallOutline, IoLogoWechat } from "react-icons/io5";
import { twMerge } from "tailwind-merge";

export const ThirdLoginData = [
  {
    id: 1,
    href: "",
    icon: IoLogoWechat,
    name: "微信登录",
    hoverColor: "#68b560",
  },
  { id: 2, href: "", icon: FaWeibo, name: "微博登录", hoverColor: "#d34d4c" },
  {
    id: 3,
    href: "",
    icon: IoCallOutline,
    name: "手机号登录",
    hoverColor: "#28bea0",
  },
];

export const ThirdLoginItem = ({
  hoverColor,
  href,
  Icon,
  name,
}: {
  hoverColor: string;
  href: string;
  Icon: IconType;
  name: string;
}) => {
  const hoverColorStyle = {
    "#68b560": "hover:bg-[#68b560]",
    "#d34d4c": "hover:bg-[#d34d4c]",
    "#28bea0": "hover:bg-[#28bea0]",
  };
  type hoverColorStyle = {
    "#68b560": string;
    "#d34d4c": string;
    "#28bea0": string;
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <a
        href={href}
        className={twMerge(
          "inline-blc flex items-center justify-center rounded-full bg-[#dcdcdc] px-2 py-2 text-white",
          // `after:content-[attr(data-dynamicHoverColor)] `,
          hoverColorStyle[hoverColor as keyof hoverColorStyle],
        )}
      >
        <i className="rounded-full px-2 py-2 text-4xl">
          <Icon />
        </i>
      </a>
      <p className="text-[#999999]">{name}</p>
    </div>
  );
};
