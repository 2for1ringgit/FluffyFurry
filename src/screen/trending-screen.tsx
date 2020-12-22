import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Header from '../component/Header';
import {Icon} from 'react-native-elements';
import firestore from '@react-native-firebase/firestore';
import {connect, useDispatch} from 'react-redux';

const trendingscreen = () => {
  const [trending, setTrending] = useState([]);
  useEffect(() => {
    const trending = firestore()
      .collection('trending')
      .onSnapshot((querySnapshot) => {
        const trending = [];

        querySnapshot.forEach((documentSnapshot) => {
          trending.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setTrending(trending);
        // setLoading(false);
      });

    // Unsubscribe from events when no longer in use
    return () => trending();
  }, []);
  return (
    <View style={{backgroundColor:'white'}}>
      <View>
          <Text style={{fontWeight:'bold',letterSpacing:.5,fontSize:24,textAlign:'center',textTransform:'uppercase',marginVertical:16}}>Các style đang thịnh hành</Text>
        <FlatList data={trending} renderItem={({item}) => (
            <View>
                <Image source={{uri: item.img}} style={{width:'100%',height:400,resizeMode:'contain'}} />
                <Text style={{fontSize:16,textTransform:'uppercase',textAlign:'center',marginVertical:8,paddingHorizontal:16,borderWidth:1,backgroundColor:'rgb(214, 214, 212)',width:'30%',alignSelf:'center',borderRadius:10,borderColor:'rgb(150, 150, 149)',paddingVertical:8,letterSpacing:1}}>{item.name}</Text>
            </View>
        )} />
        {/* <FlatList
          data={trending}
          contentContainerStyle={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
          }}
          renderItem={({item}) => (
            <View style={{marginHorizontal: 16, marginBottom: 8}}>
              <TouchableOpacity>
                <Image
                  style={{height: 200, width: 150}}
                  source={{uri: item.img}}
                />
                <Text style={{}}>{item.name}</Text>
              </TouchableOpacity>
            </View>
          )}
        /> */}
      </View>
    </View>
  );
};
export default trendingscreen;
