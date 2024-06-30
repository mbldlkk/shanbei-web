import { useRef, useState } from "react";

export const AboutThisProject = () => {
  const [isShowDialog] = useState(false);
  const dialogEl = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        className="rounded border border-white px-2 hover:bg-white hover:text-[#209e85]"
        onClick={() => {
          (dialogEl as any).current.showModal();
        }}
      >
        关于本项目
      </button>
      <dialog open={isShowDialog} className="relative" ref={dialogEl}>
        <div
          className="h1-[600px] relative flex w-[1000px] flex-col items-start justify-start gap-4 rounded p-10"
        >
          <div className="self-center text-2xl font-bold">
            关于本项目开发时使用的技术
          </div>
          <h3 className="self-start text-2xl font-bold">前端技术栈</h3>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <li>前端ui框架 react</li>
            <li>开发时类型约束 ts</li>
            <li>原子类样式库 tailwindcss </li>
            <li>全局状态管理库 redux </li>
            <li>页面路由库 react-router </li>
            <li>api请求库 axios</li>
            <li>开源图标库 react-icons</li>
            ...
          </div>
          <h3 className="text-2xl font-bold">后端技术栈</h3>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <li>后端框架 - nestjs框架(nodejs)</li>
            <li>orm框架 - prisma</li>
            <li>数据库 - postgreSql</li>
            <li>用户身份验证(token) - jwt</li>
            ...
          </div>
          <h3 className="text-2xl font-bold">实现功能</h3>
          以扇贝官网单词页面的逻辑为主, 实现大致的功能
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <li>登录注册</li>
            <li>查找单词</li>
            <li>单词页面</li>
            <li>学习单词</li>
            <li>单词笔记</li>
            <li>学习记录</li>
            ...
          </div>
          <h3 className="self-center text-2xl font-bold">作者 - ljj</h3>
          <button
            className="absolute right-8 top-8 rounded border-[1px] border-black px-3 py-1 hover:bg-[#209e85] hover:text-white"
            onClick={() => {
              (dialogEl as any).current.close();
            }}
          >
            X{/* 关闭 */}
          </button>
        </div>
      </dialog>
    </>
  );
};
