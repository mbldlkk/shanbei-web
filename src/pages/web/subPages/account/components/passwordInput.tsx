import { useRef, useState } from "react";
import {
  IoEyeOffOutline,
  IoEyeOutline,
  IoLockClosedOutline,
} from "react-icons/io5";
import { useParams } from "react-router";
import { z } from "zod";

const userPassword = z
  .string()
  .min(8, { message: "你的密码至少要8位" })
  .max(16, { message: "你的密码最多16位" });

const passwordSchema = z
  .object({ userPassword: z.string(), confirmPassword: z.string() })
  .refine((data) => data.confirmPassword === data.userPassword, {
    message: "请确保重复输入的密码是一样的",
  });

export const PasswordInput = ({
  setUserAuthData,
}: {
  setUserAuthData: any;
}) => {
  const { type } = useParams();

  const passwordEle = useRef<HTMLInputElement>(null);
  const confirmPasswordEle = useRef<HTMLInputElement>(null);

  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const passwordTimeID = useRef<number>();
  const confirmPasswordTimeID = useRef<number>();

  const [passwordType, setPasswordType] = useState<"password" | "text">(
    "password",
  );
  const [confirmPasswordType, setConfirmPasswordType] = useState<
    "password" | "text"
  >("password");

  const validateConfirmPassword = () => {
    try {
      passwordSchema.parse({
        userPassword: passwordEle.current?.value,
        confirmPassword: confirmPasswordEle.current?.value,
      });

      setUserAuthData((prev: any) => ({
        ...prev,
        confirmPassword: true,
      }));
      setConfirmPasswordError("");
    } catch (error) {
      if (error instanceof z.ZodError) {
        setConfirmPasswordError(error.errors[0].message);

        setUserAuthData((prev: any) => ({
          ...prev,
          confirmPassword: false,
        }));
      }
    }
  };

  const validatePassword = () => {
    try {
      userPassword.parse(passwordEle.current?.value);
      setUserAuthData((prev: any) => ({
        ...prev,
        password: passwordEle.current?.value,
      }));

      setPasswordError("");
    } catch (error) {
      if (error instanceof z.ZodError) {
        setPasswordError(error.errors[0].message);

        setUserAuthData((prev: any) => ({
          ...prev,
          password: false,
        }));
      }
    }
  };

  const handlePasswordChange = () => {
    clearTimeout(passwordTimeID.current);
    passwordTimeID.current = setTimeout(() => {
      validatePassword();
      validateConfirmPassword();
    }, 500);
  };

  const handleConfirmPasswordChange = () => {
    clearTimeout(confirmPasswordTimeID.current);
    confirmPasswordTimeID.current = setTimeout(() => {
      validateConfirmPassword();
    }, 500);
  };

  return (
    <>
      <div>
        <div className="flex w-full items-center gap-3 rounded border border-[#cacaca] py-2 pl-3 focus-within:border-[#209e85]">
          <i className="text-2xl">
            <IoLockClosedOutline />
          </i>
          <input
            className="w-[72%] outline-none"
            type={passwordType}
            placeholder="请输入密码"
            ref={passwordEle}
            onChange={handlePasswordChange}
          />
          <i
            className="cursor-pointer text-2xl"
            onClick={() =>
              setPasswordType((passwordType) =>
                passwordType === "password" ? "text" : "password",
              )
            }
          >
            {passwordType === "password" ? (
              <IoEyeOffOutline />
            ) : (
              <IoEyeOutline />
            )}
          </i>
        </div>
        {passwordError !== "" && (
          <div className="h-6 text-red-500">* {passwordError}</div>
        )}
      </div>
      {type !== "signin" && (
        <div>
          <div className="flex w-full items-center gap-3 rounded border border-[#cacaca] py-2 pl-3 focus-within:border-[#209e85]">
            <i className="text-2xl">
              <IoLockClosedOutline />
            </i>
            <input
              className="w-[72%] outline-none"
              type={confirmPasswordType}
              placeholder="重新输入密码"
              ref={confirmPasswordEle}
              onChange={handleConfirmPasswordChange}
            />
            <i
              className="cursor-pointer text-2xl"
              onClick={() =>
                setConfirmPasswordType((prev) =>
                  prev === "password" ? "text" : "password",
                )
              }
            >
              {confirmPasswordType === "password" ? (
                <IoEyeOffOutline />
              ) : (
                <IoEyeOutline />
              )}
            </i>
          </div>
          {confirmPasswordError !== "" && (
            <div className="h-6 text-red-500">* {confirmPasswordError}</div>
          )}
        </div>
      )}
    </>
  );
};
