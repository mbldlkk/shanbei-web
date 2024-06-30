import { AuidoItem } from "../../../../../../../shareComponent/audio";
import { MetaData } from "./metaData";
import { WordInfo } from "./wordInfo";

export const TableDataItem = ({
  word,
  symbol,
  definition,
  createTime,
  source,
}: {
  word: string;
  symbol: string;
  definition: string;
  createTime: string;
  source: string;
}) => {
  return (
    <tr className="odd:bg-[#f5f5f5]">
      <td className="p-[20px] pl-[40px]">
        <AuidoItem url={"demo"} />
      </td>
      <WordInfo word={word} symbol={symbol} definition={definition} />
      <MetaData createTime={createTime} source={source} />
    </tr>
  );
};
