// module.exports = function (api) {
//   api.cache(true);
//   return {
//     presets: ["next/babel", ["babel-preset-expo", { jsxRuntime: "automatic" }]],
//     plugins: [
//       ["@babel/plugin-proposal-class-properties"],
//       ["@babel/plugin-proposal-private-methods"],
//       ["@babel/plugin-proposal-private-property-in-object"],
//       "react-native-reanimated/plugin",
//     ],
//   };
// };

module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxRuntime: "automatic" }],
      "@babel/preset-env",
    ],
    plugins: [
      "@babel/plugin-proposal-class-properties",
      "@babel/plugin-proposal-private-methods",
      // "@babel/plugin-proposal-private-property-in-object",
      "react-native-reanimated/plugin",
    ],
  };
};
