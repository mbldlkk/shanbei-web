import { TagItem } from "./TagItem";

export const TagsSection = ({
  isPopular,
  tagItems,
  isPrimary,
}: {
  isPopular: boolean;
  tagItems: any[];
  isPrimary: boolean;
}) => {
  return (
    <div>
      <h3 className="mb-10 text-2xl font-bold">
        {isPopular ? "热门" : "其他"}
      </h3>
      <div className="flex flex-row flex-wrap gap-5">
        {tagItems.map((item: any) => {
          return (
            <TagItem content={item.name} key={item.id} isPrimary={isPrimary} />
          );
        })}
      </div>
    </div>
  );
};
