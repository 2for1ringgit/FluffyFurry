import React from 'react';
import {View, Text, Image, FlatList, ScrollView} from 'react-native';
import Header from '../component/Header';
import {Icon} from 'react-native-elements';
import Address from '../component/Address';
import {useNavigation} from '@react-navigation/native'
const bookingscreen = ({}) => {
    const navigation = useNavigation()
    const address1 = [
      {
          location:'321 Đường Bá Trạc, Phường 2, Quận 8',
          id:2,
          img:'https://toplist.vn/images/800px/petcity-442681.jpg'
      },
      {
          location:"54 Bùi Vân Hòa, TP. Biên Hòa",
          id:2,
          img:'https://www.domina-shopping.lv/files/veikali/max/pet-city-203.jpg'
      },
      {
          location:"65 PHan Văn Hớn, Quận 12",
          id:2,
          img:"https://images.foody.vn/res/g77/766641/prof/s576x330/foody-upload-api-foody-mobile-untitled-1-190822173042.jpg"
      },
     
  ]
  const address2 = [ {
    location:"42 Lê Đại Hành, Q. Hai Bà Trưng",
    id:1,
    img: 'https://toplist.vn/images/800px/petcity-442681.jpg'
},
{
    location:"1026 Đường Láng, Q. Đống Đa",
    id:1,
    img: 'https://www.domina-shopping.lv/files/veikali/max/pet-city-203.jpg'
},
{
    location:'31 Trường Chinh, Q.Thanh Xuân',
    id:1,
    img: 'https://images.foody.vn/res/g77/766641/prof/s576x330/foody-upload-api-foody-mobile-untitled-1-190822173042.jpg'
},]
  const renderAddress = address1.map((item,index) => (
    <Address address={item.location} addressImg={item.img} key={index}/>
  ))
  const renderAddress2 = address2.map((item,index) => (
    <Address address={item.location} addressImg={item.img} key={index}/>
  ))
  return (
    <View style={{backgroundColor: 'rgb(210,210,210)'}}>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 16,
          justifyContent: 'space-between',
          backgroundColor: 'black',
          paddingVertical: 16,
        }}>
        <Text></Text>
        <Text
          style={{
            color: 'white',
            fontSize: 18,
            fontWeight: 'bold',
            letterSpacing: 0.5,
          }}>
          Đặt lịch cắt tóc
        </Text>
        <View>
        
        <Icon name="home" type="entypo" color="white" onPress={() => navigation.goBack()} />
        </View>
      </View>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'white',
            paddingVertical: 8,
            marginBottom: 16,
            alignItems:'center',
            justifyContent:'space-between',
            paddingHorizontal: 16
          }}>
          <Icon name="bookmark" type="entypo" size={30} />
          <View style={{marginRight:'auto', marginLeft: 8}}>
            <Text style={{fontWeight:'bold', fontSize: 16}}>Địa điểm đã lưu</Text>
            <Text>Đến địa điểm yêu thích của bạn dễ dàng</Text>
          </View>
          <Icon name="chevron-forward-outline" type="ionicon"/>
        </View>

        <View
          style={{
            backgroundColor: 'white',
            paddingVertical: 16,
            paddingHorizontal: 16,
            marginBottom: 16,
          }}>
          <Text
            style={{
              paddingBottom: 16,
              fontWeight: 'bold',
              fontSize: 18,
              textTransform: 'uppercase',
            }}>
            Salon miền Bắc (3)
          </Text>
          <View style={{flexDirection: 'row'}}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} >
              
              {renderAddress2}
            </ScrollView>
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            paddingVertical: 16,
            paddingHorizontal: 16,
          }}>
          <Text
            style={{
              paddingBottom: 16,
              fontWeight: 'bold',
              fontSize: 18,
              textTransform: 'uppercase',
            }}>
            Salon miền Nam (3)
          </Text>
          <View style={{flexDirection: 'row'}}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
             
              {renderAddress}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default bookingscreen;
