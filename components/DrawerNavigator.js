import React from 'react';
import {createDrawerNavigator, DrawerItemList} from "@react-navigation/drawer";
import { Icon } from "react-native-elements";
import LoginComponent from './LoginComponent';
import TermsAndConditionsComponent from './TermsAndConditionsComponent';
import AboutComponent from './AboutComponent';
import ContactComponent from './ContactComponent';
import Scanner from './ScannerComponent';
import HomeComponent from './HomeComponent';
// import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import StackNavigator from './StackNavigator';

const Drawer = createDrawerNavigator();

const CustomDrawerContentComponent = (props) => (
    <ScrollView>
        <SafeAreaView style={styles.container} forceInset={{ top: "always", horizantal: "never" }}>
            <View style={styles.drawerHeader}>
                <View style={{ flex: 1 }}>
                    <Image source={require("../assets/logo.png")} style={styles.drawerImage} />
                </View>
                <View style={{ flex: 2 }}>
                    <Text style={styles.drawerHeaderText}>BagLocater</Text>
                </View>
            </View>
            <DrawerItemList {...props} />
        </SafeAreaView>
    </ScrollView>
)

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator drawerContent={(props) => <CustomDrawerContentComponent {...props} />}>
            <Drawer.Screen name='Home' component={StackNavigator} options={{
                    drawerIcon: () =>
                        <View>
                            <Icon name="home" type="font-awesome" />
                        </View>
                }} />
            <Drawer.Screen name='Login' component={LoginComponent} options={{
                    drawerIcon: () =>
                        <View>
                            <Icon name="sign-in" type="font-awesome" />
                        </View>
                }} />
            <Drawer.Screen name='Terms And Conditions' component={TermsAndConditionsComponent} options={{
                    drawerIcon: () =>
                        <View>
                            <Icon name="th-list" type="font-awesome" />
                        </View>
                }} />
            <Drawer.Screen name='About Us' component={AboutComponent} options={{
                    drawerIcon: () =>
                        <View>
                            <Icon name="university" type="font-awesome" />
                        </View>
                }} />
            <Drawer.Screen name='Contact Us' component={ContactComponent} options={{
                    drawerIcon: () =>
                        <View>
                            <Icon name="address-card" type="font-awesome" />
                        </View>
                }} />
        </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({
    drawerHeader: {
        backgroundColor: "#009387",
        height: 140,
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        flexDirection: "row"
    },
    drawerHeaderText: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
        marginLeft: 10
    },
    drawerImage: {
        margin: 10,
        width: 80,
        height: 80,
    }
})

export default DrawerNavigator;
