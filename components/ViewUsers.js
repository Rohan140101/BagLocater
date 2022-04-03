import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert, ActivityIndicator } from "react-native";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { domainName } from "./domain";

function ViewUsers({route, navigation}) {
    const [loading, isLoading] = React.useState(false);
    const {users} = route.params;
    var HeadTable = ["Username", "Operation"];
    var DataTable = [];
    users.forEach(element => {
        DataTable.push([element, "Delete"]);
    });

    const deleteUser = (username) => {
        isLoading(true);
        fetch(domainName + '/deleteUser', {
            method: 'POST',
            headers: {
                "Accept": 'application/json',
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username
            })
        })
        .then(res => res.json())
        .then(res => {
            isLoading(false);
            if (res.status == "success") {
                Alert.alert("User Deleted Successfully");
                navigation.navigate('AdminPanel');
            }
        })
        .catch(error => console.log(error))
    }

    const addDelete = (username, index) => {
        return(
            <TouchableOpacity onPress={() => deleteUser(username)}>
                <View style={styles.btn}>
                    <Text style={styles.btnText}>Delete</Text>
                </View>
            </TouchableOpacity>
        );
    }
    return(
        <View style={styles.container}>
            {loading ?<View style={styles.loader}><ActivityIndicator size="large" color="#0000ff" /></View> : <Text></Text>}
            <Table borderStyle={{borderColor: 'transparent'}}>
            <Row data={HeadTable} style={styles.head} textStyle={styles.text}/>
            {
                DataTable.map((rowData, index) => (
                <TableWrapper key={index} style={styles.row}>
                    {
                        rowData.map((cellData, cellIndex) => (
                            <Cell key={cellIndex} data={cellIndex === 1 ? addDelete(rowData[0], index) : cellData} textStyle={styles.text}/>
                        ))
                    }
                </TableWrapper>
                ))
            }
            </Table>
      </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#009387' },
    text: { margin: 6 },
    row: { flexDirection: 'row', backgroundColor: 'white', padding: 10 },
    btn: { width: 58, height: 20, backgroundColor: 'red',  borderRadius: 2 },
    btnText: { textAlign: 'center', color: '#fff' },
    loader: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1
    }
});

export default ViewUsers;
