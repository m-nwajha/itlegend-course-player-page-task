"use client";
import { CSSProperties, FC } from "react";

type BadgeType = {
  title: string;
  variant?: "success" | "danger";
  className?: string;
  style?: CSSProperties;
};
const Badge: FC<BadgeType> = ({ title, variant, className, style }) => {
  return (
    <span
      className={`uppercase text-[.8rem] px-2 py-3 rounded-[2px]  ${variant === "success" ? "bg-[#f2faf8] text-[#55bba5]" : "bg-[#fdf2f4] text-[#eb5c74]"} ${className}`}
      style={style}
    >
      {title}
    </span>
  );
};

export default Badge;
