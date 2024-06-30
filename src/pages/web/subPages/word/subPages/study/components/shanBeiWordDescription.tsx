import { AuidoItem } from "../../../../../../../shareComponent/audio";
import { useStudyState } from "../../../../../../../redux/store";

export const ShanBeiWordDescription = () => {
  const {
    currentStudyWord: {
      name,
      explainCN,
      type,
      sentence,
      sentenceCN,
      sentenceAudio,
    },
  } = useStudyState();

  const wordNameReg = new RegExp(name, "gi");
  const splitedSentence = sentence.split(wordNameReg);

  return (
    <>
      <div className="self-stretch border-b border-b-[#f2f3f6] pb-4">
        <span>{type}.</span> <span>{explainCN}</span>
      </div>
      <div className="text-[#b0b4be]">例句</div>
      <div className="flex w-full justify-between">
        <div>
          {splitedSentence[0]} <p className="inline text-[#28bea0]">{name}</p>
          {splitedSentence[1]}
        </div>
        <AuidoItem url={sentenceAudio} />
      </div>
      <div>{sentenceCN}</div>
    </>
  );
};
