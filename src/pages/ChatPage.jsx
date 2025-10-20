import React, { useEffect, useRef, useState } from "react";
import TopBar from "../components/chat/TopBar";
import ChatBubble from "../components/chat/ChatBubble";
import ChatInput from "../components/chat/ChatInput";

// Helpers
const uid = () => Math.random().toString(36).slice(2, 10);
const nowKo = () =>
  new Intl.DateTimeFormat("ko-KR", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(new Date());

// apiResponse 예시
const apiResponse = {
    
    title : "기억 통제로 인간은 더 행복해질까? 어쩌면 더 불행해질지도 몰라",
    startAt : Date.now(),
    endAt : new Date('2025-11-29 10:00:00'),
    seed : [
         {
            id: uid(),
            name: "임의의 닉네임",
            text: "기억을 지울 수 있다면 정말 행복한 일일까요?",
            time: "오후 7:51",
            side: "left",
            avatarBg: "bg-neutral-400",
        },
        {
            id: uid(),
            name: "멋있는 사자",
            text:
            "솔직히 말도 안 된다고 생각해요. 아픈 기억도 결국 제 일부잖아요. 그걸 없애면 제가 아닌 것 같을 것 같아요.",
            time: "오후 7:51",
            side: "left",
            avatarBg: "bg-orange-400",
            bookmarked: true,
        },
        {
            id: uid(),
            text:
            "솔직히 말도 안 된다고 생각해요. 아픈 기억도 결국 제 일부잖아요. 그걸 없애면 제가 아닌 것 같을 것 같아요.",
            time: "오후 7:51",
            side: "right",
        },
        {
            id: uid(),
            name: "멋있는 사자",
            text: "맞아요. 힘든 기억도 결국 우리가 살아가는 이유 중 하나죠.",
            time: "오후 7:51",
            side: "left",
            avatarBg: "bg-orange-400",
        },
    ]
}


// Question summary strip
function QuestionStrip() {
  return (
    <div className="bg-[#f6f1ee] border-b border-neutral-200">
      <div className="mx-auto max-w-[760px] px-3 py-2 flex items-center gap-2">
        <span className="inline-flex items-center rounded-md bg-[#e76e55] text-white text-xs px-2 py-1">질문</span>
        <div className="flex-1 truncate text-[15px] text-neutral-800">기억 통제로 인간은 더 행복해질까? 제목이 더 길...</div>
        <button aria-label="더 보기" className="p-2 text-neutral-600">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M7.71102 7.157L13.368 1.5L11.954 0.0859985L7.00401 5.036L2.05401 0.0859985L0.640015 1.5L6.29701 7.157C6.48454 7.34447 6.73885 7.44978 7.00401 7.44978C7.26918 7.44978 7.52349 7.34447 7.71102 7.157Z" fill="#B5BBC1"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M7.71102 7.157L13.368 1.5L11.954 0.0859985L7.00401 5.036L2.05401 0.0859985L0.640015 1.5L6.29701 7.157C6.48454 7.34447 6.73885 7.44978 7.00401 7.44978C7.26918 7.44978 7.52349 7.34447 7.71102 7.157Z" fill="black" fillOpacity="0.2"/>
        </svg>
        </button>
      </div>
    </div>
  );
}

function ChatWindow() {
  const [messages, setMessages] = useState(apiResponse.seed);
  const [side, setSide] = useState("right");
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const toggleBookmark = (id) => {
    setMessages((prev) => prev.map((m) => (m.id === id ? { ...m, bookmarked: !m.bookmarked } : m)));
  };

  const handleSend = (text, s) => {
    setMessages((prev) => [
      ...prev,
      { id: uid(), text, side: s, time: nowKo() },
    ]);
  };

  return (
    <div className="min-h-screen w-full bg-white">
      <TopBar startAt={apiResponse.startAt} endAt={apiResponse.endAt} onExpire={() => console.log("타이머 종료")} />
      <QuestionStrip />
      <div className="mx-auto max-w-[760px] px-3">
        <div ref={scrollRef} className="w-full overflow-y-auto py-4" style={{ minHeight: 'calc(100vh - 160px)' }}>
          <div className="mx-auto flex max-w-[680px] flex-col gap-5">
            {messages.map((m) => (
              <ChatBubble key={m.id} msg={m} onToggleBookmark={toggleBookmark} />
            ))}
          </div>
        </div>
      </div>
      <ChatInput onSend={handleSend} side={side} />
    </div>
  );
}

export default function ChatPage() {
  return <ChatWindow />;
}
