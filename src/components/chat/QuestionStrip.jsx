import React, { useLayoutEffect, useRef, useState } from "react";

function Chevron({ expanded }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="8"
      viewBox="0 0 14 8"
      fill="none"
      className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.71102 7.157L13.368 1.5L11.954 0.0859985L7.00401 5.036L2.05401 0.0859985L0.640015 1.5L6.29701 7.157C6.48454 7.34447 6.73885 7.44978 7.00401 7.44978C7.26918 7.44978 7.52349 7.34447 7.71102 7.157Z"
        fill="#B5BBC1"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.71102 7.157L13.368 1.5L11.954 0.0859985L7.00401 5.036L2.05401 0.0859985L0.640015 1.5L6.29701 7.157C6.48454 7.34447 6.73885 7.44978 7.00401 7.44978C7.26918 7.44978 7.52349 7.34447 7.71102 7.157Z"
        fill="black"
        fillOpacity="0.2"
      />
    </svg>
  );
}

export default function QuestionStrip({ title, defaultExpanded = false }) {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const [showToggle, setShowToggle] = useState(false);
  const textRef = useRef(null);
  const titleId = "questionstrip-title";

  // 긴 제목일 때만 토글 버튼 보이기
  useLayoutEffect(() => {
    const el = textRef.current;
    if (!el) return;

    const check = () => {
      if (expanded) {
        setShowToggle(true);
      } else {
        setShowToggle(el.scrollWidth > el.clientWidth);
      }
    };

    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [expanded, title]);

  return (
    <div className="bg-[#f6f1ee] border-b border-neutral-200">
      <div className="mx-auto max-w-[760px] px-3 py-2 flex items-center gap-2">
        <span className="inline-flex items-center rounded-md bg-[#e76e55] text-white text-xs px-2 py-1">
          질문
        </span>

        {/* 제목 영역 */}
        <div className="flex-1 min-w-0">
          <div
            id={titleId}
            ref={textRef}
            className={
              expanded
                ? "text-[15px] text-neutral-800 whitespace-normal break-words"
                : "text-[15px] text-neutral-800 truncate"
            }
          >
            {title}
          </div>
        </div>

        {/* 토글 버튼 */}
        {showToggle && (
          <button
            aria-label={expanded ? "제목 접기" : "제목 펼치기"}
            aria-expanded={expanded}
            aria-controls={titleId}
            onClick={() => setExpanded(!expanded)}
            className="p-2 text-neutral-600 shrink-0"
          >
            <Chevron expanded={expanded} />
          </button>
        )}
      </div>
    </div>
  );
}
