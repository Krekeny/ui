import { StyleSheet, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import StorybookUIRoot from "./.ondevice/Storybook";
// export { StorybookUIRoot as default };

const App = () => {
  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView style={styles.container}>
        <StorybookUIRoot />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 25,
    fontWeight: "500",
  },
});

export default App;
