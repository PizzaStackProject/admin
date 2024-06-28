import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "@mui/material";
import { theme } from "@app/core/theme";
import { FinanceChart } from "./fin-chart.component";

const meta = {
  title: "Dashboard/FinanceChart",
  component: FinanceChart,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof FinanceChart>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    data: [
      {
        date: "04/09",
        amount: 4000,
      },
      {
        date: "03/09",
        amount: 3000,
      },
      {
        date: "02/09",
        amount: 2000,
      },
      {
        date: "01/09",
        amount: 2780,
      },
      {
        date: "31/08",
        amount: 1890,
      },
      {
        date: "30/08",
        amount: 2390,
      },
      {
        date: "29/08",
        amount: 3490,
        pv: 4300,
      },
    ].reverse(),
  },
} satisfies Story;
