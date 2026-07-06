"use client";
import { CN } from "@/utils/className";
import { CSSProperties, FC } from "react";
import { ReactNode } from "react";

export type TypographyProps = {
  children: ReactNode;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
  size?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "body1"
    | "body2"
    | "span1"
    | "span2";
  className?: string;
  style?: CSSProperties;
};
const TYPOGRAPHY_SIZE = {
  h1: "text-[2.3rem]",
  h2: "text-[1.9rem]",
  h3: "text-[1.5rem]",
  h4: "text-[1.3rem]",
  h5: "text-[1.1rem]",
  h6: "text-[1rem]",
  body1: "text-[1rem]",
  body2: "text-[0.9rem]",
  span1: "text-[0.8rem]",
  span2: "text-[0.6rem]",
};

export const Typography: FC<TypographyProps> = ({
  children,
  variant = "p",
  size = "body1",
  className,
  style
}) => {
  const CreateTypography = variant;
  return (
    <CreateTypography className={CN(TYPOGRAPHY_SIZE[size], className)} style={style}>
      {children}
    </CreateTypography>
  );
};
