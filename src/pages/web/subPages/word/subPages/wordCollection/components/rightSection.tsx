import { NavLink } from "react-router-dom";

//每日复习单词量
const wordReviewPerDay = [
  10, 15, 20, 30, 40, 50, 60, 70, 80, 90, 100, 125, 150, 175, 200,
];

export const RightSection = () => {
  return (
    <div className="flex h-[510px] w-[250px] flex-col justify-between pt-4">
      <div>
        <p>生词本每日复习量设置</p>
        <select
          name=""
          id=""
          className="mt-4 w-full border border-black px-1 py-2"
        >
          {wordReviewPerDay.map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="w-full bg-[#f5f5f5] px-4 py-4">
        <div className="flex flex-row justify-between gap-2">
          {[
            { title: "今日添加", count: 0 },
            { title: "今日复习", count: 6 },
            { title: "待学习", count: 6 },
          ].map((item, index) => {
            return (
              <div className="h-20" key={index}>
                <p className="mb-1 text-[#b1afc9]">{item.title}</p>
                <p className="text-2xl font-semibold">{item.count}</p>
              </div>
            );
          })}
        </div>
        <NavLink to="/web/word/study?type=collection">
          <button className="w-full rounded border border-black bg-[#28bea0] py-3 text-white">
            开始学习
          </button>
        </NavLink>
      </div>

      <button className="w-full border border-[#28bea0] py-2 text-[#28bea0]">
        批量上传
      </button>
    </div>
  );
};
