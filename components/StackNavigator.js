import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeComponent from "./HomeComponent";
import FlightDetailComponent from "./FlightDetailComponent";

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeComponent} />
            <Stack.Screen name="FlightDetail" component={FlightDetailComponent} />
        </Stack.Navigator>
    )
}

export default StackNavigator;