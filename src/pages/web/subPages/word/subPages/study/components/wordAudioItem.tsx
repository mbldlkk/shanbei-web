import { AuidoItem } from "../../../../../../../shareComponent/audio";

export const WordAudioItem = ({
  audioType,
  symbol,
  url,
}: {
  audioType: "US" | "UK";
  symbol: string;
  url: string;
}) => {
  return (
    <div className="flex items-center gap-4">
      <span>{audioType}</span>
      <span className="text-[#999999]">/{symbol}/</span>
      <AuidoItem url={url} />
    </div>
  );
};
