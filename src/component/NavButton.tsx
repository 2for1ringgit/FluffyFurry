import React from 'react';
import {TouchableOpacity,Text} from 'react-native';
import {color} from '../color';
import { useNavigation } from '@react-navigation/native';
const navbutton = ({title,screenName})=> {
  const navigation = useNavigation()
  return (

    <TouchableOpacity 
    style={{
      backgroundColor: color.yellow,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 8,
      width: '100%',
      borderRadius: 5,
      
    }}
    onPress={() => navigation.navigate(screenName)}
    >
      <Text style={{fontWeight: 'bold', fontSize: 16}}>{title}</Text>
  </TouchableOpacity>
    )
};

export default navbutton
