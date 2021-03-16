import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";


function FlightDetailComponent() {
    return (
        <View>
            <View style={styles.View1}>
                <Input placeholder="Enter Flight Number" />
            </View>
            <View style={styles.View2}>
                <Input placeholder="Enter Date Of Landing" />
            </View>
            <View style={styles.View3}>
                {/* <Icon.Button name="search" style={{ width: 100 }} onPress={() => console.log("Ok")}>
                    <Text style={{ fontSize: 15, color: "white", marginLeft: 5 }}>Next</Text>
                </Icon.Button> */}
                <Button
                    title="Next"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    View1: {
        marginTop: 100
    },
    View2: {
        marginTop: 50
    },
    View3: {
        marginTop: 30,
        width: 100,
        marginLeft: "auto",
        marginRight: "auto"
    }
})

export default FlightDetailComponent