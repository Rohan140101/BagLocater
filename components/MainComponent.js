import React, { Component } from 'react';
import LoginComponent from "./LoginComponent";
import HomeComponent from "./HomeComponent";
import TermsAndConditionsComponent from "./TermsAndConditionsComponent";
import AboutComponent from "./AboutComponent";
import ContactComponent from "./ContactComponent";
import ScannerComponent from "./ScannerComponent";
import { View, Text, ScrollView, Image, StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator, DrawerItemList } from "@react-navigation/drawer";
import { Icon } from "react-native-elements";
import Scanner from './ScannerComponent';

const Stack = createStackNavigator();

function HomeStack({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="BagLocator" component={HomeComponent} options={{
                headerLeft: () =>
                    <View style={{ marginLeft: 20 }}>
                        <Icon name="bars" type="font-awesome" color="#517fa4" onPress={() => navigation.openDrawer()} />
                    </View>

            }} />
        </Stack.Navigator>
    )
}

function LoginStack({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="BagLocator" component={LoginComponent} options={{
                headerLeft: () =>
                    <View style={{ marginLeft: 20 }}>
                        <Icon name="bars" type="font-awesome" color="#517fa4" onPress={() => navigation.openDrawer()} />
                    </View>

            }} />
        </Stack.Navigator>
    )
}

function TermsAndConditionsStack({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="BagLocator" component={TermsAndConditionsComponent} options={{
                headerLeft: () =>
                    <View style={{ marginLeft: 20 }}>
                        <Icon name="bars" type="font-awesome" color="#517fa4" onPress={() => navigation.openDrawer()} />
                    </View>
            }} />
        </Stack.Navigator>
    )
}

function AboutStack({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="BagLocator" component={AboutComponent} options={{
                headerLeft: () =>
                    <View style={{ marginLeft: 20 }}>
                        <Icon name="bars" type="font-awesome" color="#517fa4" onPress={() => navigation.openDrawer()} />
                    </View>
            }} />
        </Stack.Navigator>
    )
}

function ContactStack({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="BagLocator" component={ContactComponent} options={{
                headerLeft: () =>
                    <View style={{ marginLeft: 20 }}>
                        <Icon name="bars" type="font-awesome" color="#517fa4" onPress={() => navigation.openDrawer()} />
                    </View>
            }} />
        </Stack.Navigator>
    )
}

function BarCodeStack({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="BagLocator" component={ScannerComponent} options={{
                headerLeft: () =>
                    <View style={{ marginLeft: 20 }}>
                        <Icon name="bars" type="font-awesome" color="#517fa4" onPress={() => navigation.openDrawer()} />
                    </View>
            }} />
        </Stack.Navigator>
    )
}

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

function MainComponent() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <CustomDrawerContentComponent {...props} />}>
                <Drawer.Screen name="Home" component={HomeStack} options={{
                    drawerIcon: () =>
                        <View>
                            <Icon name="home" type="font-awesome" />
                        </View>
                }} />
                <Drawer.Screen name="Login" component={LoginStack} options={{
                    drawerIcon: () =>
                        <View>
                            <Icon name="sign-in" type="font-awesome" />
                        </View>
                }} />
                <Drawer.Screen name="Terms And Conditions" component={TermsAndConditionsStack} options={{
                    drawerIcon: () =>
                        <View>
                            <Icon name="th-list" type="font-awesome" />
                        </View>
                }} />
                <Drawer.Screen name="About Us" component={AboutStack} options={{
                    drawerIcon: () =>
                        <View>
                            <Icon name="university" type="font-awesome" />
                        </View>
                }} />
                <Drawer.Screen name="Contact Us" component={ContactStack} options={{
                    drawerIcon: () =>
                        <View>
                            <Icon name="address-card" type="font-awesome" />
                        </View>
                }} />
                <Drawer.Screen name="Scanner" component={BarCodeStack} options={{
                    drawerIcon: () =>
                        <View>
                            <Icon name="bars" type="font-awesome" />
                        </View>
                }} />
            </Drawer.Navigator>
        </NavigationContainer>
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

export default MainComponent;