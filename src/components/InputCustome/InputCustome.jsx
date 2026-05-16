import React from "react";

const InputCustome = ({
  value,
  onChange,
  className,
  type = "text",
  placeholder,
}) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      className={className}
      onChange={onChange}
      value={value}
    />
  );
};

export default InputCustome;
