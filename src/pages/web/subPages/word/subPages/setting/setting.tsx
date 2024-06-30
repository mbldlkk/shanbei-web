import { useDispatch } from "react-redux";
import { useStudyState } from "../../../../../../redux/store";
import {
  WORDSoundMode,
  studyAction,
} from "../../../../../../redux/slice/study";

//单词发音模式

export const WordSetting = () => {
  const {
    settings: { spellMode, wordSoundMode },
  } = useStudyState();
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex w-full flex-col gap-10 px-8 pt-5">
        <div className="grid w-[35%] grid-cols-2">
          <span className="">学习顺序:</span>
          <div>
            <label>
              <input
                type="radio"
                name="studyOrder"
                value="reviewFirst"
                defaultChecked
                className="mr-2"
              />
              复习优先
            </label>
            <label className="ml-5">
              <input
                type="radio"
                name="studyOrder"
                value="mixed"
                className="mr-2"
              />
              混合学习
            </label>
          </div>
        </div>
        <div className="grid w-[35%] grid-cols-2">
          <span>拼写模式:</span>
          <div>
            <input
              type="checkbox"
              name=""
              checked={spellMode}
              onChange={() => dispatch(studyAction.switchSpellMode())}
            />
          </div>
        </div>
        <div className="grid w-[35%] grid-cols-2 items-center">
          <span>单词发音模式:</span>
          <div>
            <select
              name=""
              id=""
              className="w-[200px] border-[2px] border-gray-400 p-2"
              value={wordSoundMode}
              onChange={(e) =>
                dispatch(studyAction.toggleWordSoundMode(e.target.value))
              }
            >
              <option value={WORDSoundMode.Close}>关闭</option>
              <option value={WORDSoundMode.US}>美音</option>
              <option value={WORDSoundMode.UK}>英音</option>
            </select>
          </div>
        </div>
        <div className="grid w-[35%] grid-cols-2">
          <span>柯林斯中文解释</span>
          <div>
            <input type="checkbox" name="" id="" disabled={true} />
          </div>
        </div>
        <div className="grid w-[35%] grid-cols-2">
          <span>柯林斯默认显示</span>
          <div>
            <input type="checkbox" name="" id="" disabled={true} />
          </div>
        </div>
      </div>
    </>
  );
};
