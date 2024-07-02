import { Card, CardContent, Typography } from "@mui/material";
import { FinanceChart } from "../fin-chart/fin-chart.component";
import { Loading } from "react-admin";
import { useGetLastWeekOrdersStatisticQuery } from "@app/core/types";

export const Dashboard = () => {
  const { data, loading } = useGetLastWeekOrdersStatisticQuery();

  if (loading) {
    return <Loading />;
  }

  console.log(data);

  return (
    <Card title="Welcome to dashboard" sx={{ marginTop: "64px" }}>
      <CardContent>
        <Typography variant="h4">
          Welcome in admin panel of 🍕 PizzaStack
        </Typography>
        <Typography variant="h6">Sales from last week</Typography>
        <FinanceChart data={data?.last_week_orders ?? []} />
      </CardContent>
    </Card>
  );
};
