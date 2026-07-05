"use client";

import { useBreadcrumb } from "../Contexts/BreadcrumbContext";
import { useEffect } from "react";

const CourseDetails = () => {
  const { setBreadcrumb } = useBreadcrumb();
  useEffect(() => {
    setBreadcrumb({
      title: "Starting SEO as your Home",
      history: [
        { name: "Home", url: "/" },
        { name: "Courses", url: "/courses" },
        { name: "Course Details" },
      ],
    });
  }, [setBreadcrumb]);
  return <h1>Course Details</h1>;
};

export default CourseDetails;
