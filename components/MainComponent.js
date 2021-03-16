import React, { Component } from 'react';
import LoginComponent from "./LoginComponent";
import HomeComponent from "./HomeComponent";
import TermsAndConditionsComponent from "./TermsAndConditionsComponent";
import { View, Text, ScrollView, Image } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Icon } from "react-native-elements";

const Stack = createStackNavigator();

function HomeStack({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeComponent} options={{
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
            <Stack.Screen name="Login" component={LoginComponent} options={{
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
            <Stack.Screen name="Terms and Conditions" component={TermsAndConditionsComponent} options={{
                headerLeft: () =>
                    <View style={{ marginLeft: 20 }}>
                        <Icon name="bars" type="font-awesome" color="#517fa4" onPress={() => navigation.openDrawer()} />
                    </View>
            }} />
        </Stack.Navigator>
    )
}

const Drawer = createDrawerNavigator();

const customDrawerContentComponent = (props) => {
    <ScrollView>

    </ScrollView>
}

function MainComponent() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
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
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default MainComponent;