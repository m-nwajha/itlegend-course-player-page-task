"use client";
import { MOCK_LEADERBOARD } from "@/mocks/leaderboard";
import { Box } from "../atoms/Box";
import LeaderboardItem from "../atoms/LeaderboardItem";
import Modal from "../atoms/Modal";
import { Typography } from "../atoms/Typography";
import { getMessage } from "@/utils/getMessage";
import { userProgressMock } from "@/mocks/progress";

type LeaderboardPopupProps = {
  open: boolean;
  onClose: () => void;
};

const LeaderboardPopup = ({ open, onClose }: LeaderboardPopupProps) => {
  return (
    <Modal isOpen={open} variant="sm" onClose={onClose}>
      <Box
        display="flex"
        direction="col"
        gap={4}
        className="w-full max-w-md bg-white p-5"
      >
        <Typography className="text-black font-[500]" size="h3" variant="h5">
          Leaderboard
        </Typography>

        <Box
          display="flex"
          direction="col"
          gap={2}
          className="w-full h-[70vh] px-2 overflow-scroll coustm__scroll"
        >
          <LeaderboardItem
            isyou
            entry={{
              name: "You",
              percentage: userProgressMock,
              message: getMessage(userProgressMock),
            }}
          />
          {MOCK_LEADERBOARD.map((entry) => (
            <LeaderboardItem key={entry.percentage} entry={entry} />
          ))}
        </Box>
      </Box>
    </Modal>
  );
};

export default LeaderboardPopup;
