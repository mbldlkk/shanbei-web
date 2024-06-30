import { LoginOrRegister } from "./components/loginOrRegister";
import { SwiperContainer } from "./components/swiperContainer";

export const Account = () => {
  return (
    <div className="grid min-h-[570px] w-[900px] grid-cols-2 rounded-xl shadow-xl">
      <SwiperContainer />
      <LoginOrRegister />
    </div>
  );
};
