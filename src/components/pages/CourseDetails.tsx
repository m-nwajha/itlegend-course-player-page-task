"use client";

import { Container } from "../atoms/Container";
import { Grid } from "../atoms/Grid";
import { useBreadcrumb } from "../Contexts/BreadcrumbContext";
import { useEffect } from "react";
import RightSideCourse from "../organisms/RightSideCourse";
import LeftStideCourse from "../organisms/LeftStideCourse";
import CommentsSection from "../molecules/CommentsSection";

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
        <div className="lg:col-span-2">
          <LeftStideCourse />
        </div>
        <div className="lg:col-span-1">
          <RightSideCourse />
        </div>
        <div className="lg:col-span-2">
          <CommentsSection />
        </div>
      </Grid>
    </Container>
  );
};

export default CourseDetails;
