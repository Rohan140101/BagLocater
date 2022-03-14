import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button  } from "react-native";
import {domainName} from './domain.js';
import { addPassengerDetail } from "./redux/ActionCreators";
import { useDispatch } from 'react-redux';
import { Camera } from "expo-camera";

function Scanner({navigation}) {
    const [hasPermission, setPermission] = useState(null);
    const [scanned, setScanned] = useState(false);    

    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setPermission(status === "granted");
        })();
    })

    

    const handleBarCodeScanner = ({ data }) => {
        setScanned(true)
        fetch(domainName + '/decode', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                data: data
            })
        })
            .then((res) => res.json())
            .then(res => {
                dispatch(addPassengerDetail(res))
                    navigation.navigate('AfterScan');
                
            })
            .catch(error => {
                console.log(error);
            })
    };

    if (hasPermission === null) {
        return <Text>Requesting for Camera Permission</Text>
    }

    if (hasPermission === false) {
        return <Text>No Access to Camera</Text>
    }

    return (
        <View style={styles.container}>
            <Camera onBarCodeScanned={handleBarCodeScanner} style={StyleSheet.absoluteFillObject} />
            {scanned && <Button title={'Tap to Scan Again'} onPress={() => {
                navigation.push('Scanner')    
            }} />}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
});

export default Scanner;