import { useDispatch } from "react-redux";
import { useStudyState } from "../../../../../../../redux/store";
import { useEffect } from "react";
import { WordAudioItem } from "./wordAudioItem";
import { getNoteByWordId } from "../../../../../../../redux/action/note";
import { Section } from "./section";
import { ShanBeiWordDescription } from "./shanBeiWordDescription";
import { ColinsWordDescription } from "./colinsWordDescription";
import { GoodNotes } from "./goodNotes";
import { MyNotes } from "./myNotes";
import { CreateNote } from "./createNote";

const sectionData = [
  {
    sectionTitle: "单词解释",
    navBarButtonData: [
      { buttonTitle: "扇贝单词", sectionName: "shanbeiWord" },
      { buttonTitle: "柯林斯词典", sectionName: "colins" },
    ],
    initSection: "shanbeiWord",
    sectionSubComponents: {
      shanbeiWord: ShanBeiWordDescription,
      colins: ColinsWordDescription,
    },
  },
  {
    sectionTitle: "笔记",
    navBarButtonData: [
      { buttonTitle: "精选笔记", sectionName: "goodNotes" },
      { buttonTitle: "我的笔记", sectionName: "myNotes" },
      { buttonTitle: "创建笔记", sectionName: "createNote" },
    ],
    initSection: "goodNotes",
    sectionSubComponents: {
      goodNotes: GoodNotes,
      myNotes: MyNotes,
      createNote: CreateNote,
    },
  },
];

//单词细节模块
export const WordDetailSection = () => {
  const {
    currentStudyWord: { id, name, UKSymbol, USSymbol, USAudio, UKAudio },
  } = useStudyState();
  const dispatch = useDispatch();

  useEffect(() => {
    if (id !== "") {
      getNoteByWordId(dispatch, id);
    }
  }, [id]);

  return (
    <div className="flex flex-col items-center gap-4 py-5">
      <div className="mx-auto flex w-[850px] items-end gap-10 self-start">
        <span className="text-4xl">{name}</span>
        <WordAudioItem audioType="UK" symbol={UKSymbol} url={UKAudio} />
        <WordAudioItem audioType="US" symbol={USSymbol} url={USAudio} />
      </div>

      {sectionData.map((item, index) => {
        return (
          <Section
            sectionTitle={item.sectionTitle}
            navBarButtonData={item.navBarButtonData}
            initSection={item.initSection as never}
            sectionSubComponents={item.sectionSubComponents}
            key={index}
          />
        );
      })}
    </div>
  );
};
