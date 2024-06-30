import { useStudyState } from "../../../../../../../redux/store";

export const Tips = () => {
  const {
    currentStudyWord: { isKnow, isSimple },
  } = useStudyState();

  if (isSimple) {
    return (
      <div className="mx-auto w-[850px] self-start rounded border border-[#fbeed5] bg-[#fcf8e3] px-3 py-3 text-[#c09853]">
        单词已被标记为太简单,不再学习.
        {/* 撤销功能待实现 */}
      </div>
    );
  }

  if (isKnow) {
    return (
      <div className="mx-auto w-[850px] self-start rounded border border-[#fbeed5] bg-[#fcf8e3] px-3 py-3 text-[#c09853]">
        该词今日将不再安排学习。
      </div>
    );
  }

  return (
    <div className="mx-auto w-[850px] self-start rounded border border-[#fbeed5] bg-[#fcf8e3] px-3 py-3 text-[#c09853]">
      稍后将继续安排这个单词的学习
    </div>
  );
};
