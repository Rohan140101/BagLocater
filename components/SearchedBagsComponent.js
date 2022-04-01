import React from 'react';
import { View, Text,Image, StyleSheet,ScrollView,Button} from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';

function SearchedBagsComponent({route, navigation}) {
  const {bags} = route.params;
  function handlePress(baggageNumber, flightNumber, date, airport, url) {
    navigation.navigate('BagDetails', {
      baggageNumber,
      flightNumber,
      date,
      airport,
      url
    });
  }

  return (
    <View style={styles.container}>
        <Text style={styles.headerText}>
            All Bags Lost on {bags[0].arrivalDate} of flight {bags[0].flightNumber}
        </Text>
        <ScrollView>
          <View style={styles.bagLayout}>
            {bags.map(element => {
              return (
                  <TouchableOpacity key={element.id} style={styles.indiBagView} onPress = {() => handlePress(element.baggageNumber, element.flightNumber, element.arrivalDate, element.airport, element.url)}>
                    <Image style={styles.bagImage} source={{uri: element.url}} />
                    <Text style={styles.bagOwnerName}>{element.name}</Text>
                  </TouchableOpacity>
          )
            })}
          </View>
        </ScrollView>

        <Button
         title="Can't find your bag? Click here" style={styles.buttonStyle} onPress={() => navigation.navigate("Contact")}
         />
    </View>
  )
}

export default SearchedBagsComponent;

const styles = StyleSheet.create({
  container:{
   flex:1
  },
  
  headerText:{
    fontSize:16,
    margin:20,
    textAlign:'center',
    fontWeight:'bold'
  },
  bagLayout:{
    flexDirection:'column',
    width: 300,
    marginLeft: "auto",
    marginRight: "auto"
  },
  indiBagView:{
    elevation:10,
    margin:5,
    flex:1,
    backgroundColor:'white'
  },
  bagImage:{
    width:165,
    height:180,
    margin:10,
    alignSelf:'center',
    
  },
  bagOwnerName:{
    fontSize:18,
    margin:5,
    textAlign:'center'
  },
  buttonStyle:{
    width:100

  } 
  
  

})