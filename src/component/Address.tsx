import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const address = ({address, addressImg}) => {
  const navigation = useNavigation();
  return (
      <View>

    <TouchableOpacity
      style={{
        flex: 1,
        elevation: 5,
        backgroundColor: 'rgb(242, 241, 237)',
        marginRight: 16,
        borderRadius: 10,
      }} onPress={()=> navigation.navigate('BookingDetailScreen',{location:address})}
      >
      <Image source={{uri: addressImg}} style={{height: 150}} />
      <Text
        style={{
            fontWeight: '600',
            marginTop: 8,
            paddingVertical: 8,
            paddingHorizontal: 8,
        }}>
        {address}
      </Text>
    </TouchableOpacity>
        </View>
  );
};
export default address;
