import { useWordCollectionPageContext } from "../wordCollection";
import { TableDataItem } from "./tableDataItem";

const pageMap = {
  1: "今日添加",
  2: "今日复习",
  3: "在学单词",
  4: "未学单词",
  5: "简单词",
};

const wordCollectionData = [
  {
    id: "1",
    word: "a",
    symbol: "/eɪ; ə/",
    definition: "n.一个",
    createTime: "2023-03-09",
    source: "扇贝单词",
  },
  {
    id: "2",
    word: "cat",
    symbol: "/eɪ; ə/",
    definition: "n.猫",
    createTime: "2023-03-09",
    source: "扇贝单词",
  },
];

export const Content = () => {
  const { selectIndex } = useWordCollectionPageContext();

  return (
    <div className="w-[702px]">
      <br />
      <p>
        当前处于
        <span className="text-xl font-bold">
          {" "}
          "{pageMap[selectIndex as keyof typeof pageMap]}"{" "}
        </span>
        页面 今日没有新添加的单词噢 快去添加吧
      </p>
      <br />
      <p className="text-xl font-bold">
        注: 由于 生词本 逻辑大致与 词表类似, 以及时间原因,
        故该模块为纯前端的静态模块,无后台业务逻辑!!!
      </p>
      <br />
      <table className="w-full">
        <tbody>
          {wordCollectionData.map((item) => {
            return (
              <TableDataItem
                word={item.word}
                symbol={item.symbol}
                definition={item.definition}
                createTime={item.createTime}
                source={item.source}
                key={item.id}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
