"use client";
import { type FC } from "react";
import { Box } from "../atoms/Box";
import { Typography } from "../atoms/Typography";
import WeekCardItem, { type WeekCardItemProps } from "../atoms/WeekCardItem";

type WeekCard = {
  title: string;
  description: string;
  items: WeekCardItemProps[];
  isExpand: boolean;
  expandOnClick: () => void;
};

const WeekCard: FC<WeekCard> = ({
  title,
  description,
  items = [],
  isExpand,
  expandOnClick,
}) => {
  return (
    <Box
      display="flex"
      direction="col"
      gap={3}
      className="px-4 py-6 w-full border border-[#e9e8e8] bg-white"
    >
      <Box
        display="flex"
        justifyContent="between"
        alignItems="center"
        className="w-full"
      >
        <Typography className="text-black" size="h4" variant="h6">
          {title}
        </Typography>
        <button onClick={expandOnClick} className="cursor-pointer text-[2rem]">
          {isExpand ? "-" : "+"}
        </button>
      </Box>
      <div
        className="grid w-full transition-[grid-template-rows] duration-300 ease-in-out"
        style={{ gridTemplateRows: isExpand ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <Typography className="text-[#909494]" size="body1" variant="p">
            {description}
          </Typography>
          <ol className="list-none w-full mt-4">
            {items.map((item, index) => (
              <WeekCardItem key={`${item.title} ${index}`} {...item} />
            ))}
          </ol>
        </div>
      </div>
    </Box>
  );
};

export default WeekCard;
