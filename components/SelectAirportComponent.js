import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from "react-redux";
import { addAirport } from "./redux/ActionCreators";

function SelectAirportComponent({navigation}) {

    const data = [
        { label: 'Chhatrapati Shivaji International Airport (BOM)', value: 'BOM' },
        { label: 'Bengaluru International Airport (BLR)', value: 'BLR' },
        { label: 'Chennai International Airport (MAA)', value: 'MAA' },
        { label: 'Indira Gandhi International Airport (DEL)', value: 'DEL' },
        { label: 'Netaji Subhash Chandra Bose International Airport (CCU)', value: 'CCU' },
        { label: 'Ahmedabad Airport (AMD)', value: 'AMD' },
        { label: 'Amritsar Airport (LUH)', value: 'LUH' },
        { label: 'Hyderabad International Airport (HYD)', value: 'HYD' },
    ];

    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const dispatch = useDispatch();

    const renderLabel = () => {
        return (
            <Text style={[styles.label, isFocus && { color: 'blue' }]}>
                Select Airport
            </Text>
        );

        return null;
    };

    const handlePress = () => {
        dispatch(addAirport(value));
        navigation.navigate("SuccessLostFound");
    }

    return (
        <View style={styles.container}>
            {renderLabel()}
            <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select item' : '...'}
                searchPlaceholder="Search..."
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    setValue(item.value);
                    setIsFocus(false);
                }}
                renderLeftIcon={() => (
                    <AntDesign
                        style={styles.icon}
                        color={isFocus ? 'blue' : 'black'}
                        name="Safety"
                        size={20}
                    />
                )}
            />
            <Pressable style={ styles.btnStyle } onPress={handlePress}>
            <Text style={ styles.btnTextStyle }>Add</Text>
            </Pressable>
            
        </View>
    );

}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 16,
        marginTop : 120
    },
    dropdown: {
        height: 70,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
        color: "black",
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    btnStyle : {
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 28,
    borderRadius: 8,
    elevation: 3,
    backgroundColor : '#c837fa',
    
    },
    btnTextStyle : {
        color : 'white',
        fontSize : 18
    }
});

export default SelectAirportComponent;