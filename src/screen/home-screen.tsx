import React, {useState} from 'react';
import {View, Text, FlatList, ScrollView, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SliderBox} from 'react-native-image-slider-box';
import firestore from '@react-native-firebase/firestore';
import {Icon} from 'react-native-elements';
import HomeIcon from '../component/HomeIcon';
import auth from '@react-native-firebase/auth';

const slide = [
  'https://file.hstatic.net/1000238938/file/post_-_november-01_grande.png',
  'https://64.media.tumblr.com/4f53ec035175ac534921f3ef299d0173/tumblr_ozpkmqtlXf1vkuoq9o1_1280.jpg',
  'https://www.chamsocpet.com/wp-content/uploads/2019/09/nhung-loi-ich-cua-viec-spa-cho-meo-tai-petcare.jpg',
  'https://www.petcity.vn/media/news/0606_1200KGHT.png',
];

const image = [
  {
    img: require('../image/promo1.jpg'),
    id: 1,
  },
  {
    img: require('../image/promo14.png'),
    id: 2,
  },
  {
    img: require('../image/promo10.png'),
    id: 3,
  },
  {
    img: require('../image/promo5.jpg'),
    id: 4,
  },
  {
    img: require('../image/promo4.jpg'),
    id: 5,
  },
];
const homescreen = () => {
  const navigation = useNavigation();
  return (
    <View
      
      style={{backgroundColor: 'rgb(222, 227, 224)'}}>
        {/* <TouchableOpacity style={{zIndex: 9999, backgroundColor: 'rgb(235, 217, 21)',  justifyContent:'flex-start',t}} > */}
            {/* <Icon name='phone' type='entypo' />
          </TouchableOpacity> */}
      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',backgroundColor:'white', paddingVertical:8,paddingHorizontal: 16}}>
        <Icon name='bell' type='feather'/>
        <Text style={{fontSize:24,fontWeight:'bold',marginLeft:32,lineHeight:17.5,paddingTop:10}}>Fluffy{"\n"}Furry</Text>
        <Text style={{backgroundColor:'rgb(235, 217, 21)',borderRadius: 15,paddingVertical:4,paddingHorizontal: 12}}>Tài khoản: 0đ</Text>
      </View>
      <View style={{flexDirection: 'row',marginTop:8,paddingHorizontal:16,backgroundColor:'black',paddingBottom: 64,paddingTop:8}}>
        <Icon name="person-circle-outline" size={50} type="ionicon" color='white' />
        <View style={{flexDirection: 'column'}}>
          <Text style={{fontWeight: 'bold', fontSize: 18, color:'white'}}>Username</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{color:'white'}}>Chỉnh sửa tài khoản</Text>
            <Icon name="keyboard-arrow-right" type="material" />
          </View>
        </View>
      </View>
     
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          borderRadius: 8,
          marginBottom: 16,
          justifyContent: 'space-around',
          marginTop: 16,
          paddingVertical: 8
          ,marginHorizontal:16,
          top:-60
        }}>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('BookingScreen')}
            style={{
              borderRadius: 50,
              padding: 12,
              backgroundColor: 'rgb(220, 224, 222)',
            }}>
            <Icon name="calendar" type="ionicon" />
          </TouchableOpacity>
          <Text style={{fontSize: 13}}>Đặt lịch</Text>
        </View>
        <View>
          <TouchableOpacity
            style={{
              borderRadius: 50,
              padding: 12,
              backgroundColor: 'rgb(220, 224, 222)',
            }}>
            <Icon name="v-card" type="entypo" />
          </TouchableOpacity>
          <Text style={{fontSize: 13}}>Reward</Text>
        </View>
        <View>
          <TouchableOpacity
            style={{
              borderRadius: 50,
              width: 50,
              alignSelf: 'center',
              padding: 12,
              backgroundColor: 'rgb(220, 224, 222)',
            }}>
            <Icon name="clock" type="feather" />
          </TouchableOpacity>
          <Text style={{fontSize: 13}}>Lịch sử cắt</Text>
        </View>
        <View>
          <TouchableOpacity
            style={{
              borderRadius: 50,
              width: 50,
              alignSelf: 'center',
              padding: 12,
              backgroundColor: 'rgb(220, 224, 222)',
            }}>
            <Icon name="crown" type="material-community" />
          </TouchableOpacity>
          <Text style={{fontSize: 13}}>Membership</Text>
        </View>
      </View>
      <ScrollView style={{top:-60,marginBottom: 240}}>

      <SliderBox images={slide} />
      <View style={{marginHorizontal:16}}>

      <Text style={{fontWeight:'bold', letterSpacing:.5,textTransform:'uppercase',marginTop: 16}}>Fluffy Style Book</Text>
      <FlatList
        renderItem={({item}) => (
          <View style={{flex: 1}}>
            <Image style={{height: 200,width:'100%', marginVertical: 8,borderRadius:16}} source={item.img} />
          </View>
        )}
        keyExtractor={(item) => item.id}
        data={image}
        />
        </View>
      </ScrollView>
          
          
    </View>
  );
};
export default homescreen;
