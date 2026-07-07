import { LeaderboardEntry } from "@/components/atoms/LeaderboardItem";
import { getMessage } from "@/utils/getMessage";


export const MOCK_LEADERBOARD: LeaderboardEntry[] = [
  {
    percentage: 50,
    name: "Ahmed Hassan",
    message: { ...getMessage(50) },
  },
  {
    percentage: 30,
    name: "Ali Hassan",
    message: { ...getMessage(30) },
  },
  {
    percentage: 50,
    name: "Mostafa Hassan",
    message: { ...getMessage(50) },
  },
];
