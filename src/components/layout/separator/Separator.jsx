import React from "react";

const Separator = ({ label, line = true }) => {
  return (
    <div className="gap-4 flex w-full items-center">
      <span className="text-gray-600 text-lg text-nowrap">{label}</span>
      {line && <hr className="w-full border-gray-300" />}
    </div>
  );
};

export default Separator;
