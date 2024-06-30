import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { SwiperItem } from "./swiperItem";

const swiperItemProfile = [
  { id: 0, title: "坚持打卡", content: "享受学习的快乐", imgurl: "./" },
  {
    id: 1,
    title: "学习社区",
    content: "加入小组,与小伙伴们一起坚持",
    imgurl: "./",
  },
  { id: 2, title: "扇贝课程", content: "更少的时间,更好的效果", imgurl: "./" },
];

export const SwiperContainer = () => {
  const [currentIndex, setCurrenIndex] = useState(0);

  useEffect(() => {}, []);

  const swiper = useRef<number>(0);

  clearTimeout(swiper.current);

  swiper.current = setTimeout(() => {
    setCurrenIndex((currentIndex) => {
      if (currentIndex < 2) {
        return currentIndex + 1;
      }
      return 0;
    });
  }, 5000);

  return (
    <div //轮播图 模块容器 主要是为了子元素居中
      className="flex flex-col items-start justify-center gap-10 overflow-hidden bg-[#f6f6f6] pt-10"
    >
      <div
        //轮播图条目容器
        className={twMerge("flex flex-row transition-transform duration-1000")}
        style={{ transform: `translateX(${currentIndex * -450}px)` }}
      >
        {swiperItemProfile.map((item) => {
          return (
            <SwiperItem //轮播图条目
              title={item.title}
              content={item.content}
              imgurl={item.imgurl}
              key={item.id}
            />
          );
        })}
      </div>

      <div //按钮容器
        className="flex flex-row gap-2 self-center"
      >
        {swiperItemProfile.map((item, index) => {
          return (
            <button // 按钮条目
              className={twMerge(
                "h-1 w-1 rounded-full",
                item.id === currentIndex ? "bg-green-400" : "bg-[#cacaca]",
              )}
              onClick={() => {
                setCurrenIndex(item.id);
              }}
              key={index}
            ></button>
          );
        })}
      </div>
    </div>
  );
};
