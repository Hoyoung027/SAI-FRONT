import React from "react";
import BottomNav from "../../components/main/BottomNav";
import { useNavigate } from "react-router-dom";

export default function MyPageQuestions() {
  const navigate = useNavigate();

  const questions = [
    {
      id: 1,
      title: "기억을 지운다는 건 고통을 없애기 위함일까?",
      category: "대분류 / 소분류",
      participants: 4,
      saved: 12,
      thumbnail: "/sample1.jpg",
    },
    {
      id: 2,
      title: "용서란 상대를 위한 걸까, 나를 위한 걸까?",
      category: "대분류 / 소분류",
      participants: 5,
      saved: 8,
      thumbnail: "/sample2.jpg",
    },
  ];

  return (
    <div className="flex flex-col h-screen bg-white font-[Pretendard]">
      {/* 상단 */}
      <div className="px-[1.5rem] mt-[1.5rem] flex items-center">
        <button
          className="mr-2"
          onClick={() => navigate("/mypage")}
        >
          <img src="/icons/arrow-left.svg" className="w-[0.5369rem] h-[0.9281rem]" alt="뒤로" />
        </button>
        <p className="text-[1.2rem] font-bold">아카이브</p>
      </div>

      {/* 탭 */}
      <div className="flex justify-around mt-[1.5rem] text-[1.125rem] font-semibold">
        <button className="text-[#FA502E] border-b-2 border-[#FA502E] pb-1">
          질문
        </button>
        <button onClick={() => navigate("/mypage/chats")}>대화</button>
        <button onClick={() => navigate("/mypage/saved")}>저장</button>
        <button onClick={() => navigate("/mypage/scrap")}>스크랩</button>
      </div>

      {/* 전체 개수 */}
      <div className="px-[1.5rem] mt-[1.5rem]">
        <span className="text-[1rem] font-semibold">전체 {questions.length}</span>
      </div>

      {/* 리스트 */}
      <div className="px-[1.5rem] mt-[1.25rem] overflow-y-auto pb-[8rem]">
        {questions.map((q) => (
          <div key={q.id} className="flex gap-[1rem] mb-[2rem]">
            <img
              src={q.thumbnail}
              className="w-[4rem] h-[4rem] rounded-md object-cover"
            />
            <div>
              <p className="text-[#91969A] text-[0.875rem]">{q.category}</p>
              <p className="text-[1.1rem] font-semibold line-clamp-1">
                {q.title}
              </p>
              <p className="text-[0.9rem] text-[#6B7280]">
                참여 {q.participants} | 저장 {q.saved}
              </p>
            </div>
          </div>
        ))}
      </div>

      <BottomNav />
    </div>
  );
}
