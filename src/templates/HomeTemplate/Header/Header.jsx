import React, { useEffect, useState } from "react";
import brand from "../../../assets/images/brand-logo.png";
import ticket from "../../../assets/images/ticket.webp";
import { useDispatch, useSelector } from "react-redux";
import { ChevronDown, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { path } from "../../../hooks/path";
import Gstar from "../../../assets/images/join-member-Gstar.svg";
import { movieService } from "../../../services/movie.service";
import { setMovies } from "../../../redux/slice/movie.slice";
import Login from "../../AuthTemplate/Login";
import SignUp from "../../AuthTemplate/SignUp";

const Header = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [authMode, setAuthMode] = useState("login");
  const movies = useSelector((state) => state.movie.list);
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
          <Link to={path.homeTemplate}>
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
                              <div className="w-[140px] py-2 ">
                                <img
                                  src={item.poster}
                                  alt=""
                                  className="w-full h-[200px] object-fill rounded-[4px]"
                                />
                                <span className="text-sm font-semibold mt-2 line-clamp-2">
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
                              <div className="w-[140px] py-2">
                                <img
                                  src={item.banner}
                                  alt=""
                                  className="w-[140px] h-[200px] rounded-[4px]"
                                />
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
              onClick={() => {
                setAuthMode("login");
                setOpen(true);
              }}
              className="text-[#777777] hover:text-[#f26b37] transition-all duration-300"
            >
              Đăng Nhập
            </Link>
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
