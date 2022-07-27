import React from "react";
import { Cta } from "./Cta";

const CtaMeta = {
  title: "Cta",
  component: Cta,
  argTypes: {
    onPress: { action: "pressed the Cta" },
  },
  args: {
    text: "Hello world",
  },
};

export default CtaMeta;

export const Basic = (args) => <Cta {...args} />;
