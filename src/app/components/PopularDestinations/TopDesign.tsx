import React from "react";

function TopDesign() {
  return (
    <div className="flex flex-row text-center justify-between">
      <div className="bg-white flex flex-row w-3/10 h-[2px] border border-gray-200 py-10 mb-2 text-center shadow-[1px_1px_0px_rgba(0,0,0,0.1)] rounded-br-[70px] border-t-0 border-l-0 border-r-0 border-b-1 border-transparent" />
      <div className="bg-white flex flex-row w-3/10 h-[2px] border border-gray-200 py-10 mb-2 text-center shadow-[0px_1px_1px_rgba(0,0,0,0.1)] rounded-bl-[70px] border-t-0 border-l-0 border-r-0 border-b-1 border-transparent" />
    </div>
  );
}

export default TopDesign;
