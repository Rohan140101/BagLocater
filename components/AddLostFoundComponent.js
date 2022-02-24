import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';
import Icon  from 'react-native-vector-icons/FontAwesome';
import { useSelector, useDispatch } from "react-redux";
import {domainName} from './domain.js';

function AddLostFoundComponent({navigation}) {
  var details = {
    name: "",
    email: "",
    flightNumber: "",
    phoneNumber: "",
    baggageNumber: "",
    departureAirport: "",
    arrivalAirport: "",
    departureDate: "",
    arrivalDate: "",
  }
  const passengerDetail = useSelector((state) => {
    details = {name: state.PassengerReducer.name, email: state.PassengerReducer.email, flightNumber: state.PassengerReducer.flightNumber, phoneNumber: state.PassengerReducer.phoneNumber, baggageNumber: state.PassengerReducer.baggageNumber, departureAirport: state.PassengerReducer.departureAirport, arrivalAirport: state.PassengerReducer.arrivalAirport, departureDate: state.PassengerReducer.departureDate, arrivalDate: state.PassengerReducer.arrivalDate};
  })
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    useEffect(() => {
        (async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    const cloudinaryCloud = async (photo) => {
        const data = new FormData();
        data.append('file', photo);
        data.append('upload_preset', 'baglocater');
        data.append('cloud_name', 'ripra');
        fetch("https://api.cloudinary.com/v1_1/ripra/upload", {
            method: 'POST',
            body: data
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            console.log(data.secure_url);
            return data.secure_url;
        })
        .catch(error => {
            console.log(error);
        })
    }

    var snap = async () => {
        if (this.camera) {
            let photo = await this.camera.takePictureAsync();
            console.log(photo);
            const source = {
                uri: photo.uri,
                type: 'image/jpg',
                name: details.baggageNumber
            }
            const pic_url = await cloudinaryCloud(source);
            console.log(pic_url);
            fetch(domainName + '/addLostAndFound', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: details.name,
                email: details.email,
                phoneNumber: details.phoneNumber,
                flightNumber: details.flightNumber,
                baggageNumber: details.baggageNumber,
                departureAirport: details.departureAirport,
                arrivalAirport: details.arrivalAirport,
                departureDate: details.departureDate,
                arrivalDate: details.arrivalDate,
                url: pic_url
            })
        })
            .then((res) => res.json())
            .then(res => {
                if (res.success == 'true') {
                    Alert.alert('Added Bag Successfully');
                    navigation.navigate('Home');
                } else {
                    Alert.alert("Not Added Bag");
                }
            })
            .catch(error => {
                console.log(error);
            })
        }
    };
  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={ref => {this.camera = ref;}}>
        <View style={styles.buttonContainer}>
          <View
            style={styles.button2}
            >
            <View style={{width: 200, marginLeft: 'auto', marginRight: 'auto'}} >
              <Icon name="camera" type="font-awesome" size={44} color='white' onPress={snap} />
            </View>
          </View>
        </View>
      </Camera>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    width: 60,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 50,
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
  button2: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
});



export default AddLostFoundComponent;