import React, {useState} from 'react';
import {
  CheckBox,
  ScrollView,
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Header from '../component/Header';
const bookingdetailscreen = ({route}) => {
  const {location} = route.params;
  const [isSelected, setSelection] = useState('');
  const [booktime, setBookTime] = useState('');
  const [date, setDay] = useState('');
  const navigation = useNavigation();
  
  function booking() {
    if (!isSelected || !booktime || !date) {
      Alert.alert("Có lỗi xảy ra")
    }
    else 
    navigation.navigate('HistoryScreen', {
      time: booktime,
      day: date,
      service: service.find(value=>value.name===isSelected),
      location: location,
    });
  }
  const day = ['hôm nay 11/12', 'ngày mai 12/12', 'ngày kia 13/12'];
  const time = [
    '8h00',
    '8h30',
    '9h00',
    '9h30',
    '10h00',
    '10h30',
    '11h00',
    '11h30',
    '14h00',
    '14h30',
    '15h00',
    '15h30',
    '16h00',
    '16h30',
    '17h00',
    '17h30',
    '18h00',
    '18h30',
    '19h00',
    '19h30',
    '20h00',
    '20h30',
    '21h00',
    '21h30',
  ];
  const service = [
    {
      name: 'tắm vệ sinh',
      price: 200,
    },
    {
      name: 'tắm tráng',
      price: 100,
    },
    {
      name: 'cạo lông',
      price: 100,
    },
    {
      name: 'nhuộm lông (tai và đuôi)',
      price: 300,
    },
  ];
  const setday = day.map((item, index) => (
    <TouchableOpacity
      style={{
        backgroundColor:
          date === item ? 'rgb(235, 217, 21)' : 'rgb(201, 200, 197)',
        borderRadius: 5,
        borderColor: 'rgb(201, 200, 197)',
      }}
      onPress={() => setDay(item)}
      key={index}>
      <Text
        style={{
          textTransform: 'uppercase',
          paddingHorizontal: 8,
          paddingVertical: 4,
          color: date === item ? 'black' : 'rgb(97, 96, 95)',
        }}>
        {item}
      </Text>
    </TouchableOpacity>
  ));
  const bookingtime = time.map((item, index) => (
    <TouchableOpacity
      onPress={() => setBookTime(item)}
      style={{
        backgroundColor: booktime === item ? 'rgb(235, 217, 21)' : 'white',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 5,
        marginRight: 12,
        marginBottom: 12,
        alignItems: 'center',
        borderColor: booktime === item ? 'rgb(235, 217, 21)' : 'black',
        borderWidth: 1.2,
        width: '20%',
      }}
      key={index}>
      <Text style={{color: 'black', fontWeight: 'bold', letterSpacing: 0.5}}>
        {item}
      </Text>
    </TouchableOpacity>
  ));
  const allservice = service.map((item, index) => (
    <View
      style={{
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
      }}
      key={index}>
      <Text style={{textTransform: 'uppercase'}}>{item.name}</Text>
      <Text style={{marginLeft: 'auto'}}>{item.price}.000 đ</Text>
      <CheckBox
        value={isSelected === item.name}
        onValueChange={() => {
          if (isSelected === item.name) {
            setSelection('');
          } else setSelection(item.name);
        }}
      />
    </View>
  ));
  return (
    <View style={{backgroundColor: 'gray', height: '100%'}}>
      <Header header="Đặt lịch cắt tóc" bgColor="black" />
      <View style={{paddingHorizontal:16, backgroundColor:'black'}}>
      <Text style={{color:'white',fontSize:16}}>Salon bạn đã chọn</Text>
      <Text style={{color:'white',paddingBottom:8,textTransform:'uppercase', fontWeight:'bold',fontSize:16}}>{location}</Text>
      </View>
      <ScrollView>
        <View
          style={{
            backgroundColor: 'white',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 8,
            paddingHorizontal: 16,
          }}>
          {setday}
        </View>

        <View
          style={{
            backgroundColor: 'white',
            paddingHorizontal: 16,
            marginTop: 0.6,
            paddingTop: 12,
            paddingBottom: 8,
          }}>
          <Text
            style={{
              fontSize: 18,
              textTransform: 'uppercase',
              fontWeight: 'bold',
            }}>
            1. Danh sách dịch vụ
          </Text>
          <View>
            {allservice}
            {/* <View
            style={{
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Text style={{textTransform: 'uppercase'}}>Tắm vệ sinh</Text>
            <Text style={{marginLeft: 'auto'}}> 150.000 đ</Text>
            <CheckBox value={isSelected} onValueChange={setSelection} />
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Text style={{textTransform: 'uppercase'}}>Cạo lông</Text>
            <Text style={{marginLeft: 'auto'}}> 150.000 đ</Text>
            <CheckBox value={isSelected} onValueChange={setSelection} />
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Text style={{textTransform: 'uppercase'}}>Tắm trắng</Text>
            <Text style={{marginLeft: 'auto'}}> 100.000 đ</Text>
            <CheckBox value={isSelected} onValueChange={setSelection} />
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Text style={{textTransform: 'uppercase'}}>
              Nhuộm (tai và đuôi)
            </Text>
            <Text style={{marginLeft: 'auto'}}> 300.000 đ</Text>
            <CheckBox value={isSelected} onValueChange={setSelection} />
          </View> */}
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            paddingHorizontal: 16,
            marginTop: 0.6,
            paddingVertical: 16,
          }}>
          <Text
            style={{
              fontSize: 18,
              textTransform: 'uppercase',
              fontWeight: 'bold',
              marginBottom: 16,
            }}>
            2. Chọn giờ cắt
          </Text>

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
            }}>
            {bookingtime}
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={{
          alignItems: 'center',
          paddingVertical: 8,
          backgroundColor: 'rgb(235, 217, 21)',
          borderTopWidth: 1,
          borderTopColor: 'gray',
        }}
        onPress={booking}>
        <Text style={{textTransform: 'uppercase', fontSize: 18,fontWeight:'bold'}}>
          Đặt dịch vụ
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default bookingdetailscreen;
