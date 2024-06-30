import { AuidoItem } from "../../../../../../../shareComponent/audio";

export const TableDataItem = ({
  name,
  url,
  definition,
  type,
}: {
  name: string;
  url: string;
  definition: string;
  type: string;
}) => {
  return (
    <div className="h-[105px] w-full border-b py-[20px]">
      <div className="mb-2 flex justify-between">
        <span className="text-2xl font-semibold">{name}</span>
        <AuidoItem url={url} />
      </div>
      <div className="text-[#666666]">
        <span className="italic">{type}. </span>
        <span>{definition}</span>
      </div>
    </div>
  );
};
