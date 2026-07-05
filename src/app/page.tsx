import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center align-center h-[100vh] flex-col items-center gap-4 ">
      <h1 className="text-[2rem] font-[400]">Hello From ITLegend Course</h1>
      <Link className="px-6 py-4 rounded-[5px] bg-[#41b69d] text-white hover:opacity-90 duration-300" href={"/course/1"}>
        Go to Course Details Page
      </Link>
    </div>
  );
}
