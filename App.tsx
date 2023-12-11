import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Screens/HomeScreen";
import LoginScreen from "./Screens/LoginScreen";
import DemoScreen from "./Screens/DemoScreen";
import DiaryScreen from "./Screens/DiaryScreen";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Index" component={LoginScreen} />
        <Stack.Screen name="Task" component={DemoScreen} />
        <Stack.Screen name="Diary" component={DiaryScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
