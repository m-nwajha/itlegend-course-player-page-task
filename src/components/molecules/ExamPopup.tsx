"use client";
import { useEffect, useState } from "react";
import Modal from "../atoms/Modal";
import { Typography } from "../atoms/Typography";
import { Box } from "../atoms/Box";
import { CN } from "@/utils/className";
import Badge from "../atoms/Badge";
import Button from "../atoms/Button";

export type Question = {
  id: number;
  text: string;
  options: string[];
};


type ExamPopupProps = {
  open: boolean;
  onClose: () => void;
  minuteCount?: number;
  questions?: Question[];
};

const ExamPopup = ({ open, onClose, minuteCount = 10 , questions=[] }: ExamPopupProps) => {
  const EXAM_DURATION_SECONDS = minuteCount * 60;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [secondsLeft, setSecondsLeft] = useState(EXAM_DURATION_SECONDS);

  useEffect(() => {
    if (!open) return;

    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [open]);

  const currentQuestion = questions[currentIndex];

  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const handleSelectAnswer = (option: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: option,
    }));
  };

  const goToQuestion = (index: number) => {
    if (index >= 0 && index < questions.length) {
      setCurrentIndex(index);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      onClose();
    }
  };

  return (
    <Modal variant="sm" isOpen={open} onClose={onClose}>
      <div className="flex flex-col h-full w-full max-w-md mx-auto bg-[#fff]">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="between"
          className="w-full px-4 py-3 border-b border-gray-100"
        >
          <Badge variant="danger" title={formatTime(secondsLeft)} />
        </Box>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={2}
          className="w-full py-4 border-b border-gray-100"
        >
          {questions?.map((q, index) => {
            const isAnswered = answers[q.id] !== undefined;
            const isActive = index === currentIndex;
            return (
              <button
                key={q.id}
                onClick={() => goToQuestion(index)}
                className={CN(
                  "h-7 w-7 rounded-full flex items-center justify-center text-xs font-medium transition-colors cursor-pointer",
                  isActive
                    ? "bg-[#f2faf8] text-[#6ebbb8]"
                    : isAnswered
                      ? "bg-[#f2faf8] text-[#6ebbb8]"
                      : "bg-[#e9e8e8] text-[#909494]",
                )}
              >
                {index + 1}
              </button>
            );
          })}
        </Box>

        <div className="flex-1 overflow-y-auto p-5">
          <Typography
            variant="p"
            size="body1"
            className="text-gray-800 font-medium mb-4"
          >
            {currentIndex + 1}. {currentQuestion.text}
          </Typography>

          <Box display="flex" direction="col" gap={3} className="w-full">
            {currentQuestion.options.map((option) => {
              const isSelected = answers[currentQuestion.id] === option;
              return (
                <label
                  key={option}
                  className={CN(
                    "flex items-center gap-3 px-4 py-3 rounded-md border cursor-pointer transition-colors",
                    isSelected
                      ? "border-[#6ebbb8] bg-[#f2faf8]"
                      : "border-[#e9e8e8] hover:bg-[#e9e8e8]",
                  )}
                >
                  <input
                    type="radio"
                    name={`question-${currentQuestion.id}`}
                    checked={isSelected}
                    onChange={() => handleSelectAnswer(option)}
                    className="accent-[#37d8d8]"
                  />
                  <span className="text-sm text-[#025c5c]">{option}</span>
                </label>
              );
            })}
          </Box>
        </div>

        <Box
          display="flex"
          justifyContent="between"
          alignItems="center"
          className="w-full px-5 py-4 border-t border-gray-100"
        >
          <button
            onClick={handleBack}
            className="text-sm uppercase text-gray-600 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            disabled={currentIndex === 0}
          >
            Preve
          </button>

          {currentIndex === questions.length - 1 ? (
            <Button variant="secondary" label="Submit" onClick={onClose} />
          ) : (
            <Button onClick={handleNext} label="Next" />
          )}
        </Box>
      </div>
    </Modal>
  );
};

export default ExamPopup;
