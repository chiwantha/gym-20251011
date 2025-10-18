import React from "react";

const WidthShow = () => {
  return (
    <div
      className="fixed bottom-0 right-0 m-3 px-2 py-1 
    text-xs rounded-md bg-gray-800 z-50
     text-white opacity-75 select-none"
    >
      <span className="block sm:hidden">xs</span>
      <span className="hidden sm:block md:hidden">sm</span>
      <span className="hidden md:block lg:hidden">md</span>
      <span className="hidden lg:block xl:hidden">lg</span>
      <span className="hidden xl:block 2xl:hidden">xl</span>
      <span className="hidden 2xl:block">2xl</span>
    </div>
  );
};

export default WidthShow;
