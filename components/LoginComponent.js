import React, { Component } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { View, Text, Alert, ActivityIndicator } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {domainName} from './domain.js';

function LoginComponent({navigation}) {

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    function handleLogin() {
        fetch(domainName + '/authenticate', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
            .then((res) => res.json())
            .then(res => {
                if (res.success == 'true') {
                    Alert.alert('Congratulations you are signed in');
                    navigation.navigate('ScanAndRetrieve');
                } else {
                    Alert.alert("Invalid Username or Password");
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.signInText}>Welcome to Bag Locater!</Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.labelText}>Username:</Text>
                <View style={styles.action}>
                    <FontAwesome name="user-o" color="#05375a" size={20} />
                    <TextInput style={styles.TextInput} placeholder="Enter your username" onChangeText={(usernameText) => setUsername(usernameText)}></TextInput>
                </View>
                <Text style={styles.labelText}>Password:</Text>
                <View style={styles.action}>
                    <Feather name="lock" color="#05375a" size={20} />
                    <TextInput style={styles.TextInput} secureTextEntry={true} placeholder="Enter your password" onChangeText={(passText) => setPassword(passText)}></TextInput>
                </View>

                <Button title="Sign In" color="#009387" onPress={handleLogin} />
            </View>
        </View>
    )
}


export default LoginComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387',
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50

    },
    footer: {
        flex: 3,
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 20,
        paddingBottom: 30
    },
    signInText: {
        color: 'white',
        fontSize: 30,
    },
    labelText: {
        marginTop: 20,
        fontSize: 20
    },
    action: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 30
    },
    TextInput: {
        marginLeft: 10
    }

});