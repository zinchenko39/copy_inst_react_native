import React from "react";
import { useNavigation } from "@react-navigation/native";
import Container from "../components/Container";
import { Text } from "react-native";

function Home() {
  const navigation = useNavigation();
  return (
    <Container showArrow={false}>
      <Text>Home</Text>
    </Container>
  );
}

export default Home;
