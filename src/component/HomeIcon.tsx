import React from 'react';
import {Text, View,TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';

const homeicon = (props) => {
  return (
    <View style={{
        flex: 1,
        flexDirection: 'column',
        marginVertical: 8
    }}>
        <TouchableOpacity style={{backgroundColor: '#DDDDDD',
        padding: 8,
        
    }}>
      <Icon name={props.name} type={props.type} color={props.color} />
        </TouchableOpacity>
      <Text>{props.iconName}</Text>
    </View>
  );
};

export default homeicon;
