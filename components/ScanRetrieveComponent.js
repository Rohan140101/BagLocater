import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function ScanRetrieveComponent({navigation}) {
    return (
        <View style={{display: 'flex', alignItems: 'center', marginTop: 100}}>
            <View style={styles.HomeView3}>
                <Icon.Button name="qrcode" style={{ width: 255, height: 60, marginLeft: 20 }} onPress={() => navigation.navigate("Scanner")}>
                    <Text style={{ fontSize: 15, color: "white", marginLeft: 'auto', marginRight: 'auto' }}>Scan QR</Text>
                </Icon.Button>
            </View>
            <View style={styles.HomeView3}>
                <Icon.Button name="suitcase" style={{ width: 255, height: 60, marginLeft: 20 }} onPress={() => navigation.navigate("FlightDetail")}>
                    <Text style={{ fontSize: 15, color: "white", marginLeft: 'auto', marginRight: 'auto' }}>Retrieve Bag</Text>
                </Icon.Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    HomeView3: {
        marginTop: 50,
        width: 350,
        display: 'flex',
        alignContent: "center",
    }
})

export default ScanRetrieveComponent;