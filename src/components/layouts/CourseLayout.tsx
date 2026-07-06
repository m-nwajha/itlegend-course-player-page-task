"use client";

import Breadcrumb from "../molecules/Breadcrumb";

const CourseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Breadcrumb />
      <main>{children}</main>
    </>
  );
};

export default CourseLayout;
