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
        count: 8,
        date: "2024-07-02",
        sum: 1990,
      },
      {
        count: 3,
        date: "2024-07-01",
        sum: 740,
      },
      {
        count: 3,
        date: "2024-06-28",
        sum: 810,
      },
      {
        count: 3,
        date: "2024-06-27",
        sum: 775,
      },
    ].reverse(),
  },
} satisfies Story;
