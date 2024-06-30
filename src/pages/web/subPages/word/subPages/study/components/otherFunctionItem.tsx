export const OtherFunctionItem = ({
  title,
  imgUrl,
}: {
  title: string;
  imgUrl: string;
}) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <img
        src={imgUrl}
        alt={title}
        className="h-20 w-20 rounded-full border border-red-400"
      />
      <p>{title}</p>
    </div>
  );
};
