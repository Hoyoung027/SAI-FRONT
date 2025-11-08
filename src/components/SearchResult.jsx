import React from "react";
import Navbar from "../components/Navbar";
import BottomNav from "../components/BottomNav";
import { useNavigate } from "react-router-dom";

export default function SearchResult() {
  const navigate = useNavigate();

  const results = [
    {
      id: 1,
      question:
        "기억을 지운다는 건 고통을 없애기 위함일까, 아니면 다시 사랑하기 위해 자신을 비워내는 행위일까?",
      description:
        "아픈 기억이 사라지면 편해질 것 같지만, 그 기억이 사라지면 지금의 나도 조금 달라질 것 같다는 생각이 들어요.",
      bookTitle: "이터널 선샤인 (Eternal Sunshine of the Spotless Mind)",
      category: ["사랑", "기억"],
      likes: 20,
    },
    {
      id: 2,
      question: "용서란 상대를 위한 걸까, 나를 위한 걸까?",
      description:
        "누군가를 용서했을 때 마음이 한결 편해지지만, 그 용서가 정말 상대를 위한 건지, 아니면 내 죄책감을 덜기 위한 건지 모르겠어요.",
      bookTitle: "용서의 심리학",
      category: ["용서", "심리"],
      likes: 17,
    },
  ];

  return (
    <div className="flex flex-col h-screen bg-white font-[Pretendard] relative">
      <Navbar />

      {/* ✅ 상단 검색창 */}
      <div className="w-[20.435rem] mx-auto pr-6 mt-[1.38rem]">
        <div className="relative flex items-center bg-[#F2F4F8] rounded-[0.75rem] h-[2.5rem] px-3">
          <img
            src="/icons/search.svg"
            alt="검색"
            className="w-[1.5rem] h-[1.5rem] ml-[0.94rem] opacity-60"
          />
          <input
            type="text"
            placeholder="검색어를 입력하세요"
            className="bg-transparent flex-1 ml-[0.25rem] text-[0.875rem] placeholder-[#9CA3AF] text-[#333] outline-none border-none"
            defaultValue="기억" // 🔹 예시 검색어
          />
        </div>
      </div>

      {/* ✅ 결과 목록 */}
      <div className="flex-1 overflow-y-auto px-[1.5rem] pb-[6rem] mt-[1rem]">
        {results.map((item) => (
          <div
            key={item.id}
            className="border-b border-[#E5E7EB] pb-[1.25rem] mb-[1.25rem]"
          >
            {/* 질문 */}
            <p className="text-[1rem] font-medium text-[#000000] leading-[1.6rem] mb-[0.5rem]">
              {item.question}
            </p>

            {/* 내용 */}
            <p className="text-[0.875rem] text-[#555] leading-[1.4rem] mb-[0.75rem]">
              {item.description}
            </p>

            {/* 책 정보 */}
            <div className="text-[0.875rem] text-[#6B7280] mb-[0.5rem]">
              <span className="font-medium text-[#000000]">
                {item.bookTitle}
              </span>
              <span className="ml-[0.25rem] text-[#B5BBC1]">도서 · 소설</span>
            </div>

            {/* 태그 */}
            <div className="flex flex-wrap gap-[0.25rem] mb-[0.5rem]">
              {item.category.map((tag, j) => (
                <span
                  key={j}
                  className="px-[0.5rem] py-[0.25rem] bg-[#FFF2EE] text-[#FA502E] text-[0.75rem] rounded-[0.25rem]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* 하단 버튼 및 좋아요 */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-[0.25rem] text-[#6B7280] text-[0.875rem]">
                <img src="/icons/heart.svg" alt="좋아요" className="w-[1rem] h-[1rem]" />
                <span>{item.likes}</span>
              </div>

              <button
                onClick={() => navigate(`/question/${item.id}`)}
                className="px-[1rem] py-[0.4rem] bg-[#FA502E] text-white text-[0.875rem] rounded-[0.5rem] font-medium"
              >
                참여하기
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ 질문하기 버튼 */}
      <button
        className="fixed bottom-[5.5rem] right-[1.5rem] w-[7rem] h-[2.75rem] bg-[#FA502E] text-[#FFFFFF] rounded-[1.5rem] text-[0.875rem] font-medium shadow-md flex items-center justify-center gap-[0.5rem] z-50 border-none outline-none"
        onClick={() => navigate("/question")}
      >
        <img src="/icons/question.svg" alt="질문" className="w-[1rem] h-[1rem]" />
        질문하기
      </button>

      <BottomNav />
    </div>
  );
}
