import { ChevronDown } from "lucide-react";
import React from "react";

const SearchMovie = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full  translate-y-1/2 z-50">
      <div className="max-w-6xl h-14  grid grid-cols-6 mx-auto shadow-2xl">
        <div className="col-span-2">
          <div className="flex items-center pt-[18px] pr-[5px] pb-[2px] pl-[30px] justify-between bg-white rounded-l-[4px] cursor-pointer">
            <div>
              <span className="text-white font-bold text-[10px] px-[6px] py-[2px] bg-brand rounded-full mx-auto">
                1
              </span>
              <span className="pl-[4.8px] text-text-primary">Chọn phim</span>
            </div>
            <ChevronDown width={"16px"} height={"16px"} />
          </div>
        </div>
        <div className="col-span-1 ">
          <div className="flex items-center pt-[18px] pr-[5px] pb-[2px] pl-[30px] justify-between bg-white cursor-pointer">
            <div>
              <span className="text-white font-bold text-[10px] px-[6px] py-[2px] bg-brand rounded-full mx-auto">
                2
              </span>
              <span className="pl-[4.8px] text-text-primary">Chọn rạp</span>
            </div>
            <ChevronDown width={"16px"} height={"16px"} />
          </div>
        </div>
        <div className="col-span-1 cursor-pointer">
          <div className="flex items-center pt-[18px] pr-[5px] pb-[2px] pl-[30px] justify-between bg-white cursor-pointer">
            <div>
              <span className="text-white font-bold text-[10px] px-[6px] py-[2px] bg-brand rounded-full mx-auto">
                3
              </span>
              <span className="pl-[4.8px] text-text-primary">Chọn ngày</span>
            </div>
            <ChevronDown width={"16px"} height={"16px"} />
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex items-center pt-[18px] pr-[5px] pb-[2px] pl-[30px] justify-between bg-white cursor-pointer">
            <div>
              <span className="text-white font-bold text-[10px] px-[6px] py-[2px] bg-brand rounded-full mx-auto">
                4
              </span>
              <span className="pl-[4.8px] text-text-primary">Chọn suất</span>
            </div>
            <ChevronDown width={"16px"} height={"16px"} />
          </div>
        </div>
        <div className="col-span-1  flex items-center bg-brand rounded-r-[2px] cursor-pointer">
          <span className="w-full text-center text-text-primary text-[16px]">
            Mua vé nhanh
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchMovie;
