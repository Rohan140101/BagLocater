import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { Camera } from 'expo-camera';
import Icon  from 'react-native-vector-icons/FontAwesome';
import { useSelector, useDispatch } from "react-redux";
import { addUrl } from './redux/ActionCreators.js';
import {manipulateAsync, SaveFormat} from "expo-image-manipulator";

function AddLostFoundComponent({navigation}) {
  const [loading, isLoading] = React.useState(false);
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const dispatch = useDispatch();

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
    url: ""
  }
  const passengerDetail = useSelector((state) => {
    details = {
        name: state.PassengerReducer.name, 
        email: state.PassengerReducer.email, 
        flightNumber: state.PassengerReducer.flightNumber, 
        phoneNumber: state.PassengerReducer.phoneNumber, 
        baggageNumber: state.PassengerReducer.baggageNumber, 
        departureAirport: state.PassengerReducer.departureAirport, 
        arrivalAirport: state.PassengerReducer.arrivalAirport, 
        departureDate: state.PassengerReducer.departureDate, 
        arrivalDate: state.PassengerReducer.arrivalDate, 
        url: state.PassengerReducer.url
    };
  })

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

    const cloudinaryCloud = (photo) => {
        isLoading(true);
        const data = new FormData();
        data.append('file', photo);
        data.append('upload_preset', 'baglocater');
        data.append('cloud_name', 'baglocater');
        fetch("https://api.cloudinary.com/v1_1/baglocater/upload", {
            method: 'POST',
            body: data
        })
        .then(res => res.json())
        .then(data => {
            isLoading(false);
            var url = data.secure_url
            dispatch(addUrl({url}));
            navigation.navigate('SelectAirport');
        })
        .catch(error => {
            console.log(error);
        })
    }

    var snap = async () => {
      if (this.camera) {
        let photo = await this.camera.takePictureAsync();
        // console.log(photo);
        const manipulateImage = await manipulateAsync(photo.uri, [{resize: {width: 500, height: 550}}], {format: SaveFormat.JPEG});
        // console.log(manipulateImage);
        const source = {
            uri: manipulateImage.uri,
            type: 'image/jpg',
            name: details.baggageNumber
          }
          cloudinaryCloud(source);
      }
    };

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={ref => {this.camera = ref;}}>
        <View style={styles.buttonContainer}>
        {loading ?<View style={styles.loader}><ActivityIndicator size="large" color="#0000ff" /></View> : <Text></Text>}
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