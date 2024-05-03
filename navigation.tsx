import * as React from "react";
import Second from "./screens/SecondScreen";
import First from "./screens/FirstScreen";
import Third from "./screens/ThirdScreen";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();
export default function App() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="First" component={First} />
      <Tab.Screen name="Second" component={Second} />
      <Tab.Screen name="Third" component={Third} />
    </Tab.Navigator>
  );
}
