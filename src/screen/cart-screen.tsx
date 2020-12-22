import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  CheckBox,
  ScrollView,
  FlatList,
  Alert
} from 'react-native';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ItemCounter from '../component/ItemCounter';
import {connect,useDispatch} from 'react-redux';
import CircleCheckBox, {LABEL_POSITION} from 'react-native-circle-checkbox'; 
import Header from '../component/Header';
const cartscreen = ({cartData}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch()
  const remove = (product) => {
    dispatch({
      type: "DECREMENT",
      payload: product,
    });
  };
  const deleteItem = (product) => {
    dispatch({
      type:'DELETE',
      payload:product
    })
  }
  console.log(cartData);
  function success () {
    Alert.alert("Đặt hàng thành công")

  }
  const totalPrice = (data) => {
    let total = 0;
    let shippingfee= 15;
    data.map ((value) => (total += value.productDetail.price * value.count))
    if(total > 500) {
      let shippingfee = 0; 
    }
    else
    total += shippingfee
    return total
  }
  const [isSelected, setSelection] = useState(false);
  const [value, onChangeText] = React.useState('');
  return (
    <View style={{height:"100%", backgroundColor:'white'}}>
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
          borderBottomColor:'gray',
          borderBottomWidth:1
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
            color: 'rgb(250, 85, 15)',
            fontSize: 18,
            fontWeight: 'bold',
            letterSpacing: 0.5,
            margin: 'auto',
          }}>
          Giỏ hàng
        </Text>
        <Text></Text>
      </View>
      <ScrollView style={{paddingHorizontal: 16}}>
        <Text style={{marginVertical:8}}>Khách hàng: Tuấn Nguyễn</Text>
        <Text>
          029.848.123 - Chúng tôi sẽ liên hệ số điện thoại này để xác nhận đơn
          hàng
        </Text>
        <Text style={{paddingVertical:16}}>Thanh toán khi nhận hàng</Text>
        <View>
          <FlatList
            data={cartData}
            keyExtractor={(item) => item.index}
            contentContainerStyle={{}}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    padding: 8,
                    borderRadius: 10,
                    borderColor: 'black',
                    borderWidth: 1,
                    justifyContent:'space-between',
                    marginVertical:8
                  }}>
                  <Image
                    source={{uri: item.productDetail.image}}
                    style={{height: '100%', width: '100%',flex:1,resizeMode:'contain'}}
                  />
                  <View style={{flex:2,marginLeft:16}}>
                    <Text
                      style={{
                        color: 'black',
                        textTransform: 'uppercase',
                        letterSpacing: 0.5,
                      }}>
                      {item.productDetail.name}
                    </Text>
                    <Text>
                      Số lượng: {item.count}
                    </Text>
                    <Text
                      style={{
                        color: 'rgb(250, 85, 15)',
                        fontWeight: 'bold',
                        paddingTop: 30,
                      }}>
                      đ{item.productDetail.price}.000 
                    </Text>
                  </View>
                  <TouchableOpacity style={{backgroundColor:'rgb(247, 96, 96)', padding:4,borderRadius:50,}} onPress={() => deleteItem(item.productDetail)}>
                    <Icon name='close' type='evilicon' color="white"/>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
      <View style={{paddingHorizontal:16}}>

        <View
          style={{
            backgroundColor: 'white',
            borderTopWidth: 1,
            
          }}>
          <Text style={{textTransform:'uppercase', fontSize:20,fontWeight:'bold',paddingVertical:16}}>Hình thức thanh toán</Text>
          <CircleCheckBox
  checked={true}
  onToggle={(checked) => console.log('My state is: ', checked)}
  labelPosition={LABEL_POSITION.RIGHT}
  label="Thanh toán trực tiếp"
/>
          {/* <CircleCheckBox
  checked={false}
  onToggle={(checked) => console.log('My state is: ', checked)}
  labelPosition={LABEL_POSITION.RIGHT}
  label="Thanh toán qua TOPUP"
/> */}
        </View>
        <TextInput style={{backgroundColor:'rgb(222, 217, 217)',paddingHorizontal:16,borderRadius:5,marginTop:16}} onChangeText={(text) => onChangeText(text)} value={value} placeholder="Nhập địa chỉ giao hàng" />
      {/* <View style={{flexDirection: 'row',alignItems:'center'}}>
        <CheckBox value={isSelected} onValueChange={setSelection} />
        <Text>Ship nhanh phí ship không đổi</Text>
      </View> */}
      <View style={{flexDirection: 'row',alignItems:'center',marginBottom:8}}>
        <CheckBox value={isSelected} onValueChange={setSelection} />
        <Text>Đồng ý với điều kiện giao dịch chung</Text>
      </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent:'space-between',
        
        }}>
        <View style={{flex:1,paddingBottom:8}}>
          <Text style={{textAlign:'center'}}>Tổng tiền</Text>
          <Text style={{textAlign:'center',color:'rgb(250, 85, 15)',fontWeight:'bold',fontSize:18}}>đ{totalPrice(cartData,'15')}.000</Text>
        </View>
        <View style={{flex:1,backgroundColor:'rgb(250, 85, 15)', alignItems:'center',justifyContent:'center'}} >
          <Text style={{color:'white',fontWeight:'bold',fontSize: 20}}>Đặt hàng</Text>
        </View>
      </View>
    </View>
    
  );
};
const mapStateToProps = (state) => ({
  
  cartData: state.cart,
});

export default connect(mapStateToProps)(cartscreen);
