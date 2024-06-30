import { useState } from "react";
import { useDispatch } from "react-redux";
import { useStudyState } from "../../../../../../../redux/store";
import { IoTrashOutline } from "react-icons/io5";
import { ProgressBar } from "./progressBar";
import {
  knowWord,
  toggleSimple,
  unKnowWord,
} from "../../../../../../../redux/action/study";
import { WordAudioItem } from "./wordAudioItem";
import { ButtonItem } from "./buttonItem";
import { Sections } from "../study";
import styles from "./study.module.css";

export const KnowWord = ({ setSection }: { setSection: Function }) => {
  const [isShowTips, setIsShowTips] = useState(false);
  const dispatch = useDispatch();
  const {
    settings: { spellMode },
    currentStudyWord: {
      // id,
      name,
      explainCN,
      UKSymbol,
      USSymbol,
      USAudio,
      UKAudio,
      type,
      sentence,
    },
  } = useStudyState();

  const wordNameReg = new RegExp(name, "gi");
  const splitedSentence = sentence.split(wordNameReg);

  return (
    <div className="flex min-h-[600px] flex-col items-center justify-between py-14">
      <div className="relative flex flex-col items-center gap-6 py-2">
        <button
          // 触发简单词
          className="absolute right-0 top-0"
          onClick={() => {
            // setIsShowWordDetail(true);
            // 简单词不需要判断学习模式 直接跳转 单词详情

            setSection(Sections.WordDetail);
            toggleSimple(dispatch);
          }}
        >
          <i className="text-4xl">
            <IoTrashOutline />
          </i>
        </button>
        <div className="font mb-6 text-6xl">{name}</div>
        <div className="flex gap-8">
          <WordAudioItem audioType="UK" symbol={UKSymbol} url={UKAudio} />
          <WordAudioItem audioType="US" symbol={USSymbol} url={USAudio} />
        </div>

        {isShowTips ? (
          <>
            <div>
              {splitedSentence[0]}
              <p className="inline text-3xl text-[#28bea0]">{name}</p>
              {splitedSentence[1]}
            </div>
          </>
        ) : null}

        <div className="flex w-[700px] items-center justify-evenly">
          {isShowTips ? (
            <>
              <ButtonItem
                hoverColorClassName={styles.kownButton}
                a={1}
                b="想起来了"
                onClick={() => {
                  // needLearWord = needLearWord - 1;
                  // kownWords = kownWords + 1;
                  unKnowWord(dispatch, {
                    name,
                    USAudio,
                    type,
                    explainCN,
                    isKnow: false,
                  });
                  spellMode
                    ? setSection(Sections.spellWord)
                    : setSection(Sections.WordDetail);
                }}
              />
              <ButtonItem
                hoverColorClassName={styles.unKownButton}
                a={2}
                b="没想起来"
                onClick={() => {
                  unKnowWord(dispatch, {
                    name,
                    USAudio,
                    type,
                    explainCN,
                    isKnow: false,
                  });
                  spellMode
                    ? setSection(Sections.spellWord)
                    : setSection(Sections.WordDetail);
                }}
              />
            </>
          ) : (
            <>
              <ButtonItem
                hoverColorClassName={styles.kownButton}
                a={1}
                b="认识"
                onClick={() => {
                  knowWord(dispatch, {
                    name,
                    USAudio,
                    type,
                    explainCN,
                    isKnow: true,
                  });
                  spellMode
                    ? setSection(Sections.spellWord)
                    : setSection(Sections.WordDetail);
                }}
              />
              <ButtonItem
                hoverColorClassName={styles.unKownButton}
                a={2}
                b="不认识"
                onClick={() => {
                  setIsShowTips(true);
                }}
              />
            </>
          )}
        </div>
      </div>
      <ProgressBar />
    </div>
  );
};
