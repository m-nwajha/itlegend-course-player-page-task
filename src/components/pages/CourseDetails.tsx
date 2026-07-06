"use client";

import { Container } from "../atoms/Container";
import { Grid } from "../atoms/Grid";
import { useBreadcrumb } from "../Contexts/BreadcrumbContext";
import { useEffect } from "react";
import RightSideCourse from "../organisms/RightSideCourse";
import PDFPopup from "../molecules/PDFPopup";

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
  return (
    <Container>
      <Grid lg={3} md={1} sm={1}>
        <div className="lg:col-span-2 h-[200vh]">
        </div>
        <div className="lg:col-span-1">
          <RightSideCourse />
        </div>
      </Grid>
    </Container>
  );
};

export default CourseDetails;
