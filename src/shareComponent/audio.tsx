import { useRef, useState } from "react";
import { twMerge as tm } from "tailwind-merge";

export const AuidoItem = ({ url }: { url: string }) => {
  //需要放在函数组件中, 每个音标都共用一个, 会出问题.
  // 但是放在函数中 每次修改状态 timeid 都会重置相当于 删除计时器 无法正常生效

  // let memoAudioTimeID = useMemo(() => {
  //   let AudioTimeID: any;
  //   return AudioTimeID;
  // }, []);

  console.log(url);

  const audioTimeId = useRef<number>(0);

  // console.log(memoAudioTimeID);
  const [isActiveVolume, setIsActiveVolume] = useState<boolean>(false);

  const audio: HTMLAudioElement = new Audio("/src/assets/tofu.mp3"); //可以将url替换该地址

  return (
    <div
      onClick={() => {
        setIsActiveVolume(true);
        clearTimeout(audioTimeId.current as number);
        audio.play();
        console.log(audio.duration);
        audioTimeId.current = setTimeout(() => {
          setIsActiveVolume(false);
        }, 2500);
        // console.log(audioTimeId);
      }}
      className={tm(
        "h-[30px] w-[30px] cursor-pointer  bg-[url(./assets/volume-high-outline.svg)]",
        isActiveVolume ? "animate-volumeActive" : "animate-volumeBlur",
      )}
    ></div>
  );
};

{
  /* 方案 
        <i 
        onClick={() =>{setIsActiveVolume(true)} } 
        >
          <IoVolumeHighOutline />
          <IoVolumeLowOutline />
          <IoVolumeMediumOutline />
        </i> */
}
