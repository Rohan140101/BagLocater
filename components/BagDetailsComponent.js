import React from 'react';
import { View,StyleSheet,Text,Image, Button, ScrollView} from "react-native";
import { Table,Row,Rows } from 'react-native-table-component';


function BagDetailsComponent({route, navigation}) {
  const {baggageNumber, flightNumber, date, airport, url} = route.params;
  const TABLE_CONTENT = {
    tableHead : ['Baggage No', baggageNumber],
    tableData : [['Flight No',flightNumber],['Date',date],['Currently At',airport]]

  };
  return (
    <View style= {styles.mainView}>
      <ScrollView>
      <Image source = {{uri: url}} style = {styles.bagImage} />
        <View>
            <Table borderStyle = {{borderWidth:2}} style = {styles.tableStyle} >
               <Row data={TABLE_CONTENT.tableHead} textStyle={styles.headText} style = {styles.headerBack} />
               <Rows data = {TABLE_CONTENT.tableData} textStyle={styles.dataText} />              
            </Table>
            <Text style={styles.bottomText}>Your bag is located at {airport} International Airport. You can collect it from there.</Text>
            <Text style={styles.bottomText}>Keep Note of Your Baggage Number</Text>
            <Text style={styles.bottomText}>Thank You!</Text>
            <Button title='Home' color="#009387" onPress={() => navigation.navigate("Home")}/>
        </View>
      </ScrollView>
        
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