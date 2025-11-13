import React from "react";

export default function ContentTopBar({ title, isbutton }){
  return (
  <div className="w-full flex items-center pl-[1.5rem] pr-[1.5rem] pb-[1rem] pt-[1.5rem] box-border gap-[0.75rem]">

    <button type="button" className="bg-[#FFFFFF] border-0">
      <svg xmlns="http://www.w3.org/2000/svg" width="9" height="15" viewBox="0 0 9 15" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.341809 8.2495L6.94164 14.8493L8.59131 13.1997L2.81631 7.42467L8.59131 1.64967L6.94164 0L0.341809 6.59983C0.123093 6.81862 0.000225067 7.11531 0.000225067 7.42467C0.000225067 7.73402 0.123093 8.03072 0.341809 8.2495Z" fill="#191D1F"/>
      </svg>
    </button>
    <h2 className="text-[1.1875rem]">
      {title}
    </h2>
    {isbutton && (
      <button className="h-[2rem] w-[3.5625rem] rounded-[0.5rem] bg-[#FA502E] border-[0rem] text-[#FFFFFF] ml-auto">
        등록
      </button>
    )}
  </div>
  );
}