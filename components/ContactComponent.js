import React from "react";
import { TextInput } from 'react-native';
import { View, Text, StyleSheet } from "react-native";
import { Button } from 'react-native';
import {domainName} from './domain.js';


function ContactComponent({navigation}) {

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [query, setQuery] = React.useState('');

    function handlePress(){
        fetch(domainName + '/contact', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                email: email,
                query: query,
            })
        })
            .then((res) => res.json())
            .then(res => {
                if (res.success == 'true') {
                    navigation.navigate('SuccessContact');
                } else {
                    Alert.alert("Invalid Baggage Number");
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <View style = {styles.container}>
            <View style = {styles.header}>
               <Text style = {styles.contactHeader}>Contact Us</Text>
             </View>
             <View style = {styles.footer}>
                 <Text style= {styles.labelText}>Name:</Text>
                 <View style = {styles.action}>
                    <TextInput 
                    style ={styles.queryInput} 
                    placeholder="Enter your name" 
                    numberOfLines={2} 
                    onChangeText={(nameText) => setName(nameText)}
                    />
                 </View>
                 <Text style= {styles.labelText}>Email:</Text>
                 <View style = {styles.action}>
                    <TextInput 
                    style ={styles.queryInput} 
                    placeholder="Enter your email" 
                    numberOfLines={2} 
                    onChangeText={(emailText) => setEmail(emailText)}/>
                 </View>
                 <Text style= {styles.labelText}>Enter Query:</Text>
                 <View style = {styles.action}>
                    <TextInput 
                    style ={styles.queryInput} 
                    placeholder="Enter your message here" 
                    multiline={true} 
                    numberOfLines = {5} 
                    textAlignVertical={'top'} 
                    onChangeText={(queryText) => setQuery(queryText)}/>
                 </View>
                 <Button title='Send message' color="#009387" onPress={handlePress}/>
             </View>
        </View>
    )
}

export default ContactComponent;

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