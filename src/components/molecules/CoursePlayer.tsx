"use client";
import { useEffect, useRef, useState } from "react";
import Spinner from "../atoms/Spinner";
import Image from "next/image";

type CoursePlayerProps = {
  src?: string;
  poster?: string;
};

const CoursePlayer = ({
  src = "/assets/videos/isalm.mp4",
  poster = "/assets/images/video-bg.png",
}: CoursePlayerProps) => {
  const [hasStarted, setHasStarted] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isWide, setIsWide] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const objectUrlRef = useRef<string | null>(null);

  useEffect(() => {
    if (!hasStarted) return;

    let cancelled = false;

    setTimeout(() => {
      setError(false);
      setIsLoading(true);
    }, 0);

    fetch(src)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch video");
        return res.blob();
      })
      .then((blob) => {
        if (cancelled) return;
        const objectUrl = URL.createObjectURL(blob);
        objectUrlRef.current = objectUrl;
        setVideoUrl(objectUrl);
        setIsLoading(false);
      })
      .catch(() => {
        if (cancelled) return;
        setError(true);
        setIsLoading(false);
      });

    return () => {
      cancelled = true;
      if (objectUrlRef.current) {
        URL.revokeObjectURL(objectUrlRef.current);
        objectUrlRef.current = null;
      }
    };
  }, [hasStarted, src]);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (!isMobile) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting && !isFullscreen);
      },
      { threshold: 0 },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [isFullscreen]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const handlePlayClick = () => {
    setHasStarted(true);
  };

  const handleMaximize = async () => {
    const el = containerRef.current;
    if (!el) return;

    try {
      if (!document.fullscreenElement) {
        await el.requestFullscreen();

        const orientation = screen.orientation as ScreenOrientation & {
          lock?: (orientation: string) => Promise<void>;
        };
        if (orientation?.lock) {
          try {
            await orientation.lock("landscape");
          } catch {}
        }
      } else {
        await document.exitFullscreen();
      }
    } catch (err) {
      console.error("Fullscreen error:", err);
    }
  };

  const handleToggleWide = () => {
    setIsWide((prev) => !prev);
  };

  return (
    <>
      <div ref={sentinelRef} className="h-0" />

      <div
        ref={containerRef}
        className={`
          bg-black overflow-hidden transition-all duration-300 rounded-lg
          ${isSticky ? "fixed top-0 left-0 right-0 z-40 aspect-video w-full rounded-none" : "relative w-full aspect-video"}
          ${isWide ? "lg:fixed lg:top-0 lg:left-0 lg:right-0 lg:z-40 lg:w-full lg:aspect-video" : ""}
        `}
      >
        {!hasStarted && (
          <button
            onClick={handlePlayClick}
            className="absolute inset-0 w-full h-full cursor-pointer group"
          >
            <Image
              width={800}
              height={600}
              src={poster}
              priority
              alt="video cover"
              className="w-full h-full object-cover"
            />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="h-16 w-16 rounded-full bg-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-105">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 16 16"
                  fill="#eb5c74"
                  className="ml-1"
                >
                  <path d="M11.596 8.697 4.596 5.297A.5.5 0 0 0 4 5.75v6.5a.5.5 0 0 0 .596.453l7-3.5a.5.5 0 0 0 0-.906z" />
                </svg>
              </span>
            </span>
          </button>
        )}

        {hasStarted && isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black">
            <Spinner size="lg" className="border-t-white" />
          </div>
        )}
        {hasStarted && videoUrl && !error && (
          <>
            <video src={videoUrl} controls autoPlay className="w-full h-full" />

            <div className="absolute top-2 right-2 flex gap-2 z-10">
              <button
                onClick={handleMaximize}
                className="bg-black/60 hover:bg-black/80 text-white rounded-md p-2 cursor-pointer transition-colors"
                aria-label="Maximize"
                title="Maximize"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707M9.5 5.5a.5.5 0 0 0 0-1H5.525a.5.5 0 0 0 0 1H8.293L4.146 9.646a.5.5 0 1 0 .708.708L9 6.207V9.5a.5.5 0 0 0 1 0z" />
                  <path d="M0 .5A.5.5 0 0 1 .5 0h4a.5.5 0 0 1 0 1H1v3.5a.5.5 0 0 1-1 0zM15.5 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1h-3.5a.5.5 0 0 1 0-1zM.5 16a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0V15h3.5a.5.5 0 0 1 0 1zM16 15.5a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1 0-1H15v-3.5a.5.5 0 0 1 1 0z" />
                </svg>
              </button>

              <button
                onClick={handleToggleWide}
                className="hidden lg:flex bg-black/60 hover:bg-black/80 text-white rounded-md p-2 cursor-pointer transition-colors"
                aria-label="Wide"
                title="Wide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5zM1.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5z" />
                </svg>
              </button>
            </div>
          </>
        )}
      </div>

      {(isSticky || isWide) && <div className="aspect-video w-full" />}
    </>
  );
};

export default CoursePlayer;
