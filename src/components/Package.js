import React from "react";

const Package = ({ title, description, oldPrice, newPrice, picture }) => {
  return (
    <div>
      {/* section 1 */}
      <div className="flex flex-col w-full gap-y-6 bg-mywhite shadow-xl rounded-2xl overflow-hidden transition-all duration-300">
        {/* #1 */}
        <div className="max-w-[260px] md:w-[260px] h-[190px] rounded-bl-2xl overflow-hidden">
          <img src={picture} alt="package" className="w-full h-full" />
        </div>
        {/* #2 */}
        <div className="flex  items-center justify-between gap-x-1 px-4">
          <div className="flex gap-y-1 flex-col">
            <span className="font-bold text-sm md:text-base">{title}</span>
            <span className="text-xs text-mygray">{description}</span>
          </div>
          <div className="flex flex-col gap-y-1 items-end ">
            <span className="text-xs text-red-600">{newPrice}</span>
            <span className="text-xs text-mygray line-through">{oldPrice}</span>
          </div>
        </div>
        {/* #3 */}
        <div className="flex items-center justify-between px-4 pb-4">
          <button className="bg-myorange py-2 md:py-3 px-8 rounded-md text-mywhite transition-all duration-200 hover:shadow-md hover:shadow-myorange">
            جستجو
          </button>
          <span className="text-lg text-mygray transition-all duration-200 hover:bg-[#87838330] py-2 px-2 md:py-3 cursor-pointer rounded-md ">
            جزییات
          </span>
        </div>
      </div>
    </div>
  );
};

export default Package;
