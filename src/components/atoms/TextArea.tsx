import { CN } from "@/utils/className";
import { FC } from "react";

type TextAreaProps = {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
  placeholder?: string;
  disabled?: boolean;
};

const TextArea: FC<TextAreaProps> = ({
  value,
  onChange,
  className,
  placeholder = "Type your comment...",
  disabled = false,
}) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      className={CN(
        "w-full h-[160px] p-5 shadow-2xl shadow-[#bcbdbe75] border border-[#e5e7eb48] bg-white rounded-[5px] text-[1rem] resize-none focus:outline-none focus:border-primary transition-colors",
        className
      )}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
};

export default TextArea;