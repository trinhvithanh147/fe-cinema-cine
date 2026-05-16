import React, { useState } from "react";
import icon_login from "../../assets/images/icon-login.fbbf1b2d.svg";
import InputCustome from "../../components/InputCustome/InputCustome";
import ButtonCustome from "../../components/ButtonCustome/ButtonCustome";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email);
  return (
    <div className="container-main w-full min-h-screen hidden">
      <div className="flex items-center justify-center ">
        <div className="max-w-[400px] px-6 pt-10 bg-white">
          <div className="flex  flex-col">
            <img src={icon_login} alt="" width={"190px"} className="mx-20" />
            <span className="text-lg font-bold not-italic py-2">
              ĐĂNG NHẬP TÀI KHOẢN
            </span>
            <div className="w-full flex items-start flex-col">
              <span>Email</span>
              <InputCustome
                placeholder={"Nhập Email"}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="w-full h-9 border focus:outline-blue-300  border-[#e5e7eb] px-2 bg-transparent rounded-md"
              />
            </div>
            <div className="w-full flex items-start flex-col">
              <span>Mật khẩu</span>
              <InputCustome
                placeholder={"Nhập mật khẩu"}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="w-full h-9 border border-[#e5e7eb]  focus:outline-blue-300 px-2 rounded-md"
              />
            </div>
            <button className="w-full h-[41px] mt-5 bg-brand text-white rounded-md hover:bg-[#e38601] hover:opacity-90 cursor-pointer transition-all duration-300">
              ĐĂNG NHẬP
            </button>
            <span className="mt-[14px] mb-4 text-[#212529] hover:text-[#f26b38] cursor-pointer transition-all duration-300">
              Quên mật khẩu?
            </span>
            <div className="border-t-2 pt-4 border-[#e7e5eb]">
              <span className="text-center block text-[#4a4a4a]">
                Bạn chưa có tài khoản?
              </span>
              <Link className=" text-center border border-[#ff953f] px-6 pt-[6px] pb-[6px] flex items-center justify-center text-brand rounded-md hover:bg-[#e38601] hover:text-white transition-all duration-300">
                Đăng ký
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
