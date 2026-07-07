import { LEADER_MSG } from "@/constants/leaderboardMessages";

export const getMessage = (percentage: number) => {
  switch (true) {
    case percentage < 20:
      return LEADER_MSG.start_message;

    case percentage < 50:
      return LEADER_MSG.mid_message;

    default:
      return LEADER_MSG.end_message;
  }
};
