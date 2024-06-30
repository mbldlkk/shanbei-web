export const MyUploadBookSection = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h3 className="text-lg font-semibold">我上传的单词书</h3>
        <button className="rounded-xl border border-[#28bea0] px-4 py-1 text-[#28bea0]">
          上传单词书
        </button>
      </div>
      <div>
        <p className="mt-5 rounded-xl border border-red-400 bg-[#fafafa] px-8 py-5">
          你目前还没有上传单词书哦
        </p>
      </div>
    </div>
  );
};
