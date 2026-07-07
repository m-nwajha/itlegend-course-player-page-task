import Badge from "./Badge";
import { Box } from "./Box";
import { Typography } from "./Typography";

export type LeaderboardEntry = {
  percentage: number;
  name: string;
  message?: {
    msg: string;
    emoji: string;
  };
};
const LeaderboardItem = ({
  entry,
  isyou,
}: {
  entry: LeaderboardEntry;
  isyou?: boolean;
}) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="between"
      gap={5}
      className={`p-5 rounded-xl border border-[#d9e4eb] bg-[#f5f9fa] w-full ${isyou ? "bg-[#fdf2f4] border-red-500" : ""}`}
    >
      <Typography variant="span" size="h1" className="">
        {entry.message?.emoji}
      </Typography>
      <Box display="flex" direction="col" gap={5}>
        <Typography variant="h5" size="h4" className="text-[#319e87] font-bold">
          <Badge
            variant={isyou ? "success" : "danger"}
            title={`${entry.percentage} %`}
            className="mx-2 rounded-[20px]"
          />
          {entry.name}
        </Typography>
        <Typography variant="span" size="h5" className="text-[#999a9a]">
          {entry.message?.msg}
        </Typography>
      </Box>
    </Box>
  );
};

export default LeaderboardItem;
