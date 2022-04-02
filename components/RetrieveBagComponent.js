import React from "react";
import { View, StyleSheet, Button, Alert, ActivityIndicator, Text } from "react-native";
import { Input } from "react-native-elements";
import {domainName} from './domain.js';


function RetrieveBagComponent({navigation}) {

    const [baggageNo, setBaggageNo] = React.useState('');
    const [loading, isLoading] = React.useState(false);

    const handlePress = () => { 
        isLoading(true);
        fetch(domainName + '/retrievebag', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                baggageNo: baggageNo,
            })
        })
            .then((res) => res.json())
            .then(res => {
                isLoading(false);
                if (res.success == 'true') {
                    navigation.navigate('VerifyDetails',{data:res.data});
                } else {
                    Alert.alert("Invalid Baggage Number");
                }
            })
            .catch(error => {
                isLoading(false);
                console.log(error);
            })
    }


    return (
        <View>
            {loading ?<View style={styles.loader}><ActivityIndicator size="large" color="#0000ff" /></View> : <Text></Text>}
            <View style={styles.View1}>
                <Input placeholder="Enter Baggage Number" onChangeText={(baggageNoText) => setBaggageNo(baggageNoText)}/>
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
    loader: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1
    },
    View3: {
        marginTop: 30,
        width: 100,
        marginLeft: "auto",
        marginRight: "auto"
    }
})

export default RetrieveBagComponent