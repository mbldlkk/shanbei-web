import { useTagState } from "../../../../../../../redux/store";
import { GetBookByTag } from "./GetBookByTag";
import { TagItem2 } from "./TagItem2";

export const SelectBookByTag = () => {
  const tagState = useTagState();

  return (
    <div className="flex h-[600px] w-full items-center">
      <div className="flex h-[90%] w-[170px] flex-col gap-0 overflow-y-auto overscroll-contain">
        {tagState.popular.map((i) => (
          <TagItem2 key={i.id} name={i.name} />
        ))}
        {tagState.notPopular.map((i) => (
          <TagItem2 key={i.id} name={i.name} />
        ))}
      </div>
      <div className="flex h-[90%] w-full px-[60px]">
        <GetBookByTag />
      </div>
    </div>
  );
};
