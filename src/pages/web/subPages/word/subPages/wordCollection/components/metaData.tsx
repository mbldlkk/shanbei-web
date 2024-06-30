export const MetaData = ({
  createTime,
  source,
}: {
  createTime: string;
  source: string;
}) => {
  return (
    <td className="w-[150px] p-[20px] text-[#999]">
      <div>{createTime}</div>
      <div>{source}</div>
    </td>
  );
};
