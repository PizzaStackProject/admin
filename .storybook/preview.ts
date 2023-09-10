import type { Preview } from "@storybook/react";
import { ThemeProvider } from "react-admin";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },   
  },
};

export default preview;
