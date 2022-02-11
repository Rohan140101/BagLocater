import React, { Component } from "react";
import { View, Text, StyleSheet, Pressable, Linking } from "react-native";
import { Table, Row, Rows, Col, Cols } from 'react-native-table-component';

function AfterScanComponent() {

  function callOwner(){
    // Linking.openURL(`tel:${phoneNumber}`)
    Linking.openURL(`tel:7666004769`)
  }


    tableData = [
      ['Name','Ritik'],
      ['Email', 'ritikgupta@abc.com'],
      ['Flight No.','FN1234'],
      ['Baggage No.','BN6789'],
      ['Departure Airport','BOM'],
      ['Arrival Airport','DEL']
    ]
    return (
    <View style={styles.container}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Rows data={tableData} textStyle={styles.text}/>
        </Table>

        <Pressable style={[styles.btnStyle,styles.callOwnerBtn]} onPress={callOwner} >
          <Text style={styles.btnText}>Call Owner</Text>
        </Pressable>

        <Pressable style={[styles.btnStyle,styles.addLostFoundBtn]} >
          <Text style={styles.btnText}>Add to Lost & Found</Text>
        </Pressable>
    </View>
     )
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

export default AfterScanComponent;