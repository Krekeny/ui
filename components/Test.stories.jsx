import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { MyButton } from "./Test";

const MyButtonMeta = {
  title: "MyTest",
  component: MyButton,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    text: "Hello world 1212",
  },
};

export default MyButtonMeta;

export const Basic = (args) => <MyButton {...args} />;
