import React, {useState, useEffect} from 'react';
import {
  Text,
  ScrollView,
  View,
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';
import {connect, useDispatch} from 'react-redux';

import {Icon} from 'react-native-elements';
const storescreen = ({cartData}) => {
  const [color,setColor] = useState('transparent')
  const navigation = useNavigation();
  const countItem = () =>{
    let total = cartData.reduce((accumulator, currentValue)=>accumulator + currentValue.count,0)
    console.log(total)
    return total    
    
  }
  // const scroll = document.scrollingElement.scrollTop;
  const slide = [ 
    'https://file.hstatic.net/1000238938/file/post_-_november-01_grande.png',
    'https://bizweb.dktcdn.net/100/229/172/articles/33785635-2094935567430911-6656139864922128384-n.png?v=1527870952660',
    'https://bizweb.dktcdn.net/100/229/172/articles/bai-13-4-19-khai-truong-spa-khuong-dinh.jpg?v=1555094833827',
  ];
  // const [loading,setLoading] = useState(true)
  const [product, setProduct] = useState([]);
  // if (loading) {
  //     return <ActivityIndicator />;
  //   }

  useEffect(() => {
    const product = firestore()
      .collection('product')
      .onSnapshot((querySnapshot) => {
        const product = [];

        querySnapshot.forEach((documentSnapshot) => {
          product.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setProduct(product);
        // setLoading(false);
      });

    // Unsubscribe from events when no longer in use
    return () => product();
  }, []);

  return (
    <View style={{backgroundColor: 'white'}}>
      <View
        style={{
          flexDirection: 'row',
          zIndex: 999,
          marginTop: 8,
          marginHorizontal: 16,
          justifyContent: 'space-between',
          alignItems: 'center',
          // backgroundColor: scroll > 120 ? "white":'black'
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: 'rgba(237, 236, 232,.9)',
            paddingHorizontal: 8,
            width: '70%',
            flexDirection: 'row',
            paddingVertical: 8,
            paddingLeft: 16,
            borderRadius: 10,
            alignItems: 'center',
          }} onPress={()=> navigation.navigate('SearchScreen')}>
          <Icon name="search" type="ionicon" />
          <Text style={{marginLeft: 8, color: 'gray'}}>Tìm kiếm sản phẩm</Text>
        </TouchableOpacity>
        <Text
          style={{
            position: 'absolute',
            top: 0,
            right: 50,
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
          name="cart-outline"
          type="ionicon"
          onPress={() => navigation.navigate('CartScreen')}
        />
        <Icon name="newspaper-outline" type="ionicon" />
      </View>

      <ScrollView style={{top: -50}}>
        <SliderBox images={slide} />
        <View
          style={{
            borderRadius: 5,
            elevation: 2,
            marginHorizontal: 16,
            flexDirection: 'column',
            alignItems: 'center',
            paddingVertical: 8,
            backgroundColor: 'white',
            top: -30,
            paddingHorizontal: 32,
          }}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>Fluffy Store</Text>
          <Text>Mỹ phẩm số 1 cho bé yêu của bạn</Text>
        </View>
        <View>
          {/* <FlatList data={product} renderItem={renderProduct} keyExtractor={item => item.id} /> */}
          <FlatList
            data={product}
            contentContainerStyle={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
            }}
            renderItem={({item}) => (
              <View style={{marginHorizontal: 16, marginBottom: 8}}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('ProductScreen', {
                      name: item.name,
                      price: item.price,
                      image: item.img,
                      description: item.description,
                    })
                  }>
                  <Image
                    style={{height: 200, width: 150}}
                    source={{uri: item.img}}
                  />
                  <Text style={{}}>{item.name}</Text>
                  <Text style={{color: 'rgb(250, 85, 15)', fontWeight: 'bold'}}>
                    {item.price}.000 đ
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};
const mapStateToProps = (state) =>({
  cartData: state.cart,
})
export default connect(mapStateToProps,null) (storescreen);
