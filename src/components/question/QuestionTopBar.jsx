import React from "react";

export default function QuestionTopBar(){
  return (
  <div className="w-full flex items-center justify-between p-[1rem] box-border">

    <button type="button" className="bg-[#FFFFFF] border-0">
      <svg xmlns="http://www.w3.org/2000/svg" width="9" height="15" viewBox="0 0 9 15" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.341565 8.2495L6.9414 14.8493L8.59106 13.1997L2.81606 7.42467L8.59106 1.64967L6.9414 0L0.341565 6.59983C0.122849 6.81862 -1.90735e-05 7.11531 -1.90735e-05 7.42467C-1.90735e-05 7.73402 0.122849 8.03072 0.341565 8.2495Z" fill="#191D1F"/>
      </svg>
    </button>
    <button type="button" className="h-[2rem] w-[3.5625rem] rounded-[0.5rem] text-[#FFFFFF] bg-[#FA502E] border-0">
      등록
    </button>
  </div>
  );
}