import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import Icon  from 'react-native-vector-icons/FontAwesome';

function SuccessLostFoundComponent() {
    return (
        <View style={{ marginTop: 100 , marginLeft: 'auto', marginRight: 'auto', alignItems: 'center'}} >
          <Icon name="check-circle" type="font-awesome" size={300} color='#30d83a' />
          <Text style = {styles.textStyle}>
            Bag has been successfully added to Lost & Found Section
          </Text>
        </View>
    )

}


const styles = StyleSheet.create({
  textStyle : {
    color : '#30d83a',
    fontSize : 30,
    marginLeft : 10,
    marginRight : 10,
    textAlign : 'center'
  }


})

export default SuccessLostFoundComponent;