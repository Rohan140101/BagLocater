import React from 'react';
import { View, Text,Image, StyleSheet,ScrollView,Button} from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';

function SearchedBagsComponent({navigation}) {
  return (
    <View style={styles.container}>
        <Text style={styles.headerText}>
            All Bags Lost on 05-02-2022 of flight FN67890
        </Text>
        <ScrollView>
        {/* First Row  */}
        <View style={styles.bagLayout}>
            <TouchableOpacity style={styles.indiBagView} onPress = {() => navigation.navigate("BagDetails")}>
               <Image style={styles.bagImage} source={require('../assets/images/bag1.webp')} />
               <Text style={styles.bagOwnerName}>Ritesh Dewoolkar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.indiBagView}>
               <Image style={styles.bagImage} source={require('../assets/images/bag2.webp')} />
               <Text style={styles.bagOwnerName}>Ritik Gupta</Text>
            </TouchableOpacity>
        </View>
        {/* Second Row */}
        <View style={styles.bagLayout}>
            <TouchableOpacity style={styles.indiBagView}>
               <Image style={styles.bagImage} source={require('../assets/images/bag3.webp')} />
               <Text style={styles.bagOwnerName}>Rohan Kuckian</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.indiBagView}>
               <Image style={styles.bagImage} source={require('../assets/images/bag4.webp')} />
               <Text style={styles.bagOwnerName}>ABC </Text>
            </TouchableOpacity>
        </View>
      
        
        </ScrollView>

        <Button
         title="Can't find your bag? Click here" style={styles.buttonStyle} 
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
    flexDirection:'row'
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