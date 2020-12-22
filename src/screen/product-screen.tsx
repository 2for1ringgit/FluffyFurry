import React, {useState} from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Header from '../component/Header';
import {Icon} from 'react-native-elements';
import firestore from '@react-native-firebase/firestore';
import {connect, useDispatch} from 'react-redux';
const productscreen = ({route, cartData}) => {
  const dispatch = useDispatch();
  // const item = await firestore()
  // .collection('Users')
  // .where('id', '==' ,id).get();
  const addToCart = (product) => {
    dispatch({
      type: 'INCREMENT',
      payload: product,
    });
  };
  const addToCart2 = (product) => {
    dispatch({
      type: 'INCREMENT',
      payload: product,
    });
    navigation.navigate('CartScreen');
  };
  const navigation = useNavigation();
  const [display, isDisplay] = useState('0');
  const {name, price, image, description} = route.params;
  const countItem = () => {
    let total = cartData.reduce(
      (accumulator, currentValue) => accumulator + currentValue.count,
      0,
    );
    console.log(total);
    return total;
  };

  const country = [
    'Hàn Quốc',
    'Thụy Sĩ',
    'Nhật Bản',
    'Trung Quốc',
    'Mĩ',
    'Nga',
    'Thụy Điển',
    'Malaysia',
  ];
  const random = country[Math.floor(Math.random() * country.length)];
  return (
    <View
      style={{
        height: '100%',
        backgroundColor: 'white',
      }}>
      <View
        style={{
          display: 'flex',
          marginBottom: 2,
          position: 'relative',
          paddingVertical: 8,
          flexDirection: 'row',
          backgroundColor: 'white',
          justifyContent: 'space-between',
          paddingHorizontal: 16,
        }}>
        <Text
          style={{
            position: 'absolute',
            top: 3,
            right: 7,
            backgroundColor: 'red',
            width: 18,
            height: 18,
            borderRadius: 15,
            color: 'white',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 99,
          }}>
          {countItem()}
        </Text>
        <Icon
          name="ios-chevron-back-outline"
          type="ionicon"
          color="rgb(250, 85, 15)"
          onPress={navigation.goBack}
          iconStyle={{fontSize: 24}}
        />
        <Text
          style={{
            color: 'rgb(250, 85, 15)',
            fontSize: 18,
            fontWeight: 'bold',
            letterSpacing: 0.5,
            margin: 'auto',
          }}>
          Chi tiết sản phẩm
        </Text>
        <Icon
          name="cart-outline"
          type="ionicon"
          onPress={() => navigation.navigate('CartScreen')}
        />
      </View>
      <ScrollView>
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <Image
            source={{uri: image}}
            style={{height: 200, resizeMode: 'contain'}}
          />
          <View style={{marginTop: 2}}>
            <View
              style={{
                backgroundColor: 'white',
                paddingTop: 12,
                borderBottomWidth: 1,
                borderBottomColor: 'gray',
              }}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 20,
                  textTransform: 'uppercase',
                  paddingHorizontal: 16,
                }}>
                {name}
              </Text>
              <Text
                style={{
                  color: 'rgb(250, 85, 15)',
                  fontWeight: 'bold',
                  fontSize: 18,
                  paddingHorizontal: 16,
                  paddingBottom: 8,
                }}>
                đ{price}.000
              </Text>
              <View
                style={{
                  paddingVertical: 12,
                  backgroundColor: 'rgb(169, 255, 138)',
                  paddingHorizontal: 16,
                }}>
                <Text>Miễn phí ship với đơn hàng từ 500k</Text>
              </View>

              <Text
                style={{
                  paddingHorizontal: 16,
                  color: 'rgb(250, 85, 15)',
                  fontWeight: '700',
                  textAlign: 'center',
                  paddingVertical: 12,
                }}>
                Thanh toán khi nhận hàng
              </Text>
            </View>
            <View
              style={{
                paddingHorizontal: 16,
                backgroundColor: 'white',
                marginTop: 8,
                paddingBottom: 12,
              }}>
              {/* <View style={{justifyContent: 'space-around',alignItems:'center', flexDirection: 'row'}}>
            <Text style={{borderRightColor:'gray',borderRightWidth:.6,paddingRight:16,paddingVertical:8,paddingLeft:16}}>Thông tin</Text>
            <Text >Mô tả</Text>
            <Text style={{borderLeftColor:'gray',borderLeftWidth:.6,paddingLeft:16,paddingRight:16}}>Cách dùng</Text>
          </View> */}
              <Text style={{fontWeight: 'bold', paddingVertical: 8}}>
                Xuất xứ: Thụy Sĩ
              </Text>
              <Text>{description}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          borderTopColor: 'gray',
          borderTopWidth: 1,
          backgroundColor: 'white',
        }}>
        <Text
          onPress={() => addToCart(route.params)}
          style={{backgroundColor: 'rgb(250, 85, 15)',
          flex: 3,
          paddingVertical: 20,
          textAlign: 'center',
          color: 'white',
          letterSpacing: 0.5,
          fontSize: 20,
          fontWeight: 'bold',}}>
          Thêm vào giỏ hàng
        </Text>
       
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  cartData: state.cart,
});
export default connect(mapStateToProps, null)(productscreen);
