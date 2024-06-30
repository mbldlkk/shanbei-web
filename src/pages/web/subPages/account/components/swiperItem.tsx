export const SwiperItem = ({
  title,
  content,
  imgurl,
}: {
  title: string;
  content: string;
  imgurl: string;
}) => {
  return (
    <div className="w-[450px] text-center">
      <img
        src={imgurl}
        alt={title}
        className="inline-block h-[250px] w-[250px] bg-green-200"
      />
      <h3 className="text-2xl">{title}</h3>
      <p>{content}</p>
    </div>
  );
};
