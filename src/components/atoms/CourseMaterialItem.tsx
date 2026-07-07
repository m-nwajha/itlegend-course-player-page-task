import Link from "next/link";
import { Typography } from "./Typography";

export type CourseMaterialItemProps = {
  id?: number;
  icon: React.ReactNode;
  title: string;
  value: string;
};
const CourseMaterialItem = ({
  icon,
  title,
  value,
}: CourseMaterialItemProps) => {
  return (
    <div className="py-4 border-t border-[#efefef] w-full flex items-center justify-between gap-2">
      <Link
        href="#"
        className="flex items-center gap-2 text-[#535050] shrink-0"
      >
        {icon}
        <span className="max-w-[260px]">{title}</span>
      </Link>
      <Typography variant="span" size="body2">
        {value}
      </Typography>
    </div>
  );
};

export default CourseMaterialItem;
