import React, { Component } from "react";
import { View, Text,StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

function TermsAndConditionsComponent() {
    return (
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.termsHeader}>
                <Text style={styles.termsAndCond}>Terms and Conditions</Text>
            </View>
            <View style={styles.termsText}>
               <Text style={styles.mainText}>
                    Welcome to Bag Locater
                    {"\n"}{"\n"}These terms and conditions outline the rules and regulations for the use of BagLocater's Website or App.
                    {"\n"}{"\n"}By accessing this website we assume you accept these terms and conditions. Do not continue to use Bag Locater if you do not agree to take all of the terms and conditions stated on this page.
                    {"\n"}{"\n"}The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.
                    {"\n"}{"\n"} <Text style={{fontWeight:'bold',fontSize:24}}> Cookies </Text>
                    {"\n"}{"\n"}We employ the use of cookies. By accessing Bag Locater, you agreed to use cookies in agreement with the BagLocater's Privacy Policy.
                    {"\n"}{"\n"}Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
                    {"\n"}{"\n"} <Text style={{fontWeight:'bold',fontSize:24}}> License </Text>
                    {"\n"}{"\n"}Unless otherwise stated, BagLocater and/or its licensors own the intellectual property rights for all material on Bag Locater. All intellectual property rights are reserved. You may access this from Bag Locater for your own personal use subjected to restrictions set in these terms and conditions.
                    {"\n"}{"\n"}Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. BagLocater does not filter, edit, publish or review Comments prior to their presence on the website. 
               </Text>
            </View>
        </View>
        </ScrollView>
    )
}

export default TermsAndConditionsComponent;

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    termsHeader:{
        flex: 0.5,
        backgroundColor: '#009387',
        justifyContent: 'flex-end',
        paddingHorizontal: 10,
        paddingTop: 50,
        paddingBottom:10
    },
    termsAndCond:{
        fontSize:35,
        color:'white'
    },
    termsText:{
        backgroundColor:'white',
        flex:3,
        padding:10
    },
    mainText:{
        fontSize:18
    }
})