import * as React from "react";
import { View, Text, Image,StyleSheet } from "react-native";

function AboutComponent() {
    return (
        <View style = {styles.container}>
            <View style = {styles.header}>
                <Text style = {styles.aboutHeader}>About Us</Text>
            </View>
            <View style= {styles.footer}>
                <Text style={styles.mainHeadingText}>Our Team</Text>
                <View style=  {{flexDirection:'row'}}>
                <View style={{flex:1}}>
                   <Image style={styles.teamImage} source={require('../assets/images/RohanKuckian.png')} />
                   <Text style={styles.teamNameText}>Rohan Kuckian</Text>
                </View>
                <View style = {{flex:1}}>
                   <Image style={styles.teamImage} source={require('../assets/images/ritikgupta.jpg')} />
                   <Text style={styles.teamNameText}>RitikKumar Gupta</Text>
                   </View>
                <View style={{flex:1}}>
                   <Image style={styles.teamImage} source={require('../assets/images/RiteshPhoto.jpg')} />
                   <Text style={styles.teamNameText}>Ritesh Dewoolkar</Text>
                </View>
                </View>
                <Text style={styles.mainHeadingText}>Our Vision</Text>
                <Text style={styles.ourVisionText}>To provide superior quality service to our customers and always be the best. {"\n"}{"\n"}To completely remove the tedious process of getting the lost bag and help people in finding their bags with easy and fast service.</Text>
            </View>
        </View>
    )
}

export default AboutComponent;

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#009387',
        
    },
    header: {
        flex: 0.5,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 20

    },
    aboutHeader:{
        color: 'white',
        fontSize: 35
    },
    footer:{
        flex:3,
        backgroundColor:'white',
        paddingHorizontal: 20,
        paddingBottom: 30
    },
    mainHeadingText:{
        fontSize:25,
        marginTop:10
    },
    teamImage:{
        height:100,
        width:100,
        borderRadius:50,
        alignSelf:"center",
        marginTop:20,
        margin:10,
      
    },
    teamNameText:{
        fontSize:20,
        fontWeight:"bold",
        marginTop:5,
        fontStyle:'italic',
        margin:10,
        marginBottom:20
    },
    ourVisionText:{
        fontSize:20,
        margin:10
    }
    

})