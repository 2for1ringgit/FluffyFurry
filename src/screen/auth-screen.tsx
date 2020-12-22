import React, {useState,useEffect} from 'react'
import {Text,View,Image,Button,TextInput,TouchableOpacity,Alert} from 'react-native'
import auth from '@react-native-firebase/auth'
import {useNavigation} from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'
import Header from '../component/Header'
import NavButton from '../component/NavButton'
import Input from '../component/TextInput'

const authscreen = () => {
    const navigation = useNavigation()
  
    const [code, setCode] = useState('');
    async function confirmCode() {
        try {
          await confirm.confirm(code);
          navigation.navigate('HomeScreen')
        } catch (error) {
          console.log('Invalid code.');
          Alert.alert("error")
        }
      }
    return (
        <View style={{flex:1}}>
            <LinearGradient
        style={{resizeMode: 'cover', width: '100%', height: '100%'}}
        colors={['#171716', '#333330', '#36362f']}>
            
            <Header header="Xác thực tài khoản"/>
            <View style={{paddingHorizontal:16}} >

            <Text style={{color:'gray', fontSize: 20,marginVertical: 16,alignSelf: 'center'}}>Nhập mã xác nhận</Text>
            <View style={{flexDirection:'row'}}>

            <TextInput value={code} onChangeText={text=> setCode(text)} style={{backgroundColor:'white',marginHorizontal: 8,flex: 1,borderRadius: 5,textAlign: 'center',fontSize:20,fontWeight:'bold',letterSpacing: 20}} maxLength={6} keyboardType='numeric' />
        
            </View>
            <Text style={{color:'gray',marginVertical: 16,textAlign: 'center'}}>Bạn hãy chọn "Xác thực" để tiến hành xác thực tài khoản đăng nhập vào ứng dụng của Fluffy</Text>
        {/* <NavButton title="Xác thực" screenName='app' /> */}
        <TouchableOpacity 
    style={{
      backgroundColor: 'rgb(235, 217, 21)',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 8,
      width: '100%',
      borderRadius: 5,
      
    }}
    onPress={() => confirmCode()}
    >
      <Text style={{fontWeight: 'bold', fontSize: 16}}>Xác thực</Text>
  </TouchableOpacity>
        <Text style={{color:'gray', fontSize: 18, marginTop: 16, alignSelf: 'center'}}>Gửi lại mã xác nhận</Text>
            </View>
        </LinearGradient>
        </View>
    )
}
export default authscreen