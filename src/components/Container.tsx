import React, { ReactElement } from "react";
import { TouchableOpacity, View, Text, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SvgProfile from "../assets/svg/SvgProfile";

type containerProps = {
  children: any;
  showArrow: boolean;
};

function Container(props: containerProps) {
  const { children, showArrow = true } = props;
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.container}>
        {showArrow && (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text>Назад</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={{ paddingHorizontal: 16 }}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    marginTop: 40,
    marginLeft: 14,
  },
});

export default Container;
