export const WordInfo = ({
  word,
  symbol,
  definition,
}: {
  word: string;
  symbol: string;
  definition: string;
}) => {
  return (
    <td className="w-[450px] p-[20px]">
      <div>
        <span className="text-2xl font-semibold">{word}</span>
        <span className="text-[#b0b4be]">{symbol}</span>
      </div>
      <div>{definition}</div>
    </td>
  );
};
