import { useDispatch } from "react-redux";
import {
  AppDispatch,
  useCheckInState,
  useStudyPlanState,
  useStudyState,
} from "../../../../../../../redux/store";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { STATUS } from "../../../../../../../redux/slice/tag";
import { studyAction } from "../../../../../../../redux/slice/study";
import { updateAfterStudy } from "../../../../../../../redux/action/study";
import {
  fetchCheckIn,
  postCheckIn,
} from "../../../../../../../redux/slice/checkin";
import { OtherFunctionItem } from "./otherFunctionItem";

export const CheckIn = () => {
  // 条件渲染 今日是否打卡
  // 首先查询 是否打卡, 打卡按钮是触发打卡操作的.

  const {
    studyPlan: { todayNeedStudyNewWordCount, todayNeedReviewWordCount },
  } = useStudyPlanState();
  const {
    status,
    currentStudyMode,
    finishWord: { todayNewWord, todayReviewWord },
  } = useStudyState();

  const { isCheckIn } = useCheckInState();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCheckIn());
  }, []);

  useEffect(() => {
    dispatch(studyAction.toggleLoading());

    if (currentStudyMode === 0) {
      updateAfterStudy(dispatch, { todayNewWord });
    } else {
      updateAfterStudy(dispatch, { todayReviewWord });
    }
  }, []);

  if (status === STATUS.pending) {
    return <div className="self-center">学习数据上传中</div>;
  }

  return (
    <div className="pt1-8 flex min-h-[580px] w-full flex-col items-center justify-between gap-10 pb-10">
      <div className="flex h-[220px] w-full items-center justify-center bg-gradient-to-b from-[#ffefc4] to-[#ffffff]">
        <p className="mb-[210p1x] bg-gradient-to-t from-[#faa11b] to-[#ffbb0d] bg-clip-text pt-[100px1] text-5xl font-bold tracking-widest text-transparent">
          {isCheckIn ? "干的漂亮" : "您已经完成今日任务 请打卡"}
        </p>
      </div>
      {isCheckIn ? (
        <p className="bg-gradient-to-t from-[#fca62a] to-[#ffc42e] bg-clip-text text-4xl font-bold tracking-widest text-transparent">
          打卡成功
        </p>
      ) : (
        <>
          <button
            className="rounded-full bg-[#38c6a2] px-24 py-2 text-white"
            onClick={() => {
              // console.log(postCheckIn);
              dispatch(postCheckIn());
            }}
          >
            打卡
          </button>
        </>
      )}

      <div className="flex h-[245px] w-[80%] items-center gap-8 rounded-xl border border-[#efefef] px-5 py-2 shadow-lg">
        <div className="flex h-48 w-[50%] flex-col gap-6">
          <div>
            <div className="mb-2 text-lg font-[500]">非常棒</div>
            <p className="mb-4">天下无难事,唯坚持二字,为成功之要诀</p>
          </div>
          <div>
            <div className="flex gap-2">
              {todayNeedStudyNewWordCount > 0 ? (
                <>
                  <span className="rounded-full bg-[#faa016] px-3 text-white">
                    新词
                  </span>
                  <span>
                    {todayNeedStudyNewWordCount}/{todayNeedStudyNewWordCount}
                  </span>
                </>
              ) : (
                ""
              )}
              {todayNeedReviewWordCount > 0 ? (
                <>
                  <span className="rounded-full bg-[#faa016] px-3 text-white">
                    复习单词
                  </span>
                  <span>
                    {todayNeedReviewWordCount}/{todayNeedReviewWordCount}
                  </span>
                </>
              ) : (
                ""
              )}
            </div>
            <div className="mt-4">坚持学习了{}分钟 </div>
          </div>
        </div>
        <div className="h-48 w-[2px] bg-[#dcdee7]"></div>
        <div className="h-48 w-[50%]">
          <div className="mb-5 text-lg font-[500]">接下来你可以</div>

          <div className="flex gap-3">
            {isCheckIn ? (
              <>
                <NavLink to={"/web/main"}>
                  <OtherFunctionItem title="回到首页" imgUrl={"demo"} />
                </NavLink>
                <NavLink to={"/web/word/collection"}>
                  <OtherFunctionItem title="生词本" imgUrl={"demo"} />
                </NavLink>
                <OtherFunctionItem title="单词测试" imgUrl={"demo"} />
                <OtherFunctionItem title="再来一组" imgUrl={"demo"} />
              </>
            ) : (
              <>
                <OtherFunctionItem title="单词测试" imgUrl={"demo"} />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
