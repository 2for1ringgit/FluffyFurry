import React from 'react';
import {Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
const header = ({header,bgColor}) => {
  const navigation = useNavigation();
  return (
    <View style={{paddingVertical:8,display:'flex',position: 'relative', flexDirection: 'row', backgroundColor: bgColor, justifyContent:'space-between'}}>

      <Icon
        name="ios-chevron-back-outline"
        type="ionicon"
        color="white"
        onPress={navigation.goBack}
        iconStyle={{fontSize: 24}}
        />
      <Text
        style={{
          color: 'white',
          fontSize: 18,
          fontWeight: 'bold',
          letterSpacing: 0.5,
          margin: 'auto',
          
        }}>
        {header}
      </Text>
      <Text></Text>
    </View>
  );
};

export default header;
