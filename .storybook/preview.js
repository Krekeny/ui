// Get actual Vue instance
import { app } from "@storybook/vue3";
import { registerGlobalComponents } from "../src/workflow";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

app = registerGlobalComponents(app);
