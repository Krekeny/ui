import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen } from "../../features/screens/home";
import { TestScreen } from "../../features/screens/test";

const Stack = createNativeStackNavigator();

export function NativeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: "Home",
        }}
      />
      <Stack.Screen
        name="test"
        component={TestScreen}
        options={{
          title: "test",
        }}
      />
    </Stack.Navigator>
  );
}
