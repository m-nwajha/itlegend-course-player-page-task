"use client";
import { useState } from "react";
import { Box } from "../atoms/Box";
import TimelineWidget from "../molecules/TimelineWidget";
import WeekCard from "../molecules/WeekCard";
import { COURSE_WEEKS } from "@/constants/courseWeeks";
import { WeekCardItemProps } from "../atoms/WeekCardItem";

const RightSideCourse = () => {
  const [weeks, setWeeks] = useState(COURSE_WEEKS);
  const handleExpand = (id: number) => {
    setWeeks((prevState) =>
      prevState.map((week) => ({
        ...week,
        isExpanded: week.id === id ? !week.isExpanded : false,
      })),
    );
  };
  return (
    <Box display="flex" direction="col" gap={10} className="w-full p-1 lg:p-5">
      <TimelineWidget progress={50} />
      {weeks.map((weekItem) => (
        <WeekCard
          key={weekItem.id}
          title={weekItem.title}
          description={weekItem.description}
          items={weekItem.items as WeekCardItemProps[]}
          isExpand={weekItem.isExpanded}
          expandOnClick={() => handleExpand(weekItem.id)}
        />
      ))}
    </Box>
  );
};

export default RightSideCourse;
