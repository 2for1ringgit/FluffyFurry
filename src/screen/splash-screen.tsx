import React, {useState, useEffect} from 'react';
import {ImageBackground, Text, View, Image, Button,TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import NavButton from '../component/NavButton';
import styles from '../styles';
import {Icon} from 'react-native-elements';
const splashscreen = () => {
  const navigation = useNavigation()
  // const isLoggedIn = () =>{
  //   firebase.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       navigation.navigate("HomeScreen")
  //     }
  //     navigation.navigate('LoginScreen')
  //  });
  // }
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <LinearGradient
        style={{resizeMode: 'cover', width: '100%', height: '100%'}}
        colors={['#171716', '#333330', '#36362f']}>
        <View style={{paddingHorizontal: 16,flex: 1, alignItems: 'center', marginTop: 40}}>
          <Text
            style={[styles.text, {textTransform: 'uppercase', fontSize: 30}]}>
            Fluffy Furry
          </Text>
          <Text style={[styles.text]}>Chào mừng bạn</Text>
          <Text
            style={[
              styles.text,
              {
                textTransform: 'uppercase',
                fontWeight: 'bold',
                marginTop: 24,
                marginBottom: 12,
                textAlign:'center',
                lineHeight: 20
                
              },
            ]}>
            Trải nghiệm nhiều tiện ích cùng với Fluffy Furry
          </Text>
          <View style={[styles.container]}>
            <View style={{flexDirection: 'row'}}>
              <Icon name="check" type="feather" color="white" />

              <Text style={[styles.text]}>Đặt lịch nhanh chóng</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Icon name="check" type="feather" color="white" />

              <Text style={[styles.text]}>
                Xem lại lịch sử cắt tóc của thú cưng
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Icon name="check" type="feather" color="white" />

              <Text style={[styles.text]}>
                Mua hàng tiện lợi cùng Fluffy Store
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Icon name="check" type="feather" color="white" />

              <Text style={[styles.text]}>
                Đăng nhập dễ dàng không lo quên mật khẩu
              </Text>
            </View>
          </View>
          <TouchableOpacity 
    style={{
      backgroundColor: 'rgb(235, 217, 21)',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 8,
      width: '100%',
      borderRadius: 5,
      
    }}
    onPress={()=>navigation.navigate('LoginScreen')}
    >
      <Text style={{fontWeight: 'bold', fontSize: 16}}>Đăng nhập bằng số điện thoại</Text>
  </TouchableOpacity>
          <Text style={[styles.text, {marginTop: 16}]} onPress={()=>navigation.navigate("app")}>Bỏ qua đăng nhập</Text>
          <Text style={{color: 'gray', marginBottom: 4, marginTop: 20}}>
            Copyright 2015 Fluffy Inc. All right Reserved
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
};
export default splashscreen;
