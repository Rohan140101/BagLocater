import React from "react";
import { StyleSheet, Text, View, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function SuccessVerifyDetailsComponent({ navigation }) {

  function GoHome() {
    navigation.navigate("Home")
  }
  return (
    <View style={{ marginTop: 80, marginLeft: 'auto', marginRight: 'auto', alignItems: 'center' }} >
        <Icon name="check-circle" type="font-awesome" size={300} color='#30d83a' />
        <Text style={styles.textStyle}>
          Bag has been successfully verified and removed from Lost & Found Section
        </Text>
        <Pressable style={styles.btnStyle} onPress={GoHome}>
          <Text style={styles.btnTextStyle}>Go back to Home Page</Text>
        </Pressable>
    </View>
  )

}


const styles = StyleSheet.create({
  textStyle: {
    color: '#30d83a',
    fontSize: 30,
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'center'
  },
  btnStyle: {
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 28,
    borderRadius: 8,
    elevation: 3,
    backgroundColor: '#c837fa',

  },
  btnTextStyle: {
    color: 'white',
    fontSize: 18
  }


})

export default SuccessVerifyDetailsComponent;