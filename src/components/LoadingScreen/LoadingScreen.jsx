import React from "react";
import loading from "../../assets/images/loading-brand.gif";
const LoadingScreen = () => {
  return (
    <div className="fixed inset-0  z-[999]  bg-[#e7e7e7] flex items-center justify-center flex-col ">
      <img src={loading} alt="" width={"96px"} />
      <span className="text-white">C h ờ x í u n h e...</span>
    </div>
  );
};

export default LoadingScreen;
