import { CN } from "@/utils/className";
import { FC, ReactNode } from "react";

type ButtonProps = {
  label: string | ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
};

const Button: FC<ButtonProps> = ({
  label,
  variant = "primary",
  className,
  type = "button",
  onClick,
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={CN(
        "flex items-center justify-center h-10 px-5 uppercase rounded-[5px] text-[1rem] transition-colors",
        {
          "bg-[#41b69d] text-white hover:bg-[#319e87] disabled:bg-gray-300 disabled:cursor-not-allowed cursor-pointer":
            variant === "primary",
          "bg-[#f07674] text-white hover:bg-[#e36663] disabled:bg-gray-100 disabled:cursor-not-allowed cursor-pointer":
            variant === "secondary",
        },
        className
      )}
    >
      {label}
    </button>
  );
};

export default Button;