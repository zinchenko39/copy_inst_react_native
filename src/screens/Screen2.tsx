import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Container from "../components/Container";

function Screen2() {
  const navigation = useNavigation();
  return (
    <Container>
      <View>
        <Text onPress={() => navigation.navigate("ProfileScreen")}>
          Screen2
        </Text>
      </View>
    </Container>
  );
}

export default Screen2;
