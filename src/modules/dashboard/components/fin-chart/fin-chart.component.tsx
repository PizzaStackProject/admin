import { FC } from "react";
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";
import { FinanceChartTooltip } from "../fin-char-tooltip/fin-char-tooltip.component";

interface FinanceChartProps {
  data: any[];
}

export const FinanceChart: FC<FinanceChartProps> = ({ data }) => {
  return (
    <BarChart width={730} height={250} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip content={<FinanceChartTooltip />} />
      <Bar dataKey="sum" fill="#fbbf24" />
    </BarChart>
  );
};
