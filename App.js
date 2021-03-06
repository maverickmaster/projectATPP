import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import EventsScreen from "./screens/EventsScreen";
import PlayersScreen from "./screens/PlayersScreen";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "ATP Home") {
              iconName = "ios-home";
            } else if (route.name === "Grand Slam Events") {
              iconName = focused ? "ios-list-box" : "ios-list";
            } else if (route.name === "Top 5 Players") {
              iconName = Platform.OS === "ios" ? "ios-people" : "md-people";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="ATP Home" component={HomeScreen} />
        <Tab.Screen name="Grand Slam Events" component={EventsScreen} />
        <Tab.Screen name="Top 5 Players" component={PlayersScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
