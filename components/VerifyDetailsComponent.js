import React, { Component } from "react";
import { View, Text, StyleSheet, Pressable, Linking } from "react-native";
import { Table, Row, Rows, Col, Cols } from 'react-native-table-component';
import { useSelector, useDispatch } from "react-redux";

function VerifyDetailsComponent({route, navigation}) {
  // console.log(route.params.data[0].name)
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

    function callOwner(){
      Linking.openURL(`tel:${details.phoneNumber}`)
    }
  
    function AddLostFound(){
      navigation.navigate('AddLostFound')
    }

    tableData = [
      ['Name',details.name],
      ['Email', details.email],
      ['Flight No.',details.flightNumber],
      ['Baggage No.',details.baggageNumber],
      ['Departure Airport',details.departureAirport],
      ['Arrival Airport',details.arrivalAirport],
      ['Departure Date', details.departureDate],
      ['Arrival Date', details.arrivalDate],
    ]
    return (
    <View style={styles.container}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Rows data={tableData} textStyle={styles.text}/>
        </Table>

        <Pressable style={[styles.btnStyle,styles.callOwnerBtn]} onPress={callOwner} >
          <Text style={styles.btnText}>Verify Details</Text>
        </Pressable>

        <Pressable style={[styles.btnStyle,styles.addLostFoundBtn]} onPress={AddLostFound} >
          <Text style={styles.btnText}>Cancel</Text>
        </Pressable>
    </View>
     );
}


const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 },
  callOwnerBtn : {
    backgroundColor: '#009387',
  },
  btnText:{
    color:'white',
    fontSize: 18
  },
  addLostFoundBtn:{
    backgroundColor: '#21c92b',
  },
  btnStyle:{
    marginTop:25,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 28,
    borderRadius: 8,
    elevation: 3,
  }


});

export default VerifyDetailsComponent;