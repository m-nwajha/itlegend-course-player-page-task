"use client";
import Link from "next/link";
import { FC, useState } from "react";
import { Box } from "./Box";
import Badge from "./Badge";
import PDFPopup from "../molecules/PDFPopup";
import ExamPopup, { Question } from "../molecules/ExamPopup";
export type WeekCardItemProps = {
  title: string;
  href?: string;
  isLocked?: boolean;
  qouestionCount?: number;
  minuteCount?: number;
  isPopup?: boolean;
  typePopup?: "pdf" | "exam";
  filePDF?: string;
  questions?: Question[];
};
const WeekCardItem: FC<WeekCardItemProps> = ({
  title = "Introduction to React",
  href,
  isLocked,
  qouestionCount,
  minuteCount,
  isPopup = false,
  typePopup = "pdf",
  filePDF = "/assets/pdfs/Mohamed-ALNawjha.pdf",
  questions,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <li className="py-4 border-t border-[#ebebeb] w-full flex items-center justify-between gap-2">
        <Link
          href={href || "#"}
          onClick={() => {
            if (isPopup) {
              setOpen(true);
            }
          }}
          className="flex items-center gap-2 text-[#535050] shrink-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M7.5 5.5a.5.5 0 0 0-1 0v.634l-.549-.317a.5.5 0 1 0-.5.866L6 7l-.549.317a.5.5 0 1 0 .5.866l.549-.317V8.5a.5.5 0 1 0 1 0v-.634l.549.317a.5.5 0 1 0 .5-.866L8 7l.549-.317a.5.5 0 1 0-.5-.866l-.549.317zm-2 4.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z" />
            <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
          </svg>
          <span className="max-w-[260px]">{title}</span>
        </Link>

        {isLocked ? (
          <div className="relative group inline-flex shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="shrink-0 cursor-pointer"
            >
              <path
                fillRule="evenodd"
                d="M8 0a4 4 0 0 1 4 4v2.05a2.5 2.5 0 0 1 2 2.45v5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 13.5v-5a2.5 2.5 0 0 1 2-2.45V4a4 4 0 0 1 4-4M4.5 7A1.5 1.5 0 0 0 3 8.5v5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 11.5 7zM8 1a3 3 0 0 0-3 3v2h6V4a3 3 0 0 0-3-3"
              />
            </svg>

            <span className="pointer-events-none absolute right-full top-1/2 -translate-y-1/2 mr-2 whitespace-nowrap rounded bg-gray-900 px-2 py-1 text-xs text-white opacity-0 scale-95 transition-all duration-150 group-hover:opacity-100 group-hover:scale-100 z-10">
              Locked lesson
              <span className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900" />
            </span>
          </div>
        ) : (
          <Box
            display="flex"
            className="flex-wrap gap-2 flex-1 min-w-0 justify-end"
          >
            {questions && (
              <Badge title={`${questions?.length} question`} variant="success" />
            )}
            {minuteCount !== undefined && (
              <Badge title={`${minuteCount} minutes`} variant="danger" />
            )}
          </Box>
        )}
      </li>
      {typePopup == "pdf" && (
        <PDFPopup file={filePDF} open={open} onClose={() => setOpen(false)} />
      )}
      {typePopup == "exam" && (
        <ExamPopup
          questions={questions}
          minuteCount={minuteCount}
          open={open}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default WeekCardItem;
