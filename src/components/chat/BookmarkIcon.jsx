import React from "react";

export default function BookmarkIcon({ filled = false, className = "" }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="14" height="18" viewBox="0 0 14 18" fill="none">
      <path
        d="M1.16666 16.5V3.16667C1.16666 2.72464 1.34225 2.30072 1.65481 1.98816C1.96737 1.67559 2.3913 1.5 2.83332 1.5H11.1667C11.6087 1.5 12.0326 1.67559 12.3452 1.98816C12.6577 2.30072 12.8333 2.72464 12.8333 3.16667V16.5L7.90166 13.3292C7.63274 13.1562 7.31974 13.0642 6.99999 13.0642C6.68024 13.0642 6.36724 13.1562 6.09832 13.3292L1.16666 16.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={filled ? "currentColor" : "none"}
      />
    </svg>
  );
}
