import { twMerge } from "tailwind-merge";
import { AuidoItem } from "../../../../../../../shareComponent/audio";

export const SummaryWordItem = ({
  name,
  explainCN,
  type,
  USAudio,
  isKnow,
}: {
  name: string;
  explainCN: string;
  type: string;
  USAudio: string;
  isKnow: boolean;
}) => {
  return (
    <div
      className={twMerge(
        "flex w-[100%] items-center gap-4 border border-[#dddfdc] px-2 py-2",
        isKnow ? "bg-[#dff0d8]" : "bg-[#f2dede]",
      )}
    >
      <i className="text-3xl text-red-300">
        <AuidoItem url={USAudio} />
      </i>

      <div className="w-[45%] text-2xl">{name}</div>
      <div className="w-[45%]">
        {type}.{explainCN}
      </div>
    </div>
  );
};
