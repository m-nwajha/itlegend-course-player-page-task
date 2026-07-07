"use client";
import { useState } from "react";
import Modal from "../atoms/Modal";
import { Typography } from "../atoms/Typography";
import Button from "../atoms/Button";
import TextArea from "../atoms/TextArea";
import CommentsItem from "../atoms/CommentsItem";

type AskQuestionPopupProps = {
  open: boolean;
  onClose: () => void;
};

const getQuestions = [
  {
    id: 1,
    question: "What is the capital of France?",
    date: "2022-01-01",
    name: "Nawjha",
  },
];

const AskQuestionPopup = ({ open, onClose }: AskQuestionPopupProps) => {
  const [question, setQuestion] = useState("");
  const [questionsData, setQuestionsData] = useState(getQuestions);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleQuestionChange = (e: { target: { value: string } }) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      // simple validate if comment length more than 10
      if (question.trim().length < 10) {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 3000);
        return;
      }
      setLoading(true);
      // Here I will make fetch request
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setQuestionsData((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          question,
          date: new Date().toLocaleDateString(),
          name: "Mohamed ALnawjha",
        },
      ]);
      setQuestion("");
      setLoading(false);
      setIsSuccess(true);
      setError(false);
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
      console.log("question added successfully", questionsData);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  return (
    <Modal isOpen={open} variant="sm" onClose={onClose}>
      <div className="w-full max-w-md bg-white p-5 flex flex-col gap-4">
        <Typography className="text-black font-[500]" size="h3" variant="h5">
          Ask a question
        </Typography>

        <form className="w-full flex flex-col gap-8">
          <TextArea
            onChange={handleQuestionChange}
            placeholder="Write your question..."
            value={question}
          />
          {error && (
            <Typography className="text-red-500" size="h5" variant="h5">
              Please enter a question with at least 10 characters
            </Typography>
          )}
          {isSuccess && (
            <Typography className="text-green-500" size="h5" variant="h5">
              Question submitted successfully , see the list of questions in
              the console log
            </Typography>
          )}
          <Button
            label="Submit"
            disabled={loading}
            className={loading ? "opacity-50 cursor-not-allowed" : ""}
            onClick={handleSubmit}
          />
        </form>
      </div>
    </Modal>
  );
};

export default AskQuestionPopup;
