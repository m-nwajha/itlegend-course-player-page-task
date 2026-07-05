"use client";

import Link from "next/link";
import { Box } from "../atoms/Box";
import { Container } from "../atoms/Container";
import { Typography } from "../atoms/Typography";
import { useBreadcrumb } from "../Contexts/BreadcrumbContext";

const Breadcrumb = () => {
  const { data } = useBreadcrumb();
  const { title, history } = data;

  return (
    <div className="bg-[#f5f9fa] py-3 mb-5">
      <Container variant="2xl">
        <Box display="flex" direction="col">
          <Box display="flex" gap={2}>
            {history &&
              history.map((item, index) => (
                <Box display="flex" alignItems="center" gap={1} key={item.name}>
                  <Typography
                    size="h6"
                    variant="span"
                    className={
                      index === history.length - 1
                        ? "text-black"
                        : "text-black/50"
                    }
                  >
                    <Link href={item.url || "#"}>{item.name}</Link>
                  </Typography>
                  {index !== history.length - 1 && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                      />
                    </svg>
                  )}
                </Box>
              ))}
          </Box>
          <Typography size="h1" variant="h2" className="font-[400] text-black">
            {title}
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default Breadcrumb;
