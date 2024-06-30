import { useState } from "react";
import { PaginationItem, PaginationItem2 } from "./paginationItem";

export const Pagination = ({ page }: { page: number }) => {
  const [currentIndex, setCurrentIndex] = useState(1);

  if (page < 1) {
    return "";
  }

  const currentIndexSubThree = currentIndex - 3;
  const currentIndexSubTwo = currentIndex - 2;
  const currentIndexSubOne = currentIndex - 1;
  const currentIndexAddOne = currentIndex + 1;
  const currentIndexAddTwo = currentIndex + 2;
  const currentIndexAddThree = currentIndex + 3;

  return (
    <div className="flex gap-2 self-end">
      <button
        className="border border-[#cccccc] px-2 hover:bg-[#28bea0] hover:text-white disabled:cursor-not-allowed disabled:bg-white disabled:text-[#cccccc]"
        onClick={() => {
          setCurrentIndex(currentIndex - 1);
        }}
        disabled={currentIndex === 1 ? true : false}
      >
        上一页
      </button>
      {currentIndex === 1 ? (
        ""
      ) : (
        <PaginationItem
          index={1}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      )}
      {currentIndexSubThree > 1 ? <PaginationItem2 /> : ""}
      {currentIndexSubTwo > 1 ? (
        <PaginationItem
          index={currentIndexSubTwo}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      ) : (
        ""
      )}
      {currentIndexSubOne > 1 ? (
        <PaginationItem
          index={currentIndexSubOne}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      ) : (
        ""
      )}
      <PaginationItem
        index={currentIndex}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
      {currentIndexAddOne < page ? (
        <PaginationItem
          index={currentIndexAddOne}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      ) : (
        ""
      )}
      {currentIndexAddTwo < page ? (
        <PaginationItem
          index={currentIndexAddTwo}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      ) : (
        ""
      )}
      {currentIndexAddThree < page ? <PaginationItem2 /> : ""}
      {currentIndex === page ? (
        ""
      ) : (
        <PaginationItem
          index={page}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      )}

      <button
        className="border border-[#cccccc] px-2 hover:bg-[#28bea0] hover:text-white disabled:cursor-not-allowed disabled:bg-white disabled:text-[#cccccc]"
        onClick={() => {
          setCurrentIndex(currentIndex + 1);
        }}
        disabled={currentIndex === page ? true : false}
      >
        下一页
      </button>
    </div>
  );
};
