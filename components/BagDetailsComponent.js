import React from 'react';
import { View,StyleSheet,Text,Image} from "react-native";
import { Table,Row,Rows } from 'react-native-table-component';


function BagDetailsComponent() {

  const TABLE_CONTENT = {
    tableHead : ['Baggage No', 'BN12345'],
    tableData : [['Flight No','FN67890'],['Date','06-03-2022'],['Currently At','Mumbai International Airport']]

  };
  return (
    <View style= {styles.mainView}>
        <Image source = {require('../assets/images/bag1.webp')} style = {styles.bagImage} />
        <View>
            <Table borderStyle = {{borderWidth:2}} style = {styles.tableStyle} >
               <Row data={TABLE_CONTENT.tableHead} textStyle={styles.headText} style = {styles.headerBack} />
               <Rows data = {TABLE_CONTENT.tableData} textStyle={styles.dataText} />              
            </Table>
            <Text style={styles.bottomText}>Your bag is located at Mumbai International Airport. You can collect it from there.</Text>
            <Text style={styles.bottomText}>Keep Note of Your Baggage Number</Text>
            <Text style={styles.bottomText}>Thank You!</Text>
        </View>
    </View>
  )
}

export default BagDetailsComponent;

const styles = StyleSheet.create({
    mainView:{
        backgroundColor:'white',
        flex:1,
        padding:10

    },    
    bagImage:{
        width:300,
        height:300,
        alignSelf:'center',
        margin:10
    },
    tableStyle:{
       borderRadius:5,
       marginBottom:10
    },
    headText:{
      textAlign:'center',
      margin:5,
      fontSize:18,
      fontWeight:'bold',
    },
    dataText:{
      textAlign:'center',
      margin:5,
      fontSize:18
    },
    headerBack:{
      backgroundColor:'#e6e6e6'
    },
    bottomText:{
      fontSize:15,
      fontWeight:'bold',
      textAlign:'center',
      margin:5
    }
})