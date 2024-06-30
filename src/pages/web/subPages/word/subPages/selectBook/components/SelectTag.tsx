import { useTagState } from "../../../../../../../redux/store";
import { TagsSection } from "./TagsSection";

export const SelectTag = () => {
  const tagState = useTagState();

  return (
    <div className="flex h-[600px] flex-col items-start justify-evenly px-40">
      <h3 className="text-2xl font-bold">Hi ~请选择你的学习类别</h3>
      <TagsSection isPopular tagItems={tagState.popular as any[]} isPrimary />
      <TagsSection
        isPopular={false}
        tagItems={tagState.notPopular as any[]}
        isPrimary={false}
      />
    </div>
  );
};
