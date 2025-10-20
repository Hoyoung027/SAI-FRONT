import React from "react";
import BookmarkIcon from "./BookmarkIcon";

// Avatar
function Avatar({ initials = "", bg = "bg-neutral-300" }) {
  return (
    <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${bg} text-white text-sm font-semibold`}> 
      {initials || ""}
    </div>
  );
}

export default function ChatBubble({ msg, onToggleBookmark }) {
  const isLeft = msg.side === "left";

  return (
    <div className={`w-full flex ${isLeft ? "justify-start" : "justify-end"}`}>
      {isLeft && (
        <div className="mr-2 flex flex-col items-center">
          <Avatar initials={msg.name?.slice(0, 1)} bg={msg.avatarBg} />
        </div>
      )}

      <div className={`max-w-[78%] flex flex-col gap-1 ${isLeft ? "items-start" : "items-end"}`}>
        {isLeft && (
          <div className="ml-1 text-sm font-semibold text-neutral-700">{msg.name}</div>
        )}

        <div className={`relative ${isLeft ? "pr-9" : "pl-9"}`}>
          <div
            className={
              `relative rounded-2xl px-4 py-3 text-[16px] leading-relaxed shadow-sm transition ` +
              (isLeft
                ? "border border-[#DEE2E6] bg-[#FFFFFF] text-[#191D1F]"
                : "bg-[#FA502E] text-[#FFFFFF]")
            }
          >
            <div>{msg.text}</div>
          </div>

          {/* side actions */}
          <div className={`absolute bottom-0 ${isLeft ? "right-2" : "left-2"} flex items-center gap-2`}>
            <button
              onClick={() => onToggleBookmark?.(msg.id)}
              className={`rounded-full p-1 transition hover:scale-110 bg-[#FFFFFF] ${msg.bookmarked ? "text-[#FA502E]" : "text-[#DEE2E6]"}`}
              aria-label="bookmark"
              title="북마크"
              aria-pressed={!!msg.bookmarked}
            >
              <BookmarkIcon filled={msg.bookmarked} />
            </button>
          </div>
        </div>

        <div className="mt-0.5 text-xs text-neutral-500">{msg.time}</div>
      </div>

      {!isLeft && <div className="ml-2 h-11 w-11 shrink-0" />}
    </div>
  );
}
