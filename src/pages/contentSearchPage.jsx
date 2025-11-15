import React, { useState, useMemo, useEffect, useRef } from "react";
import ContentTopBar from "../components/contents/contentTopBar";


// 빈 응답일 때 보여줄 기본 데이터
const SAMPLE = {
  id: 1,
  title: "서사의 위기",
  category: "대분류 / 소분류",
  thumb:
    "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=600&auto=format&fit=crop",
};


const API_RESULTS = Array.from({ length: 2 }, (_, i) => ({
  ...SAMPLE,
  id: i + 1,
  title: `${SAMPLE.title} ${i + 1}`,
}));



export default function ContentSearchPage({
  results: initialResults,
  onRegister,
  onSelectItem,
}) {

  const [query, setQuery] = useState("");
  const results = initialResults ?? API_RESULTS;
  const [searchDelete, setSearchDelete] = useState(false);

  return (

    <div className="h-screen overflow-y-auto">

      <div className="sticky top-0 z-20 bg-white">
        <ContentTopBar title="콘텐츠 검색" className=""/>
      </div>

      {/* 검색창 */}
      <div className="flex flex-col items-center justify-center pb-[1.5rem] pl-[1.5rem] pr-[1.5rem]">
        <div className = "relative w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 18 18"
            fill="none"
            className="w-[1rem] h-[1rem] pointer-events-none absolute left-[1rem] top-1/2 -translate-y-1/2"
            aria-hidden="true"
          >
            <path d="M6.5 13C4.68333 13 3.146 12.3707 1.888 11.112C0.63 9.85333 0.000667196 8.316 5.29101e-07 6.5C-0.000666138 4.684 0.628667 3.14667 1.888 1.888C3.14733 0.629333 4.68467 0 6.5 0C8.31533 0 9.853 0.629333 11.113 1.888C12.373 3.14667 13.002 4.684 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L17.3 15.9C17.4833 16.0833 17.575 16.3167 17.575 16.6C17.575 16.8833 17.4833 17.1167 17.3 17.3C17.1167 17.4833 16.8833 17.575 16.6 17.575C16.3167 17.575 16.0833 17.4833 15.9 17.3L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13ZM6.5 11C7.75 11 8.81267 10.5627 9.688 9.688C10.5633 8.81333 11.0007 7.75067 11 6.5C10.9993 5.24933 10.562 4.187 9.688 3.313C8.814 2.439 7.75133 2.00133 6.5 2C5.24867 1.99867 4.18633 2.43633 3.313 3.313C2.43967 4.18967 2.002 5.252 2 6.5C1.998 7.748 2.43567 8.81067 3.313 9.688C4.19033 10.5653 5.25267 11.0027 6.5 11Z" fill="#B5BBC1"/>
            <path d="M6.5 13C4.68333 13 3.146 12.3707 1.888 11.112C0.63 9.85333 0.000667196 8.316 5.29101e-07 6.5C-0.000666138 4.684 0.628667 3.14667 1.888 1.888C3.14733 0.629333 4.68467 0 6.5 0C8.31533 0 9.853 0.629333 11.113 1.888C12.373 3.14667 13.002 4.684 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L17.3 15.9C17.4833 16.0833 17.575 16.3167 17.575 16.6C17.575 16.8833 17.4833 17.1167 17.3 17.3C17.1167 17.4833 16.8833 17.575 16.6 17.575C16.3167 17.575 16.0833 17.4833 15.9 17.3L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13ZM6.5 11C7.75 11 8.81267 10.5627 9.688 9.688C10.5633 8.81333 11.0007 7.75067 11 6.5C10.9993 5.24933 10.562 4.187 9.688 3.313C8.814 2.439 7.75133 2.00133 6.5 2C5.24867 1.99867 4.18633 2.43633 3.313 3.313C2.43967 4.18967 2.002 5.252 2 6.5C1.998 7.748 2.43567 8.81067 3.313 9.688C4.19033 10.5653 5.25267 11.0027 6.5 11Z" fill="black" fillOpacity="0.2"/>
          </svg>

          <input
            type="text"
            placeholder="책, 영화, 영상 등 콘텐츠 제목을 입력하세요"
            className="w-full h-[2rem] bg-[#F2F4F8] border-0 rounded-[0.5rem] box-border pl-[2.25rem] placeholder:text-[#CCD2D8] outline-none text-[0.8rem] font-pre placeholder:[font-family:inherit] placeholder:text-[0.875rem]"
          />
        </div>
      </div>

      {/* 검색 결과 */}
      <div className="flex w-full h-[1rem] items-center justify-between pb-[1rem]">

        <h2 className="pl-[1.5rem] text-[1rem] font-bold justify-left flex">
          내가 최근에 질문한 콘텐츠
        </h2>

        <div className="relative inline-block text-left">
          {/* 정렬 버튼  */}
          <button
            className={`text-[#B5BBC1] text-[0.75rem] bg-[#FFFFFF] border-0 justify-end pr-[1.5rem] "text-[#B5BBC1]"`}
            type="button"
            onClick={() => setSearchDelete((v) => !v)}
          >
            기록 삭제
          </button>
        </div>
      </div>

      {/* 검색 결과 */}
      <div>
        <ul className="list-none w-full bg-white p-[0rem] m-[0rem]">
            {results.map((item) => (
              <li key={item.id} className="pt-[0.5rem] pb-[0.5rem] pl-[1.5rem] pr-[1.5rem]">
                <button
                  onClick={() => onSelectItem?.(item)}
                  className="w-full border-[0rem] flex items-center p-[0rem] bg-[#FFFFFF]"
                >
                  <img
                    src={item.thumb}
                    alt=""
                    className="w-[3.75rem] h-[5rem] rounded-[0.5rem] object-cover border-[0rem]"
                  />
                  <div className="pl-[0.75rem] flex flex-col justify-center">
                    <p className="text-[0.625rem] text-left leading-none mb-[0.25rem]">
                      {item.category}
                    </p>
                    <p className="text-[0.875rem] text-left leading-none mt-[0.25rem]">
                      {item.title}
                    </p>
                  </div>
                </button>
              </li>
            ))}
          </ul>
      </div>

      <div className="pr-[1.5rem] pl-[1.5rem] pb-[3rem] pt-[1rem]">
         <button
              onClick={onRegister}
              className="w-full h-[2.5rem] rounded-[0.5rem] border border-[#B5BBC1] bg-[#FFFFFF] flex items-center justify-center text-[0.875rem]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M15.8335 9.16665H10.8335V4.16665C10.8335 3.94563 10.7457 3.73367 10.5894 3.57739C10.4331 3.42111 10.2212 3.33331 10.0002 3.33331C9.77915 3.33331 9.56719 3.42111 9.41091 3.57739C9.25463 3.73367 9.16683 3.94563 9.16683 4.16665V9.16665H4.16683C3.94582 9.16665 3.73385 9.25444 3.57757 9.41072C3.42129 9.567 3.3335 9.77897 3.3335 9.99998C3.3335 10.221 3.42129 10.433 3.57757 10.5892C3.73385 10.7455 3.94582 10.8333 4.16683 10.8333H9.16683V15.8333C9.16683 16.0543 9.25463 16.2663 9.41091 16.4226C9.56719 16.5788 9.77915 16.6666 10.0002 16.6666C10.2212 16.6666 10.4331 16.5788 10.5894 16.4226C10.7457 16.2663 10.8335 16.0543 10.8335 15.8333V10.8333H15.8335C16.0545 10.8333 16.2665 10.7455 16.4228 10.5892C16.579 10.433 16.6668 10.221 16.6668 9.99998C16.6668 9.77897 16.579 9.567 16.4228 9.41072C16.2665 9.25444 16.0545 9.16665 15.8335 9.16665Z" fill="#3B3D40"/>
              </svg>
              직접 등록하기
            </button>
        
      </div>
    </div>
  );
}