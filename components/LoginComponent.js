import React, {useRef, useEffect} from 'react';
import { StyleSheet, TextInput, ActivityIndicator, SafeAreaView } from 'react-native';
import { View, Text, Alert } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { Button } from 'react-native';
import {domainName} from './domain.js';

function LoginComponent({navigation}) {

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [loading, isLoading] = React.useState(false);

    function handleLogin() {
        isLoading(true);
        fetch(domainName + '/authenticate', {
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
            .then((res) => res.json())
            .then(res => {
                isLoading(false);
                if (res.success == 'true') {
                    Alert.alert('Congratulations you are signed in');
                    if (!res.isAdmin) {
                        navigation.navigate('ScanAndRetrieve');
                    } else {
                        navigation.navigate("AdminPanel");
                    }
                } else {
                    Alert.alert("Invalid Username or Password");
                    navigation.navigate("Login");
                }
            })
            .catch(error => {
                isLoading(false);
                Alert.alert("Invalid Username or Password");
                navigation.navigate("Login");
            })
    }

    return (
        <SafeAreaView style={styles.container}>            
            <View style={styles.header}>
                <Text style={styles.signInText}>Welcome to Bag Locater!</Text>
            </View>
            {loading ?<View style={styles.loader}><ActivityIndicator size="large" color="#0000ff" /></View> : <Text></Text>}
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
        </SafeAreaView>
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