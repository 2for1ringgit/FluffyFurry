import React from 'react';
import {Text, View} from 'react-native';
import {Icon} from 'react-native-elements';

const accinfo = ({iconname, icontype, name,navigateTo}) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 16,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.4,
      }} onPress={navigateTo}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Icon name={iconname} type={icontype} size={24} />
        <Text style={{color: 'black', marginLeft: 8, fontSize: 18}}>
          {name}
        </Text>
      </View>
      <View>
        <Icon name="keyboard-arrow-right" type="material" />
      </View>
    </View>
  );
};

export default accinfo;
