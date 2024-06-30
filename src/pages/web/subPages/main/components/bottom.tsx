import { BottomBookCard } from "./bottomBookCard";
import { BottomClientCard } from "./bottomClientCard";
import { BottomItemCard } from "./bottomItemCard";

export const Bottom = () => {
  return (
    <div className="mx-auto my-8 max-w-[1000px]">
      <div className="flex flex-row flex-wrap gap-4">
        {BottomItemData.map((item, index) => {
          return (
            <BottomItemCard title={item.title} url={item.url} key={index} />
          );
        })}
        <BottomClientCard />
        <BottomBookCard />
      </div>
    </div>
  );
};

const BottomItemData = [
  { title: "扇贝无障碍", url: "" },
  { title: "企业社会责任", url: "" },
  { title: "青年领导力计划", url: "" },
];
