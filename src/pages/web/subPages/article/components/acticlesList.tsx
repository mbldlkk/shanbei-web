import { IoArrowUpOutline } from "react-icons/io5";

export const ArticlesList = () => {
  return;
};

export const ArticleItem = ({
  title,
  imgUrl,
  content,
  difficulty,
  sources,
  wordCount,
  comment,
}: {
  title: string;
  imgUrl: string;
  content: string;
  difficulty: string;
  sources: string;
  wordCount: string;
  comment: string;
}) => {
  return (
    <div className="bottom-5 hover:bg-slate-200">
      <h3>{title}</h3>
      <div className="flex flex-row">
        <img src={imgUrl} alt={title} />
        <div>
          <p className="overflow-hidden">{content}</p>
          <span>
            难度: {difficulty} ({sources})
          </span>
          <span>单词: {wordCount}</span>
          <span>读后感: {comment}</span>
        </div>
      </div>
    </div>
  );
};

export const FirstArticleItem = ({
  title,
  imgUrl,
  difficulty,
  sources,
  wordCount,
  comment,
}: {
  title: string;
  imgUrl: string;
  content: string;
  difficulty: string;
  sources: string;
  wordCount: string;
  comment: string;
}) => {
  return (
    <div>
      <img src={imgUrl} alt={title} />

      <div>
        <span>
          难度: {difficulty} ({sources})
        </span>
        <span>单词: {wordCount}</span>
        <span>读后感: {comment}</span>

        <h3>{title}</h3>
      </div>
    </div>
  );
};

// 除了第一块以外 6个内容块一天来发 每次加载10个内容块
// 必须按照文章的 日期增加块

export const LoadingMoreButton = () => {
  return (
    <button className="bg-green-400 px-10 py-2" onClick={() => {}}>
      加载更多
    </button>
  );
};

export const ShowDaySection = () => {
  return <div></div>;
};

// 点击文档 进入具体的文章id

export const UptoTop = () => {
  return (
    <div className="fixed bottom-5 right-5">
      <div>
        <IoArrowUpOutline />
      </div>
      <p>回到顶部</p>
    </div>
  );
};
