import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { domainName } from "./domain";

function AdminPanel({ navigation }) {
    function handleViewUsers() {
        fetch(domainName + '/getUsers', {
            method: 'GET',
            headers: {
                "Accept": 'application/json',
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(res => {
            navigation.navigate('ViewUsers', {
                users: res.users
            })
        })
        .catch(error => console.log(error))
    }
    return (
        <View style={{ display: 'flex', alignItems: 'center', marginTop: 100 }}>
            <View style={styles.HomeView3}>
                <Pressable style={styles.btnStyle} onPress={() => {
                    navigation.navigate("AddUser")
                    }}>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <Icon style={styles.iconStyle1} name="user-circle" type="font-awesome" size={30} color='white' />
                        <Text style={styles.btnTextStyle1}>Add User</Text>
                    </View>
                </Pressable>
            </View>
            <View style={styles.HomeView3}>
                <Pressable style={styles.btnStyle} onPress={handleViewUsers}>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <Icon style={styles.iconStyle2} name="users" type="font-awesome" size={30} color='white' />
                        <Text style={styles.btnTextStyle2}>View All Users</Text>
                    </View>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    HomeView3: {
        marginTop: 50,
        display: 'flex',
        alignContent: "center",
    },
    btnStyle: {
        display: "flex",
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 28,
        borderRadius: 8,
        elevation: 3,
        backgroundColor: '#c837fa',
        width: 330,
        alignContent: "center",
    },
    btnTextStyle1: {
        color: 'white',
        fontSize: 18,
        left: -90
    },
    btnTextStyle2: {
        color: 'white',
        fontSize: 18,
        left: -80
    },
    iconStyle1: {
        paddingRight: 150
    },
    iconStyle2: {
        paddingRight: 130
    }

})

export default AdminPanel;