import { CardContent, Card, Typography } from "@mui/material";
import { DateTime } from "luxon";
import { FC } from "react";

interface FinanceChartTooltipProps {
  active?: boolean;
  payload?: [
    {
      payload: {
        date: string;
        sum: number;
        count: number;
      };
    }
  ];
}

export const FinanceChartTooltip: FC<FinanceChartTooltipProps> = ({
  active,
  payload,
}) => {
  if (!active || !payload) return null;

  return (
    <Card>
      <CardContent>
        <Typography>
          {DateTime.fromFormat(
            payload[0].payload.date,
            "y-LL-dd"
          ).toLocaleString(DateTime.DATE_MED)}
        </Typography>
        <Typography>Orders sum: {payload[0].payload.sum}</Typography>
        <Typography>Orders number: {payload[0].payload.count}</Typography>
      </CardContent>
    </Card>
  );
};
