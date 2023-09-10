import type { Meta, StoryObj } from "@storybook/react";
import { CloudinaryInputUI } from "./cloudinary-input-ui.component";
import { ThemeProvider } from "@mui/material";
import { theme } from "@app/core/theme";

const meta = {
  title: "Common/CloudinaryInputUI",
  component: CloudinaryInputUI,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof CloudinaryInputUI>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Label",
    disabled: false,
  },
} satisfies Story;
