import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomNav from "../../components/main/BottomNav";

export default function FriendsScreen() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("friends");
  const [showAcceptModal, setShowAcceptModal] = useState(false);

  // 친구 목록
  const [friends, setFriends] = useState([
    { id: 1, name: "멋쟁이 호랭이" },
    { id: 2, name: "멋쟁이 감귤" },
    { id: 3, name: "멋쟁이 감귤" },
  ]);

  // 친구 신청 목록
  const [requests, setRequests] = useState([
    {
      id: 101,
      name: "신촌 호랭이",
      message:
        "안녕하세요, [바깥은 여름] 대화 때, 이야기 하시는 걸 보니 저랑 책 취향이 비슷하신 것 같아서 친구 신청해요.",
    },
    {
      id: 102,
      name: "멋쟁이 사과",
      message:
        "안녕하세요, [바깥은 여름] 대화 때, 이야기 하시는 걸 보니 저랑 책 취향이 비슷하신 것 같아서 친구 신청해요.",
    },
  ]);

  // 차단 목록 (예시)
  const [blocked, setBlocked] = useState([
    { id: 201, name: "짜증나는 악어" },
  ]);

  // 수락
  const handleAccept = (id) => {
    const req = requests.find((r) => r.id === id);
    if (!req) return;

    // 친구 목록에 추가
    setFriends([...friends, { id: req.id, name: req.name }]);
    // 신청 목록에서 제거
    setRequests(requests.filter((r) => r.id !== id));
    // 팝업 열기
    setShowAcceptModal(true);
  };

  // 거절
  const handleReject = (id) => {
    setRequests(requests.filter((r) => r.id !== id));
  };

  return (
    <div className="flex flex-col h-screen bg-white font-[Pretendard]">
      {/* 상단바 */}
      <div className="px-[1.5rem] mt-[1.25rem] flex items-center">
        <button className="mr-[0.5rem]" onClick={() => navigate(-1)}>
          <img
            src="/icons/arrow-left.svg"
            alt="뒤로가기"
            className="w-[0.5369rem] h-[0.9281rem]"
          />
        </button>
        <h1 className="text-[1.25rem] font-bold">친구</h1>
      </div>

      {/* 탭 영역 */}
      <div className="mt-[1.5rem] px-[1.5rem] flex items-center gap-[1.5rem] border-b border-[#E5E7EB]">
        {/* 친구 사이 */}
        <button
          className={`pb-[0.75rem] text-[1rem] ${
            activeTab === "friends"
              ? "font-semibold text-[#111827] border-b-2 border-[#FA502E]"
              : "text-[#6B7280]"
          }`}
          onClick={() => setActiveTab("friends")}
        >
          친구 사이
        </button>

        {/* 신청 */}
        <button
          className={`relative pb-[0.75rem] flex items-center gap-[0.4rem] text-[1rem] ${
            activeTab === "requests"
              ? "font-semibold text-[#111827] border-b-2 border-[#FA502E]"
              : "text-[#6B7280]"
          }`}
          onClick={() => setActiveTab("requests")}
        >
          <span>신청</span>
          {requests.length > 0 && (
            <span className="min-w-[1.25rem] h-[1.25rem] rounded-full bg-[#FA502E] text-white text-[0.75rem] flex items-center justify-center">
              {requests.length}
            </span>
          )}
        </button>

        {/* 차단 목록 */}
        <button
          className={`pb-[0.75rem] text-[1rem] ${
            activeTab === "blocked"
              ? "font-semibold text-[#111827] border-b-2 border-[#FA502E]"
              : "text-[#6B7280]"
          }`}
          onClick={() => setActiveTab("blocked")}
        >
          차단 목록
        </button>
      </div>

      {/* 메인 컨텐츠 */}
      <div className="flex-1 overflow-y-auto w-full max-w-[500px] mx-auto pb-[6rem]">
        {/* 친구 사이 탭 */}
        {activeTab === "friends" && (
          <>
            <div className="px-[1.5rem] mt-[1.25rem] mb-[0.75rem]">
              <p className="text-[0.875rem] text-[#4B5563]">
                전체 {friends.length}
              </p>
            </div>
            <div className="flex flex-col">
              {friends.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center px-[1.5rem] py-[0.75rem]"
                >
                  <div className="w-[2.75rem] h-[2.75rem] rounded-full bg-[#E5E7EB] flex items-center justify-center overflow-hidden">
                    <img
                      src="/icons/profile-avatar.svg"
                      alt="프로필"
                      className="w-[2.5rem] h-[2.5rem]"
                    />
                  </div>
                  <p className="ml-[0.75rem] text-[1rem] text-[#111827]">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}

        {/* 신청 탭 */}
        {activeTab === "requests" && (
          <div className="px-[1.5rem] mt-[1.5rem]">
            <p className="text-[1rem] font-semibold mb-[0.25rem]">
              친구 신청을 받았어요
            </p>
            <p className="text-[0.75rem] text-[#3B3D40] mb-[1.25rem] leading-[1.4rem]">
              친구가 되면 친구목록에 서로가 추가되고, 친구가 질문을 등록할 경우
              알림을 받을 수 있어요.
            </p>

            {requests.map((req) => (
              <div
                key={req.id}
                className="bg-white border border-[#E5E7EB] rounded-[1rem] px-[1.25rem] pt-[1.25rem] pb-[1rem] mb-[1.25rem]"
              >
                {/* 이름 + 프로필 */}
                <div className="flex items-center">
                  <div className="w-[2.5rem] h-[2.5rem] flex items-center justify-center overflow-hidden">
                    <img
                      src="/icons/profile-avatar.svg"
                      alt="프로필"
                      className="w-[2.5rem] h-[2.5rem]"
                    />
                  </div>
                  <p className="ml-[0.75rem] text-[0.875rem] font-medium text-[#111827]">
                    {req.name}
                  </p>
                </div>

                {/* 메시지 */}
                <p className="mt-[0.25rem] ml-[3.25rem] text-[0.875rem] text-[#191D1F] leading-[1.6rem]">
                  “{req.message}”
                </p>

                {/* 버튼 영역 */}
                <div className="flex gap-[0.56rem] mt-[1.25rem]">
                  <button
                    className="flex-1 h-[1.8125rem] rounded-[1.5rem] bg-[#F3F4F6] text-[#4B5563] text-[0.87rem] font-medium"
                    onClick={() => handleReject(req.id)}
                  >
                    거절
                  </button>
                  <button
                    className="flex-1 h-[1.8125rem] rounded-[1.5rem] bg-[#FA502E] text-white text-[0.87rem] font-medium"
                    onClick={() => handleAccept(req.id)}
                  >
                    수락
                  </button>
                </div>
              </div>
            ))}

            {requests.length === 0 && (
              <p className="mt-[2rem] text-[0.9rem] text-[#9CA3AF]">
                받은 친구 신청이 없어요.
              </p>
            )}
          </div>
        )}

        {/* 차단 목록 탭 */}
        {activeTab === "blocked" && (
          <>
            <div className="px-[1.5rem] mt-[1.25rem] mb-[0.75rem]">
              <p className="text-[0.875rem] text-[#4B5563]">
                전체 {blocked.length}
              </p>
            </div>
            <div className="flex flex-col">
              {blocked.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center px-[1.5rem] py-[0.75rem]"
                >
                  <div className="w-[2.75rem] h-[2.75rem] rounded-full bg-[#E5E7EB] flex items-center justify-center overflow-hidden">
                    <img
                      src="/icons/profile-avatar.svg"
                      alt="프로필"
                      className="w-[2.5rem] h-[2.5rem]"
                    />
                  </div>
                  <p className="ml-[0.75rem] text-[1rem] text-[#111827]">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* 수락 팝업 */}
      {showAcceptModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.08)" }} // 살짝만 어둡게
        >
          <div className="bg-white rounded-[0.5rem] w-[17.5rem] max-w-[80%] overflow-hidden shadow-[0_8px_20px_rgba(0,0,0,0.12)]">
            {/* 텍스트 영역 */}
            <div className="px-6 py-5 text-center">
              <p className="text-[0.875rem] text-[#111827]">
                친구가 되었어요.
              </p>
            </div>

            {/* 구분선 */}
            <div className="h-[1px] bg-[#E5E7EB]" />

            {/* 확인 버튼 */}
            <button
              className="w-full py-[0.9rem] text-[1rem] font-bold text-[#FA502E]"
              onClick={() => setShowAcceptModal(false)}
            >
              확인
            </button>
          </div>
        </div>
      )}


      <BottomNav />
    </div>
  );
}
