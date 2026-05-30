import React, { useEffect, useState } from "react";
import icon_login from "../../assets/images/icon-login.fbbf1b2d.svg";
import InputCustome from "../../components/InputCustome/InputCustome";
import ButtonCustome from "../../components/ButtonCustome/ButtonCustome";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { userService } from "../../services/user.service";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import SignUp from "./SignUp";
import { path } from "../../hooks/path";

const Login = ({ onClose, onSwitchSignUp }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const handleLogin = () => {
    const dataLogin = {
      email: email,
      password: password,
    };
    userService
      .login(dataLogin)
      .then((res) => {
        const data = res.data.metaData;
        setUser(data);
        console.log({ data });
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("users", JSON.stringify(data.userObject));
        toast.success(res.data.message || "Đăng nhập thành công");
        setTimeout(() => {
          onClose?.();
          navigate("/");
        }, 1500);
      })
      .catch((err) => {
        const message = err.response?.data.message;
        if (email.trim() == "") {
          setEmailError("Email không được để trống!");
        }
        if (password.trim() == "") {
          setPasswordError("Mật khẩu không được để trống!");
        }
        toast.error(message);
      });
  };
  return (
    <div className="max-w-[400px] px-6 py-10 bg-white relative rounded-md">
      <div className="flex  flex-col">
        <img src={icon_login} alt="" width={"190px"} className="mx-20" />
        <span className="text-lg font-bold not-italic py-2 w-full text-center">
          Đăng Nhập Tài Khoản
        </span>
        <div className="w-full flex items-start flex-col">
          <span className="text-[10px]">Email</span>
          <InputCustome
            placeholder={"Nhập Email"}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="w-full h-9 border focus:outline-blue-300 mb-1  border-[#e5e7eb] px-2 bg-transparent rounded-md"
          />
          <span className="text-red-500 text-sm">{emailError}</span>
        </div>
        <div className="w-full flex items-start flex-col">
          <span className="text-[10px]">Mật khẩu</span>
          <InputCustome
            placeholder={"Nhập mật khẩu"}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="w-full h-9 border border-[#e5e7eb]  focus:outline-blue-300 px-2 rounded-md"
          />
          {<span className="text-red-500 text-sm">{passwordError}</span>}
        </div>
        <button
          onClick={handleLogin}
          className="w-full h-[41px] mt-5 bg-brand text-white rounded-md hover:bg-[#e38601] hover:opacity-90 cursor-pointer transition-all duration-300"
        >
          ĐĂNG NHẬP
        </button>
        <span className="mt-[14px] mb-4 text-[#212529] hover:text-[#f26b38] cursor-pointer transition-all duration-300">
          Quên mật khẩu?
        </span>
        <div className="border-t-2 pt-4 border-[#e7e5eb]">
          <span className="text-center block text-[#4a4a4a]">
            Bạn chưa có tài khoản?
          </span>
          <Link
            onClick={onSwitchSignUp}
            className=" text-center border border-[#ff953f] px-6 pt-[6px] pb-[6px] flex items-center justify-center text-brand rounded-md hover:bg-[#e38601] hover:text-white transition-all duration-300"
          >
            Đăng ký
          </Link>
        </div>
      </div>
      <div className="absolute top-[14px] right-[14px]" onClick={onClose}>
        <div className="w-6 h-6 flex items-center justify-center rounded-full border border-[#e7e5eb] bg-[#ececec] cursor-pointer">
          <X width={"12px"} height={"12px"} color="#999999" strokeWidth={3} />
        </div>
      </div>
    </div>
  );
};

export default Login;
