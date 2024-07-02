import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "@mui/material";
import { theme } from "@app/core/theme";
import { FinanceChartTooltip } from "./fin-char-tooltip.component";

const meta = {
  title: "Dashboard/FinanceChartTooltip",
  component: FinanceChartTooltip,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof FinanceChartTooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    active: true,
    payload: [
      {
        payload: {
          count: 3,
          date: "2022-08-29",
          sum: 892,
        },
      },
    ],
  },
} satisfies Story;
