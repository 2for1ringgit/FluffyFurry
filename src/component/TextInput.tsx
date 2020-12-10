import React, { Component } from 'react';
import { TextInput } from 'react-native';

const input = () => {
    return (
        <TextInput onChangeText dataDetectorTypes={'phoneNumber'} keyboardType='numeric' style={{flex:6,padding:12, backgroundColor:'white',borderColor:'black',borderRadius: 5,}}>

        </TextInput>
    )
}

export default input