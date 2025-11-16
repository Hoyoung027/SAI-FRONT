import React from "react";
import { useNavigate } from "react-router-dom";
import BottomNav from "../../components/main/BottomNav";

export default function MyPageScreen() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen bg-white font-[Pretendard]">

      {/* 상단 타이틀 */}
      <div className="px-[1.5rem] mt-[1.5rem] flex justify-between items-center">
        <h1 className="text-[1.5rem] font-bold">마이페이지</h1>
        <img
          src="/icons/setting.svg"
          className="w-[1.5rem] h-[1.5rem]"
          alt="설정"
        />
      </div>

      {/* 메인 스크롤 영역 */}
      <div className="flex-1 overflow-y-auto w-full max-w-[500px] mx-auto pb-[6rem]">

        {/* 프로필 */}
        <div className="px-[1.5rem] mt-[1.5rem] flex items-center gap-[1rem]">
          <div className="relative">
            <img
              src="/icons/profile-avatar.svg"
              alt="프로필"
              className="w-[4.5rem] h-[4.5rem] rounded-full"
            />
            <img
              src="/icons/edit.svg"
              alt="편집"
              className="absolute bottom-0 right-0 w-[1.4rem] h-[1.4rem]"
            />
          </div>

          <div className="flex flex-col">
            <p className="text-[1.25rem] font-semibold">멋쟁이 사자</p>
            <p className="text-[0.875rem] text-[#6B7280] mt-[0.25rem]">
              팔로워 5 | 팔로잉 12
            </p>
          </div>
        </div>

        {/* 카운트 영역 - 클릭으로 이동 가능 */}
        <div className="flex justify-around mt-[1.75rem] px-[1.5rem] text-center">
          <button onClick={() => navigate("/mypage/questions")}>
            <p className="text-[1.25rem] font-semibold">5</p>
            <p className="text-[0.875rem] text-[#6B7280]">질문</p>
          </button>

          <button onClick={() => navigate("/mypage/chats")}>
            <p className="text-[1.25rem] font-semibold">13</p>
            <p className="text-[0.875rem] text-[#6B7280]">대화</p>
          </button>

          <button onClick={() => navigate("/mypage/saved")}>
            <p className="text-[1.25rem] font-semibold">1.2k</p>
            <p className="text-[0.875rem] text-[#6B7280]">저장</p>
          </button>

          <button onClick={() => navigate("/mypage/scrap")}>
            <p className="text-[1.25rem] font-semibold">120</p>
            <p className="text-[0.875rem] text-[#6B7280]">스크랩</p>
          </button>
        </div>

        {/* 회색 구분선 */}
        <div className="w-full h-[0.5rem] bg-[#F2F4F8] mt-[1.75rem]"></div>

        {/* 최근 대화 헤더 */}
        <div className="px-[1.5rem] mt-[1.75rem] flex justify-between items-center">
          <p className="text-[1.25rem] font-semibold">최근 대화</p>
          <button
            className="text-[#9CA3AF] text-[0.875rem]"
            onClick={() => navigate("/mypage/chats")}
          >
            전체보기
          </button>
        </div>

        {/* 최근 대화 카드 */}
        <div className="px-[1.5rem] mt-[1rem]">
          <div className="bg-white shadow-[0px_2px_12px_rgba(0,0,0,0.08)] rounded-[1rem] p-5 relative">

            {/* 우측 썸네일 */}
            <img
              src="/icons/sample1.svg"
              alt="썸네일"
              className="w-[5.5rem] h-[5.5rem] rounded-lg absolute top-5 right-5"
            />

            {/* 텍스트 영역 */}
            <div className="pr-[7rem]">
              <p className="text-[0.75rem] text-[#9CA3AF]">대분류 / 소분류</p>

              <p className="mt-[0.25rem] text-[1rem] font-semibold leading-[1.4rem] line-clamp-2">
                챗GPT에 중독된 직장인들의 미래를 알 수 있는 SF 소설 독서모임 | 가즈오 이…
              </p>

              <div className="flex items-center gap-[0.5rem] mt-[0.5rem] text-[0.75rem] text-[#6B7280]">
                <img src="/icons/people.svg" className="w-[1rem] h-[1rem]" />
                <span>4</span>
                <span className="ml-[0.5rem]">함께한 질문 4</span>
                <span className="ml-[0.25rem]">| 저장한 대화 12</span>
              </div>
            </div>

            {/* 인용문 */}
            <div className="mt-[1.25rem] pr-[2rem]">
              <img src="/icons/quote.svg" className="w-[1rem] opacity-70" />
              <p className="text-[0.875rem] mt-[0.5rem] text-[#6B7280] leading-[1.4rem]">
                믿음X 영상을 보면서 나도 여기에 껴서 이야기 나눠보고 싶다는 생각이
                있었는데 그걸 이룬 느낌이라 좋았다. 클라라에 대한 다양한 의견을 들을 수 있었다.
              </p>
              <div className="flex justify-end">
                <img src="/icons/quote-down.svg" className="w-[1rem] opacity-70" />
              </div>
            </div>

            {/* Q1, Q2 */}
            <div className="mt-[1.25rem] flex flex-col gap-[0.75rem]">
              <div className="flex items-center gap-[0.5rem]">
                <span className="text-[#FA502E] font-bold">Q1</span>
                <p className="text-[0.875rem]">최근에 재미있게 본 SF물은?</p>
              </div>
              <div className="flex items-center gap-[0.5rem]">
                <span className="text-[#FA502E] font-bold">Q2</span>
                <p className="text-[0.875rem] leading-[1.4rem]">
                  인간이 믿음을 갖는 이유는 무엇인가? 그 믿음은 삶과 우리 사회에 어떤 힘을 주는가?
                </p>
              </div>
            </div>

            {/* 펼치기 버튼 */}
            <div className="flex justify-center mt-[0.75rem]">
              <img src="/icons/arrow-down.svg" className="w-[1.5rem] h-[1rem]" />
            </div>

          </div>
        </div>
      </div>

      {/* 질문하기 버튼 */}
      <button
        className="fixed bottom-[5.5rem] right-[1.5rem] w-[7rem] h-[2.75rem] bg-[#FA502E] text-white rounded-[1.5rem] text-[0.875rem] font-medium shadow-md flex items-center justify-center gap-[0.5rem] z-50"
      >
        <img src="/icons/question.svg" className="w-[1rem] h-[1rem]" />
        질문하기
      </button>

      <BottomNav />
    </div>
  );
}
