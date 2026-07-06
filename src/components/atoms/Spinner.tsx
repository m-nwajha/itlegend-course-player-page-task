"use client";
import { FC } from "react";
import { CN } from "@/utils/className";

type SpinnerProps = {
  size?: "sm" | "md" | "lg";
  className?: string;
};

const SPINNER_SIZE = {
  sm: "h-6 w-6 border-2",
  md: "h-10 w-10 border-3",
  lg: "h-16 w-16 border-4",
};

const Spinner: FC<SpinnerProps> = ({ size = "lg", className }) => {
  return (
    <div
      className={CN(
        "animate-spin rounded-full border-gray-300 border-t-[#41b69d]",
        SPINNER_SIZE[size],
        className
      )}
    />
  );
};

export default Spinner;