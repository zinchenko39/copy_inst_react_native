import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen1 from "../screens/Screen1";
import Screen2 from "../screens/Screen2";
import ProfileScreen from "../screens/ProfileScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Notes from "../screens/Notes";
import Home from "../screens/Home";
import SvgProfile from "../assets/svg/SvgProfile";
function Navigator() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const TabStack = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Главная",
            tabBarIcon: ({ focused }) => (
              <SvgProfile color={focused ? "red" : "blue"} />
            ),
          }}
        />
        <Tab.Screen
          name="Notes"
          component={Notes}
          options={{
            tabBarLabel: "Заметки",
            tabBarIcon: ({ focused }) => (
              <SvgProfile color={focused ? "red" : "blue"} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };
  return (
    <Stack.Navigator
      initialRouteName="App"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={"Tab"} component={TabStack} />
      <Stack.Screen
        name="Screen1"
        component={Screen1}
        options={{ title: "Скрин111" }}
      />
      <Stack.Screen name="Screen2" component={Screen2} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

export default Navigator;
