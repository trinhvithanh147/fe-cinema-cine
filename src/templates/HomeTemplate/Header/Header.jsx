import React, { useEffect, useState } from "react";
import brand from "../../../assets/images/brand-logo.png";
import ticket from "../../../assets/images/ticket.webp";
import { useDispatch, useSelector } from "react-redux";
import {
  ChevronDown,
  CornerDownLeft,
  ListOrdered,
  Search,
  SquareUser,
  Star,
  Ticket,
  User,
  UserRound,
} from "lucide-react";
import { Link } from "react-router-dom";
import { path } from "../../../hooks/path";
import Gstar from "../../../assets/images/join-member-Gstar.svg";
import { movieService } from "../../../services/movie.service";
import { setMovies } from "../../../redux/slice/movie.slice";
import Login from "../../AuthTemplate/Login";
import SignUp from "../../AuthTemplate/SignUp";
import huy_chuong from "../../../assets/images/huy_chuong.png";
import LoadingScreen from "../../../components/LoadingScreen/LoadingScreen";

const Header = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [authMode, setAuthMode] = useState("login");
  const movies = useSelector((state) => state.movie.list);
  const users = JSON.parse(localStorage.getItem("users"));
  const [loading, setLoading] = useState(false);
  const handleLogout = () => {
    setLoading(true);

    setTimeout(() => {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("users");
      window.location.reload();
    }, 1000);
  };
  const handleLoading = () => {
    setLoading(true);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };
  useEffect(() => {
    movieService
      .getAll()
      .then((res) => {
        dispatch(setMovies(res.data.metaData));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [movies.length]);
  console.log(movies);
  return (
    <header className="pt-3 pb-2">
      <div className="container-main">
        <div className=" flex items-center justify-between">
          <Link to={path.homeTemplate} onClick={handleLoading}>
            <img src={brand} alt="" className="w-[115px]" />
          </Link>
          <div className="px-5 text-text-primary">
            <div className="flex items-center gap-3">
              <Link className="py-7 mr-4">
                <img src={ticket} alt="" className="w-[112px]" />
              </Link>
              <div className="py-7 relative group cursor-pointer">
                <Link className="flex items-center hover:text-[#f26b37] transition-all duration-300 ">
                  Phim <ChevronDown height={"10px"} />
                </Link>
                <div className="absolute top-[65px] -left-[50px] z-100 hidden group-hover:block">
                  <div className="min-w-[250px] bg-white  px-6 py-4 shadow-[0_6px_16px_0_rgba(0,0,0,.08),0_3px_6px_-4px_rgba(0,0,0,.12),0_9px_28px_8px_rgba(0,0,0,.05)]">
                    <div>
                      <span className="border-r-4 border-[#034ea2]"></span>
                      <span className="uppercase pl-2 text-[#333333] text-[16px] font-normal">
                        phim đang chiếu
                      </span>
                      <div className="flex items-start gap-5">
                        {movies
                          .filter((item) => item.status == "đang chiếu")
                          .slice(0, 4)
                          .map((item, index) => {
                            return (
                              <div className="w-[140px] py-2 overflow-hidden">
                                <div className="relative group/poster">
                                  <img
                                    src={item.poster}
                                    alt=""
                                    className="w-[140px] h-[200px] rounded-[4px]"
                                  />
                                  <div className="absolute inset-0 bg-[#00000080] opacity-0 invisible group-hover/poster:visible group-hover/poster:opacity-100 group-hover/poster:rounded-[4px]  transition-all duration-300">
                                    <div className="w-full h-full flex items-center justify-center ">
                                      <div className="w-[120px] h-[40px]  py-[10px] px-[20px] hover:bg-[#fb9440] bg-[#f26b38] rounded-md">
                                        <div className="flex items-center gap-2 text-white">
                                          <Ticket />
                                          <span>Mua vé</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="absolute right-[-5.5px] bottom-[40px] bg-[#00000066]  skew-x-[25deg] ">
                                    <div className="flex items-center py-[2px] px-[16px] skew-x-[-25deg] ">
                                      <Star
                                        fill="#fde047"
                                        className="w-[20px] mr-5 stroke-0"
                                      />
                                      <span className="text-[18px] text-white">
                                        {item.rating}
                                      </span>
                                    </div>
                                  </div>
                                  {item.age != "P" && (
                                    <div className="absolute right-[4px] bottom-2 ">
                                      <span className="text-white bg-[#f58020] px-1 py-[2px] font-bold rounded-md">
                                        T{item.age}
                                      </span>
                                    </div>
                                  )}
                                </div>

                                <span className="text-sm font-semibold mt-2 block line-clamp-2">
                                  {item.name}
                                </span>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                    <div>
                      <span className="border-r-4 border-[#034ea2]"></span>
                      <span className="uppercase pl-2 text-[#333333] text-[16px] font-normal">
                        phim sắp chiếu
                      </span>
                      <div className="flex items-start gap-5">
                        {movies
                          .filter((item) => item.status == "sắp chiếu")
                          .slice(0, 4)
                          .map((item, index) => {
                            return (
                              <div className="w-[140px] py-2 overflow-hidden">
                                <div className="relative group/poster">
                                  <img
                                    src={item.banner}
                                    alt=""
                                    className="w-[140px] h-[200px] rounded-[4px]"
                                  />
                                  <div className="absolute inset-0 bg-[#00000080] opacity-0 group-hover/poster:opacity-100 group-hover/poster:rounded-[4px]  transition-all duration-300">
                                    <div className="w-full h-full flex items-center justify-center ">
                                      <div className="w-[120px] h-[40px]  py-[10px] px-[20px] hover:bg-[#fb9440] bg-[#f26b38] rounded-md">
                                        <div className="flex items-center gap-2 text-white">
                                          <Ticket />
                                          <span>Mua vé</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="absolute right-[-5.5px] bottom-[40px] bg-[#00000066]  skew-x-[25deg] ">
                                    <div className="flex items-center py-[2px] px-[16px] skew-x-[-25deg]">
                                      <Star
                                        fill="#fde047"
                                        className="w-[20px]  mr-5 stroke-0"
                                      />
                                      <span className="text-[18px] text-white">
                                        {item.rating}
                                      </span>
                                    </div>
                                  </div>
                                  {item.age != "P" && (
                                    <div className="absolute right-[4px] bottom-2 ">
                                      <span className="text-white bg-[#f58020] px-1 py-[2px] font-bold rounded-md">
                                        T{item.age}
                                      </span>
                                    </div>
                                  )}
                                </div>

                                <span className="text-sm font-semibold mt-2 block line-clamp-2">
                                  {item.name}
                                </span>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                    <div>
                      <span className="border-r-4 border-[#034ea2]"></span>
                      <span className="uppercase pl-2 text-[#333333] text-[16px] font-normal">
                        phim IMAX
                      </span>
                      <div className="flex items-start gap-5">
                        {movies
                          .filter((item) => item.status == "sắp chiếu")
                          .slice(0, 4)
                          .map((item, index) => {
                            return (
                              <div className="w-[140px] py-2">
                                <img
                                  src={item.banner}
                                  alt=""
                                  className="w-[140px] h-[200px]"
                                />
                                <span className="text-sm font-semibold mt-2 block line-clamp-2">
                                  {item.name}
                                </span>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative group/star">
                <Link className="py-7 flex items-center hover:text-[#f26b37] transition-all duration-300">
                  Star Shop
                  <ChevronDown height={"10px"} />
                </Link>
                <div className="absolute top-[65px] -left-[45px] z-[999]  hidden group-hover/star:block">
                  <div className="min-w-[200px] border bg-white border-white rounded-md  shadow-[0_6px_16px_0_rgba(0,0,0,0.08),_0_3px_6px_-4px_rgba(0,0,0,0.12),_0_9px_28px_8px_rgba(0,0,0,0.05)] ">
                    <Link className="flex items-center justify-center py-2 hover:text-brand hover:bg-[#fb770b1a] hover:border-l-4 border-brand transition-all  duration-200">
                      Movie-verse
                    </Link>
                    <Link className="flex items-center justify-center py-2 hover:text-brand hover:bg-[#fb770b1a] hover:border-l-4 border-brand transition-all  duration-200">
                      Fan Wibu
                    </Link>
                    <Link className="flex items-center justify-center py-2 hover:text-brand hover:bg-[#fb770b1a] hover:border-l-4 border-brand transition-all  duration-200">
                      Inner Child
                    </Link>
                    <Link className="flex items-center justify-center py-2 hover:text-brand hover:bg-[#fb770b1a] hover:border-l-4 border-brand transition-all  duration-200">
                      Yolo
                    </Link>
                  </div>
                  '
                </div>
              </div>
              <div className="relative group/hub">
                <Link className="py-7 flex items-center hover:text-[#f26b37] transition-all duration-300">
                  Góc điện ảnh
                  <ChevronDown height={"10px"} />
                </Link>
                <div className="absolute top-[65px] -left-[45px] z-[999]  hidden group-hover/hub:block">
                  <div className="min-w-[200px] border bg-white border-white rounded-md  shadow-[0_6px_16px_0_rgba(0,0,0,0.08),_0_3px_6px_-4px_rgba(0,0,0,0.12),_0_9px_28px_8px_rgba(0,0,0,0.05)] ">
                    <Link className="flex items-center justify-center py-2 hover:text-brand hover:bg-[#fb770b1a] hover:border-l-4 border-brand transition-all  duration-200">
                      Thể loại phim
                    </Link>
                    <Link className="flex items-center justify-center py-2 hover:text-brand hover:bg-[#fb770b1a] hover:border-l-4 border-brand transition-all  duration-200">
                      Diễn viên
                    </Link>
                    <Link className="flex items-center justify-center py-2 hover:text-brand hover:bg-[#fb770b1a] hover:border-l-4 border-brand transition-all  duration-200">
                      Đạo diễn
                    </Link>
                    <Link className="flex items-center justify-center py-2 hover:text-brand hover:bg-[#fb770b1a] hover:border-l-4 border-brand transition-all  duration-200">
                      Bình luận viên
                    </Link>
                    <Link className="flex items-center justify-center py-2 hover:text-brand hover:bg-[#fb770b1a] hover:border-l-4 border-brand transition-all  duration-200">
                      Góc điện ảnh
                    </Link>
                  </div>
                  '
                </div>
              </div>
              <div className="relative group/event">
                <Link className="py-7 flex items-center hover:text-[#f26b37] transition-all duration-300">
                  Sự kiện
                  <ChevronDown height={"10px"} />
                </Link>
                <div className="absolute top-[65px] -left-[45px] z-[999]  hidden group-hover/event:block">
                  <div className="min-w-[200px] border bg-white border-white rounded-md  shadow-[0_6px_16px_0_rgba(0,0,0,0.08),_0_3px_6px_-4px_rgba(0,0,0,0.12),_0_9px_28px_8px_rgba(0,0,0,0.05)] ">
                    <Link className="flex items-center justify-center py-2 hover:text-brand hover:bg-[#fb770b1a] hover:border-l-4 border-brand transition-all  duration-200">
                      Ưu đãi
                    </Link>
                    <Link className="flex items-center justify-center py-2 hover:text-brand hover:bg-[#fb770b1a] hover:border-l-4 border-brand transition-all  duration-200">
                      Phim hay tháng
                    </Link>
                  </div>
                  '
                </div>
              </div>
              <Link className="py-7 flex items-center hover:text-[#f26b37] transition-all duration-300">
                Rạp/Giá vé
                <ChevronDown height={"10px"} />
              </Link>
              <Link className="py-7 flex items-center hover:text-[#f26b37] transition-all duration-300">
                Rạp đặt biệt
              </Link>
            </div>
          </div>
          <div className="flex cursor-pointer relative group gap-4 items-center">
            {users ? (
              <div className="py-7 relative group ">
                <div className="w-10 h-10 rounded-full border-4 border-[#E9E9E2] bg-[#D0D0D0] flex items-center justify-center ">
                  <UserRound className="w-5 h-5 text-gray-400 " />
                  <div className="absolute top-20 left-0 z-50 hidden group-hover:block ">
                    <div className=" min-w-[220px] min-h-auto bg-white shadow-2xl  rounded-md">
                      <div className="flex items-center py-2 px-4 account hover:border-l-4 hover:text-brand hover:bg-[#fb770b1a] border-brand transition-all  duration-200">
                        <SquareUser className="w-4 h-4" />
                        <span className="ml-4">Tài khoản</span>
                      </div>
                      <div className="flex items-center py-2 px-4 account hover:border-l-4 hover:text-brand hover:bg-[#fb770b1a] border-brand transition-all  duration-200">
                        <ListOrdered className="w-4 h-4" />
                        <span className="ml-4">Lịch sử</span>
                      </div>
                      <div
                        onClick={handleLogout}
                        className="flex items-center py-2 px-4 account hover:border-l-4 hover:text-brand hover:bg-[#fb770b1a] border-brand transition-all  duration-200"
                      >
                        <CornerDownLeft className="w-4 h-4" />
                        <span className="ml-4">Đăng xuất</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                onClick={() => {
                  setAuthMode("login");
                  setOpen(true);
                }}
                className="text-[#777777] hover:text-[#f26b37] transition-all duration-300"
              >
                Đăng Nhập
              </Link>
            )}

            {open && (
              <div className="fixed inset-0 z-[999] bg-black/60 flex items-center justify-center min-w-full min-h-full">
                {
                  <div className="fixed inset-0 z-[999] bg-black/60 flex items-center justify-center min-w-full min-h-full">
                    {authMode === "login" ? (
                      <Login
                        onClose={() => setOpen(false)}
                        onSwitchSignUp={() => setAuthMode("signUp")}
                      />
                    ) : (
                      <SignUp
                        onClose={() => setOpen(false)}
                        onSwitchLogin={() => setAuthMode("login")}
                      />
                    )}
                  </div>
                }
              </div>
            )}
            {users ? (
              <>
                <div className="flex items-center gap-2">
                  <img src={huy_chuong} alt="" className="w-[20px] h-[30px]" />
                  <div className="flex flex-col">
                    <span className="text-[14px] text-[4A4A4A] font-bold">
                      {users?.full_name}
                    </span>
                    <span className="text-[10px] text-[#4A4A4A]">Star</span>
                  </div>
                </div>
              </>
            ) : (
              <Link>
                <img src={Gstar} alt="" width={"100px"} />
              </Link>
            )}
          </div>
        </div>
      </div>
      {loading && <LoadingScreen />}
    </header>
  );
};

export default Header;
