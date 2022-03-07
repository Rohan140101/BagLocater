import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeComponent from "./HomeComponent";
import FlightDetailComponent from "./FlightDetailComponent";
import AfterScanComponent from "./AfterScanComponent";
import ScanRetrieveComponent from "./ScanRetrieveComponent";
import AddLostFoundComponent from "./AddLostFoundComponent";
import SuccessLostFoundComponent from "./SuccessLostFoundComponent";
import SelectAirportComponent from "./SelectAirportComponent";
import Scanner from "./ScannerComponent";
import SearchedBagsComponent from "./SearchedBagsComponent";
import BagDetailsComponent from "./BagDetailsComponent";

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeComponent} />
            <Stack.Screen name="FlightDetail" component={FlightDetailComponent} />
            <Stack.Screen name="AfterScan" component={AfterScanComponent} />
            <Stack.Screen name="Scanner" component={Scanner} />
            <Stack.Screen name="ScanAndRetrieve" component={ScanRetrieveComponent} />
            <Stack.Screen name="AddLostFound" component={AddLostFoundComponent} />
            <Stack.Screen name="SuccessLostFound" component={SuccessLostFoundComponent} />
            <Stack.Screen name="SelectAirport" component={SelectAirportComponent} />
            <Stack.Screen name="SearchedBags" component={SearchedBagsComponent}/>
            <Stack.Screen name="BagDetails" component={BagDetailsComponent} />
        </Stack.Navigator>
    )
}

export default StackNavigator;