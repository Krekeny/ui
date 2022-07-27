import React from "react";
import { Logo } from "./Logo";
// import { NavigationContainer } from "@react-navigation/native";

const linking = {
  prefixes: ["https://www.krekeny.com"],
  config: {
    screens: {
      //   Home: "feed/:sort",
    },
  },
};

const LogoMeta = {
  title: "Logo",
  component: Logo,
  argTypes: {},
  args: {
    text: "",
  },
};

export default LogoMeta;

export const Basic = (args) => <Logo {...args} />;

// const logoPressableArgs = {
//   ...LogoMeta.args,
//   href: "https://www.krekeny.com",
// };

// export const WithPressable = (args) => <Logo {...logoPressableArgs} />;

// WithPressable.decorators = [
//   (Story) => (
//     <NavigationContainer linking={linking}>
//       <Story />
//     </NavigationContainer>
//   ),
// ];
