import React from "react";
import BottomNav from "../../components/main/BottomNav";
import { useNavigate } from "react-router-dom";

export default function MyPageSaved() {
  const navigate = useNavigate();

  const saved = [
    {
      id: 1,
      title: "챗GPT에 중독된 직장인들의 미래는?",
      category: "대분류 / 소분류",
      savedCount: 12,
      thumbnail: "/sample3.jpg",
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
        <button onClick={() => navigate("/mypage/questions")}>질문</button>
        <button onClick={() => navigate("/mypage/chats")}>대화</button>
        <button className="text-[#FA502E] border-b-2 border-[#FA502E] pb-1">
          저장
        </button>
        <button onClick={() => navigate("/mypage/scrap")}>스크랩</button>
      </div>

      <div className="px-[1.5rem] mt-[1.5rem]">
        <span className="text-[1rem] font-semibold">전체 {saved.length}</span>
      </div>

      <div className="px-[1.5rem] mt-[1.25rem] overflow-y-auto pb-[8rem]">
        {saved.map((item) => (
          <div key={item.id} className="flex gap-[1rem] mb-[2rem]">
            <img
              src={item.thumbnail}
              className="w-[4rem] h-[4rem] rounded-md object-cover"
            />
            <div>
              <p className="text-[#91969A] text-[0.875rem]">{item.category}</p>
              <p className="text-[1.1rem] font-semibold line-clamp-1">
                {item.title}
              </p>
              <p className="text-[0.9rem] text-[#6B7280]">
                저장 {item.savedCount}
              </p>
            </div>
          </div>
        ))}
      </div>

      <BottomNav />
    </div>
  );
}
