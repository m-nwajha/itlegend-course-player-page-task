import CourseDetails from "@/components/pages/CourseDetails";
import { notFound } from "next/navigation";

const ExPathsAvailable = ["1", "2", "3", "4", "5"];
export default async function CourseDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;

  if (!ExPathsAvailable.includes(id)) notFound();

  return <CourseDetails courseId={id} />;
}
