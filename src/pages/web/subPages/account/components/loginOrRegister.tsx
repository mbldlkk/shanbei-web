import { NavLink, Navigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAuthState } from "../../../../../redux/store";
import { useState } from "react";
import { signIn, signUp } from "../../../../../redux/action/auth";
import { EmailInput } from "./emailInput";
import { PasswordInput } from "./passwordInput";
import { ThirdLoginData, ThirdLoginItem } from "./thirdLoginItem";

enum authType {
  signIn = "signin",
  signUp = "signup",
}

export const LoginOrRegister = () => {
  const { type } = useParams();
  const authState = useAuthState();

  const [userAuthData, setUserAuthData] = useState<{
    email: string | boolean;
    password: string | boolean;
    confirmPassword: false;
    isAgree: boolean;
  }>({
    email: false,
    password: false,
    confirmPassword: false,
    isAgree: false,
  });

  const isLogin = type === "signin" ? true : false;
  const dispatch = useDispatch();

  const isDisable = () => {
    if (type === authType.signIn) {
      return userAuthData.email === false || userAuthData.password === false;
    }

    return (
      userAuthData.email === false ||
      userAuthData.password === false ||
      userAuthData.confirmPassword === false ||
      userAuthData.isAgree === false
    );
  };

  const handleSubmit = () => {
    const userFormData = {
      email: userAuthData.email,
      password: userAuthData.password,
      // email: "",
      // password: "",
    };
    console.log(userFormData);
    if (isLogin) {
      signIn(dispatch, userFormData);
      return;
    }
    signUp(dispatch, userFormData);
  };

  console.log(isDisable());

  if (authState.accessToken !== "") {
    return <Navigate to="/web/main" />;
  }

  return (
    <div className="flex flex-col gap-8 bg-[#fdfdfd] px-16 py-12">
      <h3 className="text-3xl">欢迎来到扇贝</h3>

      <EmailInput setUserAuthData={setUserAuthData} />
      <PasswordInput setUserAuthData={setUserAuthData} />

      {isLogin ? (
        <div className="flex justify-between pr-3">
          <p>
            <span>还没有账号?</span>
            <NavLink to="/web/account/auth/signUp" className="text-[#24b598]">
              去注册
            </NavLink>
          </p>
          <NavLink to="/account/reset" className="text-[#24b598]">
            忘记密码?
          </NavLink>
        </div>
      ) : (
        <div className="flex gap-2">
          <input
            type="checkbox"
            name=""
            id=""
            checked={userAuthData.isAgree}
            onChange={(e) => {
              console.log("用户是否同意?", e.target.checked);
              setUserAuthData((prev: any) => ({
                ...prev,
                isAgree: e.target.checked,
              }));
            }}
            className="h-6 w-6 border-[red] bg-green-300 outline-none"
          />
          <p>我已阅读并同意扇贝网的</p>
          <NavLink to={"/"} className={"self-start text-[#24b598]"}>
            使用协议
          </NavLink>
        </div>
      )}

      <button
        className="rounded bg-[#21ac91] py-1 text-white shadow-lg disabled:bg-[#bbe1d9]"
        disabled={isDisable()}
        onClick={handleSubmit}
      >
        {isLogin ? "登录" : "注册"}
      </button>

      {!isLogin && (
        <NavLink
          to="/web/account/auth/signin"
          className="self-end text-[#21ac91] underline underline-offset-4"
        >
          已有账户? 请登录
        </NavLink>
      )}
      {isLogin && (
        <>
          <div className="flex flex-row items-center justify-between text-[#cacaca]">
            <div className="h-[1px] w-[40%] bg-[#cacaca]"></div>
            <p>OR</p>
            <div className="h-[1px] w-[40%] bg-[#cacaca]"></div>
          </div>

          <div className="flex justify-between">
            {ThirdLoginData.map((item) => {
              return (
                <ThirdLoginItem
                  hoverColor={item.hoverColor}
                  href={item.href}
                  Icon={item.icon}
                  name={item.name}
                  key={item.id}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};
