import { BreadcrumbProvider } from "@/components/Contexts/BreadcrumbContext";
import CourseLayout from "@/components/layouts/CourseLayout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <BreadcrumbProvider>
      <CourseLayout>{children}</CourseLayout>
    </BreadcrumbProvider>
  );
}
