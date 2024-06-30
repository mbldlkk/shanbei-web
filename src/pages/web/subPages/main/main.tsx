import { FamousQuotes } from "../../../../shareComponent/famousQuotes";
import { useAuthState } from "../../../../redux/store";
import { Bottom } from "./components/bottom";
import { Footer } from "./components/footer";
import { SectionItem } from "./components/sectionItem";

export const Main = () => {
  const { accessToken } = useAuthState();

  if (accessToken === "") {
    return (
      <div className="flex h-[90vh] w-full flex-col items-center justify-center">
        请登录后再尝试
      </div>
    );
  }

  return (
    <div className="h-[100vh] w-[100%] bg-[#eeeeee] pt-10">
      <div className="mx-auto mb-10 flex max-w-[1200px] flex-row flex-wrap justify-center gap-6">
        {SectionItemData.map((item, index) => {
          return <SectionItem title={item.title} url={item.url} key={index} />;
        })}
      </div>
      <FamousQuotes tmStyle="shadow-md" />
      <Bottom />
      <Footer />
    </div>
  );
};

const SectionItemData = [
  { title: "单词", url: "/web/word" },
  { title: "精听", url: "/web/listen" },
  { title: "短文", url: "/web/article" },
];
