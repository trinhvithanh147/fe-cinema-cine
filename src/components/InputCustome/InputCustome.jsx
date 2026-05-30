import React from "react";

const InputCustome = ({
  value,
  onChange,
  className,
  type = "text",
  placeholder,
  ...props
}) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      className={className}
      onChange={onChange}
      value={value}
      {...props}
    />
  );
};

export default InputCustome;
