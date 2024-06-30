import { useRef, useState } from "react";
import { IoPersonOutline } from "react-icons/io5";
import { z } from "zod";

const userEmail = z.string().email({ message: "输入邮箱不合法,请检查一下" });

export const EmailInput = ({ setUserAuthData }: { setUserAuthData: any }) => {
  const emailEle = useRef<HTMLInputElement>(null);
  const [error, setError] = useState("");

  const emailTimeID = useRef<number>();

  const handleChange = () => {
    clearTimeout(emailTimeID.current);
    emailTimeID.current = setTimeout(() => {
      try {
        userEmail.parse(emailEle.current?.value),
          setUserAuthData((prev: any) => ({
            ...prev,
            email: emailEle.current?.value,
          }));
        setError("");
      } catch (error) {
        if (error instanceof z.ZodError) {
          setError(error.errors[0].message);

          setUserAuthData((prev: any) => ({
            ...prev,
            email: false,
          }));
        }
      }
    }, 1000);
  };

  return (
    <div className="flex flex-col gap-1">
      <div className="flex w-full items-center gap-3 rounded border border-[#cacaca] py-2 pl-3 focus-within:border-[#209e85]">
        <i className="text-2xl">
          <IoPersonOutline />
        </i>
        <input
          className="w-[85%] outline-none"
          type="text"
          placeholder="请输入邮箱"
          ref={emailEle}
          onChange={handleChange}
        />
      </div>
      {error !== "" && <div className="h-6 text-red-500">* {error}</div>}
    </div>
  );
};
