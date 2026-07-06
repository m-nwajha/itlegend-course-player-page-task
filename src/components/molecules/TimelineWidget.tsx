"use client";
import { CN } from "@/utils/className";
import { Box } from "../atoms/Box";
import { Typography } from "../atoms/Typography";
import { useEffect, useRef, useState } from "react";

const TimelineWidget = ({ progress = 50 }: { progress?: number }) => {
  const safeProgress = Math.min(Math.max(progress, 0), 100);
  const [progressState, setProgressState] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let count = 0;
    const progressTimeInterval = setInterval(() => {
      setProgressState(count);
      count += 1;
      if (count > safeProgress) {
        clearInterval(progressTimeInterval);
      }
    }, 10);

    return () => clearInterval(progressTimeInterval);
  }, [hasStarted, safeProgress]);

  return (
    <Box
      display="flex"
      direction="col"
      gap={12}
      alignItems="start"
      className="w-full"
    >
      <Typography variant="h3" size="h3" className="font-[500]">
        Topics for This Course
      </Typography>

      <div ref={containerRef} className="w-full relative">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          style={{ left: `${progressState}%` } as React.CSSProperties}
          className={CN(
            `absolute -top-[40px] -translate-x-1/2`,
            "h-[25px] w-[25px] rounded-full border border-[#c8c8c8] bg-white",
            "text-[0.7rem] text-[#5f68a0] whitespace-nowrap",
          )}
        >
          You
        </Box>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          fill="#c8c8c8"
          viewBox="0 0 16 16"
          style={{ left: `${progressState}%` } as React.CSSProperties}
          className={CN(`absolute -top-[15px] -translate-x-1/2`)}
        >
          <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
        </svg>

        <Box className="bg-[#e6e6e6] rounded-[50px] w-full h-[5px]">
          <Box
            style={{ width: `${progressState}%` } as React.CSSProperties}
            className={CN(`bg-[#6abd8a] rounded-[50px] h-[5px]`)}
          />
        </Box>

        <Typography
          style={{ left: `${progressState}%` } as React.CSSProperties}
          className={CN(
            `absolute bottom-[-23px] -translate-x-1/2`,
            "text-[#535d9a] text-[0.8rem] whitespace-nowrap",
          )}
        >
          {progressState}%
        </Typography>
      </div>
    </Box>
  );
};

export default TimelineWidget;
