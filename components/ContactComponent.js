import React from "react";
import { TextInput } from 'react-native';
import { View, Text, StyleSheet } from "react-native";
import { Button } from 'react-native';
function ContactComponent() {
    return (
        <View style = {styles.container}>
            <View style = {styles.header}>
               <Text style = {styles.contactHeader}>Contact Us</Text>
             </View>
             <View style = {styles.footer}>
                 <Text style= {styles.labelText}>Name:</Text>
                 <View style = {styles.action}>
                    <TextInput style ={styles.queryInput} placeholder="Enter your name" numberOfLines={2} />
                 </View>
                 <Text style= {styles.labelText}>Email:</Text>
                 <View style = {styles.action}>
                    <TextInput style ={styles.queryInput} placeholder="Enter your email" numberOfLines={2} />
                 </View>
                 <Text style= {styles.labelText}>Enter Query:</Text>
                 <View style = {styles.action}>
                    <TextInput style ={styles.queryInput} placeholder="Enter your message here" multiline={true} numberOfLines = {5} textAlignVertical={'top'} />
                 </View>
                 <Button title='Send message' color="#009387" />
             </View>
        </View>
    )
}

export default ContactComponent;

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    header: {
        flex: 0.5,
        backgroundColor: '#009387',
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
    // queryInput:{
    //      borderBottomWidth:1,
    //      width:350 
    // },
    action: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 20,
    
    }
})