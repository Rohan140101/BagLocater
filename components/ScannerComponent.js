import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button  } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import {domainName} from './domain.js';
import { addPassengerDetail } from "./redux/ActionCreators";
import { connect, useSelector, useDispatch } from 'react-redux';

// const mapStateToProps = (state) => {
//     return {

//     }
// }

// const mapDispatchToProps = (dispatch) => ({
//     addPassengerDetail: (details) => dispatch(addPassengerDetail(details))
// })

function Scanner({navigation}) {
    const [hasPermission, setPermission] = useState(null);
    const [scanned, setScanned] = useState(false);    

    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setPermission(status === "granted");
        })();
    })

    

    const handleBarCodeScanner = ({ type, data }) => {
        setScanned(true);
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
            <BarCodeScanner onBarCodeScanned={scanned ? undefined : handleBarCodeScanner} style={StyleSheet.absoluteFillObject} />
            {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
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

// export default connect(mapStateToProps, mapDispatchToProps)(Scanner);
export default Scanner;