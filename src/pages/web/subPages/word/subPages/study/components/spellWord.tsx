import { twMerge } from "tailwind-merge";
import { useStudyState } from "../../../../../../../redux/store";
import { useRef, useState } from "react";
import { AuidoItem } from "../../../../../../../shareComponent/audio";
import { Sections } from "../study";

export const SpellWord = ({ setSection }: { setSection: Function }) => {
  const {
    currentStudyWord: { type, explainCN, sentence, sentenceCN, name, USAudio },
  } = useStudyState();

  const inputRef = useRef<HTMLInputElement>(null);
  console.log("刚加载的时候,输入框内容是多少", inputRef.current);

  const [isShowError, setIsShowError] = useState(false);
  const [isShowTips, setIsShowTips] = useState(false);
  const [currentShowTipsTimes, setCurrentShowTipsTimes] = useState(0);

  const [isSpelled, setIsSpelled] = useState(false);

  const wordNameReg = new RegExp(name, "gi");

  //直接拆分需要考虑字母大小写, 还是得考虑用正则表达式
  const splitedSentence = sentence.split(wordNameReg);

  console.log("重新加载时 拼出来了吗?", isSpelled);

  return (
    <div className="flex w-[60%] flex-col gap-3 pt-10">
      <div className="flex items-center justify-between gap-3">
        <p className="w-20">单词解释:</p>
        <div className="boder-[#e4e4e4] flex w-[85%] items-center gap-5 rounded border bg-[#f5f5f5] px-4 py-6">
          <span className="h-8 w-8 rounded bg-[#888888] px-1 py-1 text-center text-white">
            {type}.
          </span>
          <div>{explainCN}</div>
        </div>
      </div>
      <div className="flex w-full items-center justify-between gap-3">
        <p className="w-20">例句:</p>
        <div className="boder-[#e4e4e4] w-[85%] rounded border bg-[#f5f5f5] px-4 py-6">
          <p className="inline w-full text-2xl">{splitedSentence[0]}</p>
          <input
            ref={inputRef}
            type="text"
            maxLength={name.length}
            size={name.length}
            className={twMerge(
              "inline-block max-w-[10rem] border-b-2 border-black bg-transparent text-2xl outline-none",
              true ? "text-[#66c8b5]" : "text-[#ff0107]",
            )}
            onChange={(e) => {
              const a = wordNameReg.test(e.target.value);
              console.log(a);
              setIsShowError(false);
              setIsShowTips(false);
            }}
            onKeyDown={(e) => {
              // console.log(e.code);

              if (e.code === "Space") {
                setIsSpelled((inputRef.current as any).value === name);
                console.log("执行什么,比如不增加空格");
                e.preventDefault();
                console.log(inputRef.current?.value, name);

                if ((inputRef.current as any).value === name) {
                  setIsShowError(false);
                  //跳转到单词详情
                  setSection(Sections.WordDetail);
                } else {
                  setIsShowError(true);
                }
              }
              if (e.code === "Numpad0") {
                setIsSpelled((inputRef.current as any).value === name);
                e.preventDefault();
                setIsShowTips(true);
                setCurrentShowTipsTimes(currentShowTipsTimes + 1);
                console.log("拼出来了吗?", isSpelled);
              }
            }}
          />
          <p className="inline w-full text-2xl">{splitedSentence[1]}</p>

          <p>{sentenceCN}</p>
        </div>
      </div>

      <p className="boder-[#e4e4e4] w1-full w-[85%] self-end rounded border bg-[#f5f5f5] px-4 py-6">
        按 空格键 提交拼写结果或跳至下一个输入框, 按 数字键0 查看提示信息
      </p>

      {isShowError && (
        <p className="w-[85%] self-end rounded border border-[#c7e6ee] bg-[#ddedf6] px-4 py-2 text-[#5a97b4]">
          答案不正确, 请再次尝试.
        </p>
      )}

      {isShowTips && (
        <div className="w-[85%] self-end">
          {currentShowTipsTimes === 0 ? (
            ""
          ) : currentShowTipsTimes === 1 ? (
            <AuidoItem url={USAudio} /> //单词发音
          ) : currentShowTipsTimes === 2 ? (
            <p>单词的部分字母是 {}p__nt_ng</p>
          ) : (
            //
            <>
              <p>
                正确答案: <span className="text-[#66c8b5]">{name}</span>
              </p>
              <p>
                你的答案:{" "}
                <span
                  className={twMerge(
                    isSpelled ? "text-[#66c8b5]" : "text-[#ff3922]",
                  )}
                >
                  {inputRef.current?.value}
                </span>
              </p>
            </>
          )}
        </div>
      )}
    </div>
  );
};
