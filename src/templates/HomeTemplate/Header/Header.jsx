import React, { useState } from "react";
import brand from "../../../assets/images/brand-logo.png";
import ticket from "../../../assets/images/ticket.webp";

import { ChevronDown, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { path } from "../../../hooks/path";
import Gstar from "../../../assets/images/join-member-Gstar.svg";

const Header = () => {
  const [open, setOpen] = useState(false);
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
              <Link className="py-7 flex items-center hover:text-[#f26b37] transition-all duration-300">
                Phim <ChevronDown height={"10px"} />
              </Link>
              <Link className="py-7 flex items-center hover:text-[#f26b37] transition-all duration-300">
                Star Shop
                <ChevronDown height={"10px"} />
              </Link>
              <Link className="py-7 flex items-center hover:text-[#f26b37] transition-all duration-300">
                Góc điện ảnh
                <ChevronDown height={"10px"} />
              </Link>
              <Link className="py-7 flex items-center hover:text-[#f26b37] transition-all duration-300">
                Sự kiện
                <ChevronDown height={"10px"} />
              </Link>
              <Link className="py-7 flex items-center hover:text-[#f26b37] transition-all duration-300">
                Rạp/Giá vé
                <ChevronDown height={"10px"} />
              </Link>
              <Link className="py-7 flex items-center hover:text-[#f26b37] transition-all duration-300">
                Rạp đặt biệt
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link
              onClick={() => setOpen(true)}
              className="text-[#777777] hover:text-[#f26b37] transition-all duration-300"
            >
              Đăng nhập
            </Link>

            <Link>
              <img src={Gstar} alt="" width={"100px"} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
