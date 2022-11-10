import React from "react";
import { useNavigation } from "@react-navigation/native";
import Container from "../components/Container";
import { Text } from "react-native";

function Notes() {
  const navigation = useNavigation();
  return (
    <Container showArrow={false}>
      <Text>Notes</Text>
    </Container>
  );
}

export default Notes;
