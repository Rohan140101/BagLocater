import React from "react";
import { View, Text, StyleSheet, Pressable, Image, ScrollView } from "react-native";
import { Table, Rows } from 'react-native-table-component';
import { useSelector } from "react-redux";
import {domainName} from './domain.js';

function VerifyDetailsComponent({ route, navigation }) {
  
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
    details = {
      name: route.params.data[0].name,
      email: route.params.data[0].email,
      flightNumber: route.params.data[0].flightNumber,
      phoneNumber: route.params.data[0].phoneNumber,
      baggageNumber: route.params.data[0].baggageNumber,
      departureAirport: route.params.data[0].departureAirport,
      arrivalAirport: route.params.data[0].arrivalAirport,
      departureDate: route.params.data[0].departureDate,
      arrivalDate: route.params.data[0].arrivalDate
    };
  })

  function Verified() {
    fetch(domainName + '/verifydetails', {
      method: 'POST',
      headers: {
          Accept: 'application/json',
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
          baggageNo: details.baggageNumber,
      })
  })
      .then((res) => res.json())
      .then(res => {
          if (res.success == 'true') {
              navigation.navigate('SuccessVerifyDetails');
          } else {
              Alert.alert("Invalid Baggage Number");
          }
      })
      .catch(error => {
          console.log(error);
      })
  }

  function Cancel() {
    navigation.navigate('Home')
  }

  tableData = [
    ['Name', details.name],
    ['Email', details.email],
    ['Flight No.', details.flightNumber],
    ['Baggage No.', details.baggageNumber],
    ['Departure Airport', details.departureAirport],
    ['Arrival Airport', details.arrivalAirport],
    ['Departure Date', details.departureDate],
    ['Arrival Date', details.arrivalDate],
  ]
  return (
    <View style={styles.container}>
      <ScrollView>
        <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
          <Rows data={tableData} textStyle={styles.text} />
        </Table>

        <View style={styles.bagLayout}>
          <Image style={styles.bagImage} source={{ uri: route.params.data[0].url }} />
        </View>



        <Pressable style={[styles.btnStyle, styles.VerifiedBtn]} onPress={Verified} >
          <Text style={styles.btnText}>Verify Details</Text>
        </Pressable>

        <Pressable style={[styles.btnStyle, styles.CancelBtn]} onPress={Cancel} >
          <Text style={styles.btnText}>Cancel</Text>
        </Pressable>

      </ScrollView>

    </View>
  );
}


const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 20, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 },
  VerifiedBtn: {
    backgroundColor: '#900c3f',
  },
  btnText: {
    color: 'white',
    fontSize: 18
  },
  CancelBtn: {
    backgroundColor: '#ff1919',
  },
  btnStyle: {
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 28,
    borderRadius: 8,
    elevation: 3,
  },
  bagLayout: {
    width: 300,
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: 'white'
  },
  bagImage: {
    width: 330,
    height: 330,
    margin: 10,
    alignSelf: 'center',

  },


});

export default VerifyDetailsComponent;