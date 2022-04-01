import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";


function HomeComponent({ navigation }) {
    return (
        <ImageBackground style={{ width: "100%", height: "100%", flex: 1 }} resizeMode="cover" source={require("../assets/airport.jpg")}>
            <View style={styles.MainView}>
                <View style={styles.HomeView1}>
                    <Text style={styles.text}>Lost Your Bag at any Indian Airport ?</Text>
                </View>

                <View style={styles.HowView2}>
                    <Text style={styles.text}>Try Searching it using the Search Button Below</Text>
                </View>

                <View style={styles.HomeView3}>
                    <Icon.Button name="search" style={{ width: 155 }} onPress={() => navigation.navigate("FlightDetail")}>
                        <Text style={{ fontSize: 15, color: "white", marginLeft: 5 }}>Search Bags</Text>
                    </Icon.Button>
                </View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        color: "yellow",
        color: "yellow"
    },
    MainView: {
        backgroundColor: "#000000a0",
        height: "100%",
        paddingTop: 20,
        display: 'flex',
        alignItems: 'center'
    },
    HomeView1: {
        marginTop: 100,
        fontSize: 10,
        fontWeight: "bold",
        alignItems: "center",
    },
    HowView2: {
        marginTop: 50,
        alignItems: "center"
    },
    HomeView3: {
        marginTop: 30,
        width: 350,
        alignItems: "center"
    }
})

export default HomeComponent;