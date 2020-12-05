import React from "react";
import { Text, View, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

function EventsHomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome to my event!</Text>
      <Button
        title="Second screen"
        onPress={() => navigation.navigate("EventsSecond")}
      ></Button>
    </View>
  );
}

function EventsSecondScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Events second screen!</Text>
      <Button
        title="Third screen"
        onPress={() => navigation.navigate("EventsThird")}
      ></Button>
    </View>
  );
}

function EventsThirdScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Events Third screen!</Text>
      <Button
        title="Fourth screen"
        onPress={() => navigation.navigate("EventsFourth")}
      ></Button>
    </View>
  );
}

function EventsFourthScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Events second screen!</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function EventsScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="EventsHome" component={EventsHomeScreen} />
      <Stack.Screen name="EventsSecond" component={EventsSecondScreen} />
      <Stack.Screen name="EventsThird" component={EventsThirdScreen} />
      <Stack.Screen name="EventsFourth" component={EventsFourthScreen} />
    </Stack.Navigator>
  );
}
