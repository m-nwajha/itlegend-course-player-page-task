"use client";

import Image from "next/image";
import { Typography } from "./Typography";
import { Box } from "./Box";

export type CommentItemProps = {
  id?: number;
  name: string;
  date: string;
  comment: string;
  avatar: string;
};

const CommentsItem = ({ name, date, comment, avatar }: CommentItemProps) => {
  return (
    <div className="py-4 border-b border-[#efefef] w-full flex items-center justify-start gap-8">
      <Image
        src={avatar}
        alt={name}
        width={70}
        height={70}
        className="rounded-full"
      />
      <Box display="flex" direction="col" alignItems="start" gap={3}>
        <Typography variant="h6" size="h4" className="text-[#535050]">
          {name}
        </Typography>
        <Typography variant="span" size="body2" className="text-[#b7b7b7]">
          {date}
        </Typography>
        <Typography variant="p" size="body1" className="text-[#999797]">
          {comment}
        </Typography>
      </Box>
    </div>
  );
};

export default CommentsItem;
