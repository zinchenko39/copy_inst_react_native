import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Container from "../components/Container";

function Screen1() {
  const navigation = useNavigation();

  const handleNavigateToScreen = () => {
    navigation.navigate("Screen2");
  };

  return (
    <Container showArrow={false}>
      <Text>Screen1</Text>
      <TouchableOpacity onPress={() => handleNavigateToScreen()}>
        <Text>Перейти на скрин 2</Text>
      </TouchableOpacity>
    </Container>
  );
}

export default Screen1;
