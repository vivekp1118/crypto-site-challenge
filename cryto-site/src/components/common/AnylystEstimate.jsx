import React from "react";

function AnalystEstimate({ title, color, perecentValue }) {
  return (
    <div className="flex w-full items-center justify-center text-[14px] font-medium text-[#ABB9BF]">
      <h3 className="w-[53px]">{title}</h3>
      <div className="flex h-[6px] w-full items-center gap-2">
        <div
          className=" h-[6px] rounded-md"
          style={{ backgroundColor: `${color}`, width: `${perecentValue}%` }}
        ></div>
        <span>{perecentValue}%</span>
      </div>
    </div>
  );
}

export default AnalystEstimate;
