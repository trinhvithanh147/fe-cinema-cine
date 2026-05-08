import React from "react";
import brand from "../../../assets/images/brand-logo.png";
import ticket from "../../../assets/images/ticket.webp";

import { ChevronDown, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { path } from "../../../hooks/path";
import Gstar from "../../../assets/images/join-member-Gstar.svg";

const Header = () => {
  return (
    <header className="pt-3 pb-2">
      <div className="container-main">
        <div className=" flex items-center justify-between">
          <Link to={path.homeTemplate}>
            <img src={brand} alt="" className="w-[115px]" />
          </Link>
          <div className="px-5 text-text-primary">
            <div className="flex items-center gap-3">
              <Link className="py-7 mr-4">
                <img src={ticket} alt="" className="w-[112px]" />
              </Link>
              <Link className="py-7 flex items-center">
                Phim <ChevronDown height={"10px"} />
              </Link>
              <Link className="py-7 flex items-center">
                Star Shop
                <ChevronDown height={"10px"} />
              </Link>
              <Link className="py-7 flex items-center">
                Góc điện ảnh
                <ChevronDown height={"10px"} />
              </Link>
              <Link className="py-7 flex items-center">
                Sự kiện
                <ChevronDown height={"10px"} />
              </Link>
              <Link className="py-7 flex items-center">
                Rạp/Giá vé
                <ChevronDown height={"10px"} />
              </Link>
              <Link className="py-7 flex items-center underline">
                Rạp đặt biệt
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link className="text-[#777777]">Đăng nhập</Link>
            <img src={Gstar} alt="" width={"100px"} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
