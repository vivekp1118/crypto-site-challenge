import React from "react";

function SubHeader({ header }) {
  return (
    <div className="text-lg font-semibold leading-tight text-gray-700">
      {header}
      <i className="fas fa-info-circle ml-2 h-5 w-5 "></i>
    </div>
  );
}

export default SubHeader;
