import React, { useState } from "react";
import icon_login from "../../assets/images/icon-login.fbbf1b2d.svg";
import { X } from "lucide-react";
import InputCustome from "../../components/InputCustome/InputCustome";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { userService } from "../../services/user.service";
const SignUp = ({ onClose, onSwitchLogin }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const [phone, setPhone] = useState("");
  const [birthday, setBirthday] = useState(null);
  const [sex, setSex] = useState("male");
  const [error, setError] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPhone, setErrorPhone] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (fullName.trim() == "") {
      setErrorName("Họ và tên không được để trống");
    }
    if (email.trim() == "") {
      setErrorEmail("Email không được để trống");
    }
    if (phone.trim() == "") {
      setErrorPhone("Số điện thoại không được để trống");
    }

    if (password.trim() == "") {
      setErrorPassword("Mật khẩu không được để trống");
    }

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
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
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
            type="String"
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
            name="birthday"
            autoComplete="chrome-off"
            selected={birthday}
            onChange={(date) => setBirthday(date)}
            dateFormat="yyyy-MM-dd"
            placeholderText="Chọn ngày sinh"
            onKeyDown={(e) => e.preventDefault()}
            wrapperClassName="w-full"
            className="w-full h-9 border border-[#e5e7eb] px-2 rounded-md focus:outline-blue-300"
          />
        </div>
        <div className="w-full flex items-start flex-col">
          <span className="text-[10px]">Mật khẩu</span>
          <InputCustome
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={"Nhập Mật khẩu"}
            type="password"
            className="w-full h-9 border border-[#e5e7eb]  focus:outline-blue-300 bg-transparent px-2 rounded-md text-[16px] font-semibold"
          />
        </div>
        <div className="w-full flex items-start flex-col">
          <span className="text-[10px]">Nhập lại mật khẩu</span>
          <InputCustome
            value={repassword}
            onChange={(e) => setRePassword(e.target.value)}
            placeholder={"Nhập lại mật khẩu"}
            type="password"
            className="w-full h-9 border border-[#e5e7eb]  focus:outline-blue-300 bg-transparent px-2 rounded-md text-[16px] font-semibold"
          />
          <span className="text-sm text-red-500">{error}</span>
        </div>

        <div className="w-full flex items-start flex-row mt-2 gap-1">
          <InputCustome type="checkbox" className="w-4 h-4 shrink-0" />
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
          className="w-full h-[41px] mt-5 bg-brand text-white rounded-md hover:bg-[#e38601] hover:opacity-90 cursor-pointer transition-all duration-300"
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
