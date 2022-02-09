import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeComponent from "./HomeComponent";
import FlightDetailComponent from "./FlightDetailComponent";
import AfterScanComponent from "./AfterScanComponent";
import ScanRetrieveComponent from "./ScanRetrieveComponent";
import Scanner from "./ScannerComponent";

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeComponent} />
            <Stack.Screen name="FlightDetail" component={FlightDetailComponent} />
            <Stack.Screen name="AfterScan" component={AfterScanComponent} />
            <Stack.Screen name="Scanner" component={Scanner} />
            <Stack.Screen name="ScanAndRetrieve" component={ScanRetrieveComponent} />
        </Stack.Navigator>
    )
}

export default StackNavigator;