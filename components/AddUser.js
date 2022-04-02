import React, {useState} from "react";
import { Alert, TextInput, ActivityIndicator } from 'react-native';
import { View, Text, StyleSheet } from "react-native";
import { Button } from 'react-native';
import { domainName } from "./domain";

function AddUser({navigation}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, isLoading] = React.useState(false);

    function handleUser() {
        isLoading(true);
        fetch(domainName + '/addUser', {
            method: 'POST',
            headers: {
                "Accept": 'application/json',
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then(res => res.json())
        .then(res => {
            isLoading(false);
            if (res.addUser == "success") {
                Alert.alert("User Added Successfully!")
                navigation.navigate("AdminPanel")
            } else {
                Alert.alert("Try Again!")
                navigation.push("AddUser")
            }
        })
        .catch(error => console.log(error))
    }
    return (
        <View style = {styles.container}>
            {loading ?<View style={styles.loader}><ActivityIndicator size="large" color="#0000ff" /></View> : <Text></Text>}
            <View style = {styles.header}>
               <Text style = {styles.contactHeader}>Add User</Text>
             </View>
             <View style = {styles.footer}>
                 <Text style= {styles.labelText}>Username:</Text>
                 <View style = {styles.action}>
                    <TextInput style ={styles.queryInput} placeholder="Enter Username" onChangeText={(usernameText) => setUsername(usernameText)} numberOfLines={2} />
                 </View>
                 <Text style= {styles.labelText}>Password:</Text>
                 <View style = {styles.action}>
                    <TextInput style ={styles.queryInput} placeholder="Enter Password" onChangeText={(passwordText) => setPassword(passwordText)} numberOfLines={2} />
                 </View>
                 <Button title='Add User' onPress={handleUser} color="#009387" />
             </View>
        </View>
    )
}

export default AddUser;

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#009387'
    },
    header: {
        flex: 0.5,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 20

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
    contactHeader:{
        color: 'white',
        fontSize: 35
    },
    footer: {
        flex: 3,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingBottom: 30
    },
    labelText: {
        marginTop: 15,
        fontSize: 20
    },
    TextInput: {
        marginLeft: 10,
    
       
    },
    action: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 20,
    
    }
})