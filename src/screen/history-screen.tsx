import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements'
import {useNavigation} from '@react-navigation/native'
const historyscreen = ({route}) => {
  const {service, time, day, location} = route.params;
  const navigation= useNavigation()
  return (
    <View >
      <View
        style={{
          display: 'flex',
          marginBottom: 2,
          position: 'relative',
          paddingVertical: 8,
          flexDirection: 'row',
          backgroundColor: 'white',
          justifyContent: 'space-between',
          paddingHorizontal:16,
        }}>
          
        <Icon
          name="ios-chevron-back-outline"
          type="ionicon"
          color="rgb(250, 85, 15)"
          onPress={navigation.goBack}
          iconStyle={{fontSize: 24}}
        />
        <Text
          style={{
            color: "rgb(250, 85, 15)",
            fontSize: 18,
            fontWeight: 'bold',
            letterSpacing: 0.5,
            margin: 'auto',
          }}>Lịch sử</Text>
          <Text></Text>
      </View>
      <View style={{paddingHorizontal:16,borderColor:'black', borderWidth:1,borderRadius:2,elevation: 5,paddingVertical:16,marginTop:8,backgroundColor:'white',marginHorizontal:16}}>
        <Text style={{textTransform:'uppercase',fontWeight:'bold', letterSpacing:.5,fontSize:20}}>Lịch cắt tóc bạn đã đặt</Text>
        <Text>Salon: <Text style={{fontWeight:'bold'}}>{location}</Text> </Text>
        <Text>Dịch vụ: <Text style={{textTransform:'capitalize', fontWeight:'bold'}}>{service.name}</Text> </Text>
        <Text style={{}}>Thời gian:<Text style={{fontWeight:'bold'}}> {time} </Text>vào <Text style={{fontWeight:'bold'}}> {day}</Text></Text>
        <View style={{flexDirection:'row', justifyContent:'space-between',marginTop:8}}>
          <TouchableOpacity style={{paddingVertical:8,paddingHorizontal:16, borderRadius:5,borderColor:'black',borderWidth:1,flexDirection:'row',alignItems:'center'}} onPress={() => navigation.goBack()}>
            <Text style={{textTransform:'uppercase',fontWeight:'bold',letterSpacing:.5,marginRight:8,fontSize:14}}>Đổi lịch đặt</Text>
          <Icon name='clock' type='feather'/>
          </TouchableOpacity>
          <TouchableOpacity style={{paddingVertical:8,paddingHorizontal:16, borderRadius:5,borderColor:'black',borderWidth:1,flexDirection:'row',alignItems:'center'}}>
            <Text style={{textTransform:'uppercase',fontWeight:'bold',letterSpacing:.5,fontSize:14}}>tìm đến salon</Text>
          <Icon name='location-pin' type='entypo' />
          </TouchableOpacity>
        </View>
        <Text style={{textDecorationLine:'underline',alignSelf:'center', marginTop:16}}>Hủy lịch đặt</Text>
      </View>
      <Text style={{textTransform:'uppercase',fontWeight:'bold', letterSpacing:.5,fontSize:20,marginHorizontal:16,marginTop:16}}>Lịch sử cắt tóc</Text>

    </View>
  );
};
export default historyscreen;
