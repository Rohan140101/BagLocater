import React, { Component, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import {domainName} from "./domain";


function FlightDetailComponent({navigation}) {
    const [flightNumber, setFlightNumber] = useState("");
    const [dateOfLanding, setDateOfLanding] = useState("");

    function handlePress() {
        fetch(domainName + "/searchBags", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                "Content-Type": 'application/json'

            },
            body: JSON.stringify({
                flightNumber: flightNumber,
                dateOfLanding: dateOfLanding
            })
        })
        .then((res) => res.json())
        .then(res => {
            navigation.navigate("SearchedBags", {
                bags: res.data
            })
        })
        .catch(error => console.log(error))
    }

    return (
        <View>
            <View style={styles.View1}>
                <Input placeholder="Enter Flight Number" onChangeText={(fN) => setFlightNumber(fN)} />
            </View>
            <View style={styles.View2}>
                <Input placeholder="Enter Date Of Landing" onChangeText={(dol) => setDateOfLanding(dol)} />
            </View>
            <View style={styles.View3}>
                <Button
                    title="Next" onPress={handlePress}
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