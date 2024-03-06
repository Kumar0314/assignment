import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[12px]",
};
const variants = {
  fill: {
    yellow_900: "bg-yellow-900 text-white-A700",
    white_A700: "bg-white-A700 text-blue-500",
    blue_500: "bg-blue-500 text-white-A700",
    gray_100: "bg-gray-100 text-light_blue-900",
  },
};
const sizes = {
  lg: "h-[36px] pl-4 pr-[25px] text-[13px]",
  md: "h-[34px] px-[7px] text-base",
  sm: "h-[28px] px-1.5 text-base",
  xl: "h-[48px] px-[35px] text-base",
  xs: "h-[28px] px-[9px] text-[13px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "round",
  variant = "fill",
  size = "xl",
  color = "blue_500",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["yellow_900", "white_A700", "blue_500", "gray_100"]),
};

export { Button };
