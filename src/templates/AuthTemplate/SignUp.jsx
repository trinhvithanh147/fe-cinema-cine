import React, { useState } from "react";
import icon_login from "../../assets/images/icon-login.fbbf1b2d.svg";
import { Eye, EyeOff, X } from "lucide-react";
import InputCustome from "../../components/InputCustome/InputCustome";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { userService } from "../../services/user.service";
import "./signUp.scss";
import { toast } from "react-toastify";
const SignUp = ({ onClose, onSwitchLogin }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const [phone, setPhone] = useState("");
  const [birthday, setBirthday] = useState(null);
  const [sex, setSex] = useState("male");
  const [error, setError] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [reshowPassword, setReShowPassword] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password != repassword) {
      setError("Mật khẩu không trùng khớp");
      return;
    }
    const payload = {
      full_name: fullName,
      email: email,
      phone: phone,
      sex: sex,
      birthday: birthday,
      password: password,
    };

    userService
      .create(payload)
      .then((res) => {
        toast.success(res.data.message || "Đăng nhập thành công");
        setTimeout(() => {
          onSwitchLogin?.();
        }, 1500);
      })
      .catch((err) => {
        toast.error(err.response.data);
      });
  };
  return (
    <div className="max-w-[400px] px-6 py-10 bg-white relative rounded-md">
      <div className="flex  flex-col">
        <img src={icon_login} alt="" width={"190px"} className="mx-20" />
        <span className="text-lg font-bold not-italic py-2 w-full text-center">
          Đăng Ký Tài Khoản
        </span>
        <div className="w-full flex items-start flex-col">
          <span className="text-[10px]">Họ và tên</span>
          <InputCustome
            placeholder={"Nhập Họ và Tên"}
            type="text"
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
            className="w-full h-9 border focus:outline-blue-300 mb-1  border-[#e5e7eb] px-2 bg-transparent rounded-md text-[16px] font-semibold"
          />
        </div>
        <div className="w-full flex items-start flex-col">
          <span className="text-[10px]">Email</span>
          <InputCustome
            placeholder={"Nhập email"}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="w-full h-9 border border-[#e5e7eb]  focus:outline-blue-300 bg-transparent px-2 rounded-md text-[16px] font-semibold"
          />
        </div>
        <div className="w-full flex items-start flex-col">
          <span className="text-[10px]">Số điện thoại</span>
          <InputCustome
            placeholder={"Nhập Số điện thoại"}
            type="text"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            className="w-full h-9 border border-[#e5e7eb]  focus:outline-blue-300 bg-transparent px-2 rounded-md text-[16px] font-semibold"
          />
        </div>
        <div className="w-full flex items-start flex-row gap-3 mt-1">
          <div className="flex items-center gap-2">
            <InputCustome
              type="radio"
              name="sex"
              value={"male"}
              checked={sex == "male"}
              onChange={(e) => setSex(e.target.value)}
            />
            <span>Nam</span>
          </div>
          <div className="flex items-center gap-2">
            <InputCustome
              type="radio"
              name="sex"
              value={"female"}
              checked={sex == "female"}
              onChange={(e) => setSex(e.target.value)}
            />
            <span>Nữ</span>
          </div>
        </div>
        <div className="w-full flex items-start flex-col">
          <span className="text-[10px]">Ngày sinh</span>
          <DatePicker
            selected={birthday}
            onChange={(date) => setBirthday(date)}
            dateFormat="dd/MM/yyyy"
            placeholderText="Ngày/Tháng/Năm"
            onKeyDown={(e) => e.preventDefault()}
            wrapperClassName="w-full"
            className="w-full h-9 border border-[#e5e7eb] px-2 rounded-md focus:outline-blue-300"
          />
        </div>
        <div className="w-full flex items-start flex-col">
          <span className="text-[10px]">Mật khẩu</span>
          <div className="relative w-full">
            <InputCustome
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={"Nhập Mật khẩu"}
              type={showPassword ? "text" : "password"}
              className="w-full h-9 border border-[#e5e7eb]  focus:outline-blue-300 bg-transparent px-2 rounded-md text-[16px] font-semibold"
            />
            {showPassword ? (
              <Eye
                width={"20px"}
                height={"20px"}
                onClick={() => setShowPassword(false)}
                className="absolute top-0 right-2 translate-y-1/2"
              />
            ) : (
              <EyeOff
                width={"20px"}
                height={"20px"}
                onClick={() => setShowPassword(!false)}
                className="absolute top-0 right-2 translate-y-1/2"
              />
            )}
          </div>
        </div>
        <div className="w-full flex items-start flex-col">
          <span className="text-[10px]">Nhập lại mật khẩu</span>
          <div className="relative w-full">
            <InputCustome
              value={repassword}
              onChange={(e) => setRePassword(e.target.value)}
              placeholder={"Nhập lại mật khẩu"}
              type={reshowPassword ? "text" : "password"}
              className="w-full h-9 border border-[#e5e7eb]  focus:outline-blue-300 bg-transparent px-2 rounded-md text-[16px] font-semibold"
            />
            {reshowPassword ? (
              <Eye
                width={"20px"}
                height={"20px"}
                onClick={() => setReShowPassword(false)}
                className="absolute top-0 right-2 translate-y-1/2"
              />
            ) : (
              <EyeOff
                width={"20px"}
                height={"20px"}
                onClick={() => setReShowPassword(!false)}
                className="absolute top-0 right-2 translate-y-1/2"
              />
            )}
          </div>
          <span className="text-sm text-red-500">{error}</span>
        </div>

        <div className="w-full flex items-start flex-row mt-2 gap-1">
          <InputCustome
            checked={isActive}
            onChange={(e) => setIsActive(e.target.checked)}
            type="checkbox"
            className="w-4 h-4 shrink-0"
          />
          <p className="text-[11px] text-[#4a4a4a] font-bold">
            Bằng việc đăng ký tài khoản, tôi đồng ý với{" "}
            <Link className="text-[#034ea2] italic"> Điều khoản dịch vụ </Link>
            và
            <Link className="text-[#034ea2] italic"> Chính sách bảo mật </Link>
            của Galaxy Cinema.
          </p>
        </div>
        <button
          onClick={handleSubmit}
          disabled={!isActive}
          className={`w-full h-[41px] mt-5  rounded-md  ${isActive ? "bg-brand text-white hover:opacity-90 hover:bg-[#e38601] cursor-pointer transition-all duration-300 " : "bg-[#f26b38] text-white opacity-80 cursor-not-allowed "}`}
        >
          HOÀN THÀNH
        </button>
        <div className="border-t-2 pt-4 border-[#e7e5eb]">
          <span className="text-center block text-[#4a4a4a]">
            Bạn đã có tài khoản?
          </span>
          <Link
            onClick={onSwitchLogin}
            className=" text-center border border-[#ff953f] px-6 pt-[6px] pb-[6px] flex items-center justify-center text-brand rounded-md hover:bg-[#e38601] hover:text-white transition-all duration-300"
          >
            Đăng nhập
          </Link>
        </div>
      </div>
      <div className="absolute top-[14px] right-[14px]">
        <div
          onClick={onClose}
          className="w-6 h-6 flex items-center justify-center rounded-full border border-[#e7e5eb] bg-[#ececec] cursor-pointer"
        >
          <X width={"12px"} height={"12px"} color="#999999" strokeWidth={3} />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
