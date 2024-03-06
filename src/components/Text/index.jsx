import React from "react";

const sizes = {
  xs: "text-[13px] font-normal leading-4",
  lg: "text-base font-normal leading-5",
  s: "text-sm font-normal leading-[17px]",
  "2xl": "text-[32px] font-normal leading-[39px]",
  "3xl": "text-5xl font-normal leading-[59px]",
  xl: "text-xl font-normal leading-[25px]",
  md: "text-[15px] font-normal leading-[19px]",
};

const Text = ({ children, className = "", as, size = "s", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-blue_gray-700 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
