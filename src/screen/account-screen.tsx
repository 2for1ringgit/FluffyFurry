import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import AccInfo from '../component/AccInfo';
import {Icon} from 'react-native-elements';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';

const accountscreen = () => {
  const navigation = useNavigation();
  const signOut = () => {
    auth()
      .signOut()
      .then(() => console.log('hey'));
    // navigation.navigate('LoginScreen'));
  };
  return (
    <View style={{marginHorizontal: 16, marginTop: 16}}>
      <View style={{flexDirection: 'row'}}>
        <Icon name="person-circle-outline" size={50} type="ionicon" />

        <View style={{flexDirection: 'column'}}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>Tuấn Nguyễn</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text>Chỉnh sửa tài khoản</Text>
            <Icon name="keyboard-arrow-right" type="material" />
          </View>

          <Icon></Icon>
        </View>
      </View>
      <View
        style={{
          backgroundColor: 'black',
          marginBottom: 16,
          paddingVertical: 16,
          borderRadius: 5,
        }}>
        <Text style={{color: 'white', alignSelf: 'center', marginBottom: 16}}>
          Chưa có hạng thành viên? Mua ngay:
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <View style={{flexDirection: 'row', marginBottom: 8}}>
            <View
              style={{
                backgroundColor: 'rgb(235, 217, 21)',
                marginHorizontal: 8,
                borderRadius: 5,
                paddingVertical: 16,
                paddingHorizontal: 16,
              }}>
              <Icon name="star" type="entypo" />
              <Text
                style={{
                  textTransform: 'uppercase',
                  marginTop: 8,
                  fontWeight: 'bold',
                }}>
                hạng black - 69k
              </Text>
            </View>
            <View
              style={{
                backgroundColor: 'rgb(235, 217, 21)',
                borderRadius: 5,
                marginHorizontal: 8,
                paddingVertical: 16,
                paddingHorizontal: 16,
              }}>
              <Icon name="lightning-bolt" type="material-community" />
              <Text
                style={{
                  textTransform: 'uppercase',
                  marginTop: 8,
                  fontWeight: 'bold',
                }}>
                hạng silver - 99k
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View>
        <AccInfo
          iconname="crown"
          icontype="material-community"
          name="Membership"
        />
        <AccInfo
          iconname="person-circle-outline"
          icontype="ionicon"
          name="Thông tin tài khoản"
        />
        <AccInfo iconname="v-card" icontype="entypo" name="Rewards" />
        <AccInfo
          iconname="calendar-clock"
          icontype="material-community"
          name="Lịch sử cắt"
        />
        <AccInfo
          iconname="log-out"
          icontype="entypo"
          name="Đăng xuất"
          navigateTo={() => navigation.navigate('LoginScreen')}
        />
      </View>
    </View>
  );
};

export default accountscreen;
