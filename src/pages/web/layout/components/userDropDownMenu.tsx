import { useDispatch } from "react-redux";
import { UserDropDownMenuSection } from "./userDropDownMenuSection";
import { signOut } from "../../../../redux/action/auth";
import { studyAction } from "../../../../redux/slice/study";

const UserDropDownMenuData = {
  a: [
    { id: 1, content: "我的空间", url: "user/zone" },
    { id: 2, content: "我的打卡", url: "user/checkin" },
    { id: 3, content: "账户设置", url: "user/account/settings" },
  ],
  b: [
    { id: 4, content: "短信", url: "user/message" },
    { id: 5, content: "贝壳", url: "user/conins" },
  ],
  c: [{ id: 6, content: "听力设置", url: "user/listen/setting" }],
};

export const UserDropDownMenu = () => {
  const dispatch = useDispatch();

  return (
    <div className="shadow-lgsa invisible absolute left-[-40px] top-12 block w-40 rounded-lg border-[2px] bg-white text-black transition-all duration-700 group-hover:visible">
      <UserDropDownMenuSection sectionData={UserDropDownMenuData.a} />
      <UserDropDownMenuSection sectionData={UserDropDownMenuData.b} />
      <UserDropDownMenuSection sectionData={UserDropDownMenuData.c}>
        <button
          onClick={() => {
            signOut(dispatch);
            dispatch(studyAction.removeLocalData());
            window.location.reload();
          }}
          className="inline-block w-full px-2 py-1 text-start hover:bg-[#209e85] hover:text-white"
        >
          退出
        </button>
      </UserDropDownMenuSection>
    </div>
  );
};
