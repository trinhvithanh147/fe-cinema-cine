import React from "react";

const ButtonCustome = ({
  value,
  children,
  className,
  onClick,
  type = "button",
}) => {
  return (
    <button
      type={type}
      value={value}
      className={`w-[120px] h-[40px] px-5 py-[10px] rounded-[4px] ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonCustome;
