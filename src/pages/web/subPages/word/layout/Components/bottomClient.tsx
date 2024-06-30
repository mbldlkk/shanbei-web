import { useState } from "react";
import { IoLogoApple, IoLogoAndroid } from "react-icons/io5";
import { twMerge as tm } from "tailwind-merge";

export const BottomClient = () => {
  return (
    <>
      <Left />
      <Right />
    </>
  );
};

const Left = () => {
  return (
    <div className="">
      <h3 className="inline-block py-1 text-3xl font-bold tracking-wide">
        扇贝单词
      </h3>
      <span className="text-xl font-semibold tracking-wide">(英语版)</span>
      <h3 className="py-1 text-2xl tracking-wider text-[#cacac7]">
        坚持学习,未来可期
      </h3>
    </div>
  );
};

const Right = () => {
  return (
    <div className="flex sm:flex-col">
      <div className="mr-12 flex gap-8 sm:mr-0 sm:flex-col sm:items-center">
        {qrItemData.map((item) => {
          return (
            <QrCardItem
              content={item.content}
              qrImgUrl={item.qrImgUrl}
              key={item.id}
            />
          );
        })}
      </div>
      <div className="flex flex-col items-center justify-start gap-5">
        {ClientCardData.map((item, index) => {
          return (
            <ClientCardItem
              Icon={item.icon}
              content={item.content}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

const qrItemData = [
  { id: 1, qrImgUrl: "", content: "微信扫码关注扇贝单词公众号" },
  { id: 2, qrImgUrl: "", content: "微信扫码快速体验扇贝单词极速版小程序" },
];

const QrCardItem = ({
  content,
  qrImgUrl,
}: {
  content: string;
  qrImgUrl: string;
}) => {
  return (
    <div className="w-[115px]">
      <img
        src={qrImgUrl}
        alt=""
        className="mb-3 h-[115px] w-full rounded-xl bg-white"
      />
      <p>{content}</p>
    </div>
  );
};

const ClientCardData = [
  { icon: IoLogoApple, content: "iOS 下载" },
  { icon: IoLogoAndroid, content: "Android 下载" },
];

const ClientCardItem = ({ Icon, content }: { Icon: any; content: string }) => {
  const [isShowPop, setIsShowPop] = useState(false);

  const handleClick = () => {
    setIsShowPop(true);
  };
  const handleBlur = () => {
    setIsShowPop(false);
  };

  return (
    <button
      onClick={handleClick}
      onBlur={handleBlur}
      className="relative flex h-[50px] w-[200px] flex-row items-center justify-center gap-4 rounded-3xl border-2 border-white"
    >
      <div className="inline-block text-3xl">
        <Icon />
      </div>
      <span>{content}</span>
      <ClientPopOver isShowPop={isShowPop} />
    </button>
  );
};

const ClientPopOver = ({ isShowPop }: { isShowPop: boolean }) => {
  return (
    <div
      className={tm(
        "absolute left-[-30%] top-[-340px] h-[320px] w-[306px] rounded-2xl border-2 bg-white shadow-xl",
        isShowPop ? "block" : "hidden",
      )}
    >
      <div className="flex h-[90%] flex-col items-center justify-center gap-3 text-black">
        <img src="" alt="" className="h-[160px] w-[160px]" />
        <p className="w-[200px]">
          扫描二维码 <br />
          下载扇贝单词 (英语版) APP
        </p>
      </div>
      <div className="relative h-[10%] rounded-3xl bg-white after:absolute after:left-[50%] after:top-[32px] after:h-[34px] after:w-[17px] after:border-x-[8px] after:border-y-[16px] after:border-b-transparent after:border-l-transparent after:border-r-transparent after:border-t-white after:bg-transparent"></div>
    </div>
  );
};
