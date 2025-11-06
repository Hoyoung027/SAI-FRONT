import React, { useState } from "react";
import Navbar from "../components/Navbar";

export default function CategorySearchScreen() {
  const [selected, setSelected] = useState([]);

  const categories = {
    도서: [
      "소설", "인문/사회/역사", "경영/경제", "자기계발", "에세이/시",
      "여행", "종교", "외국어", "과학", "진로/교육/교재",
      "컴퓨터/IT", "건강/다이어트", "가정/생활", "어린이/청소년", "잡지",
    ],
    "영화/TV": [
      "로맨스 웹소설", "로판 웹소설", "판타지 웹소설", "만화 연재", "웹툰",
      "여행", "종교", "외국어", "과학", "진로/교육/교재",
      "컴퓨터/IT", "건강/다이어트", "가정/생활", "어린이/청소년", "잡지",
    ],
    "웹툰/만화/웹소설": [
      "로맨스 웹소설", "로판 웹소설", "판타지 웹소설", "만화 연재", "웹툰",
      "종교", "외국어", "과학", "진로/교육/교재",
      "컴퓨터/IT", "건강/다이어트", "가정/생활", "어린이/청소년", "잡지",
    ],
  };

  const toggleSelect = (item) => {
    if (selected.includes(item)) {
      setSelected(selected.filter((v) => v !== item));
    } else {
      if (selected.length < 20) setSelected([...selected, item]);
    }
  };

  const resetSelection = () => setSelected([]);

  return (
    <div className="relative flex flex-col min-h-screen w-full bg-white font-[Pretendard]">
      {/* 상단 네비게이션 */}
      <Navbar />

      {/* 🔍 검색창 (패딩 1.5rem, 고정) */}
      <div className="w-full max-w-[500px] mx-auto px-6 mt-4">
        <div className="relative">
          <input
            type="text"
            placeholder="검색어를 입력하세요"
            className="w-full h-[2.25rem] pl-10 pr-4 rounded-lg bg-[#F2F4F8] 
                       text-[0.875rem] placeholder-[#9CA3AF] text-[#B5BBC1] 
                       outline-none border-none"
          />
          {/* 검색 아이콘 */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[#B5BBC1]"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
        </div>

        {/* 제목 */}
        <div className="mt-4 mb-2">
          <p className="text-[0.875rem] font-medium">1 사랑의 지속 🔺</p>
        </div>
      </div>

      {/* ✅ 카테고리 스크롤 영역 (스크롤바 숨김 + 검색창/하단 제외) */}
      <div
        className="overflow-y-auto w-full max-w-[500px] mx-auto px-6 pb-[18rem] mt-3 h-[calc(100vh-15rem)] 
                   scrollbar-hide"
        style={{
          msOverflowStyle: "none", // IE, Edge
          scrollbarWidth: "none", // Firefox
        }}
      >
        <style>{`
          /* Chrome, Safari 스크롤바 숨기기 */
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        <div className="divide-y divide-gray-200 space-y-3">
          {Object.keys(categories).map((section, i) => (
            <div key={i} className="pt-3">
              <h3 className="text-[0.875rem] font-semibold mb-3">{section}</h3>

              <div className="grid grid-cols-3 gap-[0.75rem] justify-items-center">
                {categories[section].map((item, j) => {
                  const isSelected = selected.includes(item);
                  return (
                    <button
                      key={j}
                      onClick={() => toggleSelect(item)}
                      className={`px-3 py-1 rounded-[0.5rem] flex items-center justify-center text-[0.875rem] border transition-all
                        ${
                          isSelected
                            ? "bg-[#FFF2EE] border-[#FA502E] text-[#FA502E]"
                            : "bg-[#F5F5F5] border-transparent text-gray-700"
                        }`}
                    >
                      <span className="truncate">{item}</span>
                      {isSelected && (
                        <span className="ml-1 text-[#FA502E] bg-transparent border-none outline-none">
                          ✕
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ 하단 고정 영역 (패딩 동일하게 px-6) */}
      <div className="fixed bottom-[0rem] left-1/2 -translate-x-1/2 w-full max-w-[500px] h-[8rem] bg-[#FFFFFF] border-t border-transparent shadow-[0_-2px_8px_rgba(0,0,0,0.08)] z-50">
        <div className="px-6 py-3">
          {/* 선택 개수 및 초기화 */}
          <div className="flex justify-between items-center text-[0.875rem] text-gray-500 mb-2">
            <span>{selected.length} / 20</span>
            <button
              onClick={resetSelection}
              className="flex items-center gap-1 text-gray-400 bg-transparent border-none outline-none"
            >
              초기화
            </button>
          </div>

          {/* 선택된 태그 */}
          <div className="flex flex-wrap gap-2 mb-3 max-h-[4rem] overflow-y-auto">
            {selected.map((item, i) => (
              <span
                key={i}
                className="flex items-center px-3 py-1 rounded-[0.5rem] text-[0.875rem] bg-[#FFF2EE] text-[#FA502E] border border-[#FA502E]"
              >
                {item}
                <button
                  onClick={() => toggleSelect(item)}
                  className="ml-1 text-[#FA502E] text-[0.875rem] bg-transparent border-none outline-none"
                >
                  ✕
                </button>
              </span>
            ))}
          </div>

          {/* 검색 버튼 */}
          <button
            className="w-full h-[3rem] bg-[#FA502E] text-white text-[0.875rem] font-medium rounded-[0.5rem] border-none outline-none"
            onClick={() => console.log('검색하기', selected)}
          >
            검색하기
          </button>
        </div>
      </div>
    </div>
  );
}
