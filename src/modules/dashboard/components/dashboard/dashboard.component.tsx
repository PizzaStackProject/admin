import { Card, CardContent, Typography } from "@mui/material";
import { FinanceChart } from "../fin-chart/fin-chart.component";

export const Dashboard = () => {
  return (
    <Card title="Welcome to dashboard" sx={{ marginTop: "64px" }}>
      <CardContent>
        <Typography variant="h4">
          Welcome in admin panel of 🍕 PizzaStack
        </Typography>
        <FinanceChart data={[]} />
      </CardContent>
    </Card>
  );
};
