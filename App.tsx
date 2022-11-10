import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./src/navigation/Navigator";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <Navigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
