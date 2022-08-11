// import { Text, useSx, View, H1, P, Row, A } from 'dripsy'
import { TextLink } from "solito/link";
// import { MotiLink } from 'solito/moti'
// import Ionicons from '@expo/vector-icons/Ionicons';
import { View, StyleSheet, Text } from "react-native";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { Cta } from "../../../components/Cta/Cta";
import { Logo } from "../../../components/Logo/Logo.jsx";

const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //   },
  //   text: {
  //     fontSize: 25,
  //     fontWeight: "500",
  //   },
});

export function HomeScreen() {
  return (
    <View>
      {/* <SafeAreaProvider style={styles.container}> */}
      {/* <SafeAreaView style={styles.container}> */}
      <Text>WIP Component List</Text>
      <Text>CTA</Text>
      <Cta text="hello"></Cta>
      <Text>Logo</Text>
      <Logo href="/test"></Logo>
      {/* </SafeAreaView> */}
      {/* </SafeAreaProvider> */}
    </View>
  );
}
