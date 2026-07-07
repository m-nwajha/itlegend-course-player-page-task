"use client";

import { COMMENTS } from "@/mocks/comments";
import { Box } from "../atoms/Box";
import { Typography } from "../atoms/Typography";
import CommentsItem, { CommentItemProps } from "../atoms/CommentsItem";
import Button from "../atoms/Button";
import TextArea from "../atoms/TextArea";
import { useState } from "react";

const CommentsSection = () => {
  const [commentsData, setCommentsData] =
    useState<CommentItemProps[]>(COMMENTS);
  const [comment, setComment] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const handleCommentChange = (e: { target: { value: string } }) => {
    setComment(e.target.value);
  };
  const handleSubmit = async () => {
    try {
      // simple validate if comment length more than 10
      if (comment.trim().length < 10) {
        setError(true);
        return;
      }
      setLoading(true);
      // Here I will make fetch request
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setCommentsData((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          comment,
          date: new Date().toLocaleDateString(),
          name: "Mohamed ALnawjha",
          avatar: `https://i.pravatar.cc/${250 + prev.length}`,
        },
      ]);
      setComment("");
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  return (
    <div id="comments" className="w-full p-1 lg:p-5">
      <Box display="flex" direction="col" gap={7} className="px-4 py-6 w-full">
        <Typography className="text-black font-[500]" size="h3" variant="h5">
          Comments
        </Typography>
        <Box display="flex" direction="col" gap={4} className="w-full">
          {commentsData.map((comment) => (
            <CommentsItem key={comment.id} {...comment} />
          ))}
        </Box>
        <form className="w-full flex flex-col gap-8">
          <TextArea
            onChange={handleCommentChange}
            placeholder="Write your comment..."
            value={comment}
          />
          {error && (
            <Typography className="text-red-500" size="h5" variant="h5">
              Please enter a comment with at least 10 characters
            </Typography>
          )}
          <div>
            <Button
              className={loading ? "opacity-50 cursor-not-allowed" : ""}
              onClick={handleSubmit}
              disabled={loading}
              label={
                <div className="flex items-center gap-1">
                  <span>Post Comment</span>
                  {loading ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                      />
                    </svg>
                  )}
                </div>
              }
            />
          </div>
        </form>
      </Box>
    </div>
  );
};

export default CommentsSection;
