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
import RetrieveBagComponent from "./RetrieveBagComponent";
import VerifyDetailsComponent from "./VerifyDetailsComponent";
import SuccessVerifyDetailsComponent from "./SuccessVerifyDetailsComponent";
import ContactComponent from "./ContactComponent";
import SuccessContactComponent from "./SuccessContactComponent";
import AdminPanel from "./AdminPanel";
import AddUser from "./AddUser";
import ViewUsers from "./ViewUsers";

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
            <Stack.Screen name="RetrieveBag" component={RetrieveBagComponent} />
            <Stack.Screen name="VerifyDetails" component={VerifyDetailsComponent} />
            <Stack.Screen name="SuccessVerifyDetails" component={SuccessVerifyDetailsComponent} />
            <Stack.Screen name="Contact" component={ContactComponent} />
            <Stack.Screen name="SuccessContact" component={SuccessContactComponent} />

            <Stack.Screen name="AdminPanel" component={AdminPanel}/>
            <Stack.Screen name="AddUser" component={AddUser} />
            <Stack.Screen name="ViewUsers" component={ViewUsers} />
        </Stack.Navigator>
    )
}

export default StackNavigator;