import React, {useState, useEffect} from 'react';
import {
  Text,
  ScrollView,
  View,
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';
import {connect, useDispatch} from 'react-redux';
import {Icon} from 'react-native-elements';

const searchscreen = ({cartData}) => {
  const navigation = useNavigation();
  const [product, setProduct] = useState([]);
  const [searchText, setSearchText] = useState('');
  // const [query, setQuery] = useState('');
  const handleData = (searchValue) => {
    let searchData = product.filter(({name}) => name.toLowerCase().indexOf(searchValue) !== -1)
    return searchData
}
  const searchItem = (text) => {
    setSearchText(text);
    setProduct(handleData(text));
  }

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
      <View  style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',marginBottom:16,marginTop:8}}
        >
           <Icon
          name="ios-chevron-back-outline"
          type="ionicon"
          color="rgb(250, 85, 15)"
          onPress={navigation.goBack}
          iconStyle={{fontSize: 24}}
        />
        <TextInput
          placeholder="Nhập tên sản phẩm" style={{
            backgroundColor: 'rgba(237, 236, 232,.9)',
            paddingHorizontal: 8,
            width: '80%',
            flexDirection: 'row',
            paddingVertical: 8,
            paddingLeft: 16,
            borderRadius: 10,
          }}
          onChangeText={(value) => {searchItem(value.toLowerCase())}}
          value={searchText}
        />
        {/* <Icon name='close' type='material' onPress={() => searchItem('')} /> */}
      </View>
      <ScrollView>
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
const mapStateToProps = (state) => ({
  cartData: state.cart,
});
export default connect(mapStateToProps, null)(searchscreen);
