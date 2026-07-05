'use client';

import Breadcrumb from '../molecules/Breadcrumb';

const CourseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Breadcrumb />
      {children}
    </>
  );
};

export default CourseLayout