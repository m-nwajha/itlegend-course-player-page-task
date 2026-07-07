"use client";

import { Box } from "../atoms/Box";
import CourseActionsBar from "../molecules/CourseActionsBar";
import CourseMaterials from "../molecules/CourseMaterials";
import CoursePlayer from "../molecules/CoursePlayer";

const LeftStideCourse = () => {
  return (
    <Box display="flex" direction="col" gap={10} className="w-full p-1 lg:p-5">
      <CoursePlayer />
      <CourseActionsBar />
      <CourseMaterials />
    </Box>
  );
};

export default LeftStideCourse;
