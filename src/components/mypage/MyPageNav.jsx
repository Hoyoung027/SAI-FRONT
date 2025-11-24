// src/components/mypage/MyPageNav.jsx
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getMyInfo } from "../../lib/memberService";
import { getFriendCounts } from "../../lib/friendService";

export default function MyPageNav({ stats = {} }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [nickname, setNickname] = useState("닉네임");
  const [followerCount, setFollowerCount] = useState(0);
  const [followingCount, setFollowingCount] = useState(0);

  // 질문/대화/저장/스크랩 개수 (없으면 0)
  const questionCount = stats.questionCount ?? 0;
  const chatCount = stats.chatCount ?? 0;
  const saveCount = stats.saveCount ?? 0;
  const scrapCount = stats.scrapCount ?? 0;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const me = await getMyInfo();
        setNickname(me.nickname || "닉네임");

        const counts = await getFriendCounts(me.userId);
        setFollowerCount(counts.followerCount ?? counts.FollowerCount ?? 0);
        setFollowingCount(counts.followingCount ?? counts.FollowingCount ?? 0);
      } catch (e) {
        console.error("마이페이지 정보 로드 실패:", e);
      }
    };

    fetchData();
  }, []);

  // 숫자 + 라벨 + 탭정보를 한 배열로
  const items = [
    { label: "질문", value: questionCount, path: "/mypage/ques" },
    { label: "대화", value: chatCount, path: "/mypage/chats" },
    { label: "저장", value: saveCount, path: "/mypage/save" },
    { label: "스크랩", value: scrapCount, path: "/mypage/scrap" },
  ];

  return (
    <div className="flex flex-col bg-white font-[Pretendard]">
      {/* 상단 타이틀 */}
      <div className="px-[1.5rem] mt-[1.5rem] flex justify-between items-center">
        <p className="text-[1.25rem] font-bold">마이페이지</p>
        <button onClick={() => navigate("/settings")}>
          <img
            src="/icons/setting.svg"
            className="w-[1.5rem] h-[1.5rem]"
            alt="설정"
          />
        </button>
      </div>

      {/* 프로필 */}
      <div className="px-[1.5rem] mt-[1.5rem] flex items-center gap-[1rem]">
        <div className="relative">
          <img
            src="/icons/profile-avatar.svg"
            alt="프로필"
            className="w-[4.5rem] h-[4.5rem] rounded-full"
          />
          <button
            type="button"
            onClick={() => navigate("/mypage/profile/edit")}
            className="absolute bottom-0 right-0 bg-transparent border-none outline-none"
          >
            <img
              src="/icons/edit.svg"
              alt="편집"
              className="w-[1.4rem] h-[1.4rem]"
            />
          </button>
        </div>

        <div className="flex flex-col">
          <p className="text-[1.25rem] font-semibold">{nickname}</p>
          <p className="text-[0.875rem] text-[#6B7280] mt-[0.25rem]">
            팔로워 {followerCount} | 팔로잉 {followingCount}
          </p>
        </div>
      </div>

      {/* 숫자 + 라벨 + 탭 언더라인 (사진처럼 한 줄에) */}
      <div className="flex justify-start gap-[2.5rem] mt-[1.5rem] px-[2.5rem]">
        {items.map((item) => {
          const isActive =
            location.pathname === item.path ||
            location.pathname.startsWith(item.path + "/");

          return (
            <button
              key={item.label}
              onClick={() => navigate(item.path)}
              className="flex flex-col items-center bg-transparent border-none outline-none"
            >
              {/* 숫자 */}
              <span className="text-[1rem] font-bold">{item.value}</span>

              {/* 라벨 */}
              <span
                className={`mt-[0.2rem] text-[0.75rem] ${
                  isActive ? "text-black font-semibold" : "text-[#6B7280]"
                }`}
              >
                {item.label}
              </span>

              {/* 언더라인 */}
              <span
                className={`mt-[0.5rem] w-[2.5rem] h-[2px] rounded-full ${
                  isActive ? "bg-[#FA502E]" : "bg-transparent"
                }`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
