import { NavLink } from "react-router-dom";

const expansionData = [
  {
    id: 1,
    title: "柯林斯词典",
    content:
      "此版本专门组织英语专家编写了适合中国学习者特点的词语用法辨析专栏。此外，双语版还在原英文版基础上增加了10%的义项和30%的例证，扩充了原英文版的规模。整部词典内容更为丰富，也更为贴合中国学习者的需求。",
    imgUrl: "",
    navUrl: "colins",
  },
  {
    id: 2,
    title: "派生联想",
    content:
      "通过构词法和语义联想，把2500多个你所熟悉的常用词汇扩展成一棵棵词汇树，帮你记忆13000多个高级词汇，减轻你的记忆负担。",
    imgUrl: "",
    navUrl: "affixes",
  },
  {
    id: 3,
    title: "智慧词根",
    content:
      "收录2000条精选词根, 涵盖10000则词条。每个词根包含中英文双语释义。对于已经收录了词根信息的单词，在学习时不仅会显示相应词根，还会显示包含词根的其他单词。如果你之前学过同样词根的单词，系统就会特别标注进行提示；你也可以选择添加未学过的同根词。",
    imgUrl: "",
    navUrl: "roots",
  },
];

export const Expansion = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-between gap-10 px-10 pb-3 pt-12">
        {expansionData.map((item) => {
          return (
            <Item
              imgUrl={item.imgUrl}
              title={item.title}
              content={item.content}
              navUrl={item.navUrl}
              key={item.id}
            />
          );
        })}
      </div>
    </>
  );
};

const Item = ({
  imgUrl,
  title,
  content,
  navUrl,
}: {
  imgUrl: string;
  title: string;
  content: string;
  navUrl: string;
}) => {
  return (
    <div className="flex gap-2">
      <img
        src={imgUrl}
        alt={title}
        className="h-[120px] w-[120px] bg-slate-300"
      />
      <div className="w-[410px]">
        <NavLink to={navUrl} className="text-lg text-[#209e85]">
          {title}
        </NavLink>
        <p>{content}</p>
        <NavLink to={navUrl} className="text-[#209e85]">
          查看详情
        </NavLink>
      </div>
    </div>
  );
};
