import React from "react";

function SubHeader({ header, margin = "" }) {
  return (
    <div
      className={`text-lg font-semibold leading-tight text-gray-700 ${margin}`}
    >
      {header}
      <i className="fas fa-info-circle ml-2 text-sm text-gray-400 "></i>
    </div>
  );
}

export default SubHeader;
