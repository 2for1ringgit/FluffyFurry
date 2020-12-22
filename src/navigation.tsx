import React from 'react';
import HomeScreen from './screen/home-screen';
import LoginScreen from './screen/login-screen';
import SplashScreen from './screen/splash-screen';
import AuthScreen from './screen/auth-screen';
import StoreScreen from './screen/store-screen';
import AccountScreen from './screen/account-screen';
import BookingScreen from './screen/booking-screen';
import ProductScreen from './screen/product-screen';
import TrendingScreen from './screen/trending-screen'
import SearchScreen from './screen/search-screen';
import HistoryScreen from './screen/history-screen';
import BookingDetailScreen from './screen/booking-detail-screen';
import CartScreen from './screen/cart-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export function HomeBottomTab() {
  return (
    <Tab.Navigator
      initialRouteName={'Trang chủ'}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconName;
          if (route.name === 'Trang chủ') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Khám phá') {
            iconName = focused ? 'star' : 'star-outline';
          } else if (route.name === 'Cửa hàng') {
            iconName = focused ? 'cart' : 'cart-outline';
          } else {
            iconName = focused ? 'person' : 'person-outline';
          }
          return (
            <Icon
              name={iconName}
              type="ionicon"
              color={(iconName = focused ? 'rgb(235, 217, 21)' : 'gray')}
            />
          );
        },
      })}
      barStyle={{backgroundColor: 'black'}}
      tabBarOptions={{
        activeTintColor: 'rgb(235, 217, 21)',
        inactiveTintColor: 'gray',
        style: {backgroundColor: 'black'},
      }}
      activeColor={'black'}>
      <Tab.Screen name={'Trang chủ'} component={HomeScreen} />
      <Tab.Screen name={'Khám phá'} component={TrendingScreen} />
      <Tab.Screen name={'Cửa hàng'} component={StoreScreen} />
      <Tab.Screen name={'Tài khoản'} component={AccountScreen} />
    </Tab.Navigator>
  );
}

function AuthNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={'SplashScreen'}
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}>
      <Stack.Screen name={'SplashScreen'} component={SplashScreen} />
      <Stack.Screen name={'LoginScreen'} component={LoginScreen} />
      <Stack.Screen name={'AuthScreen'} component={AuthScreen} />
    </Stack.Navigator>
  );
}

function AppNavigator() {
  return (
    <Stack.Navigator
      // initialRouteName={'StoreScreen'}
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}>
      <Stack.Screen name={'BottomTab'} component={HomeBottomTab} />
      <Stack.Screen name={'HomeScreen'} component={HomeScreen} />
      <Stack.Screen name={'StoreScreen'} component={StoreScreen} />
      <Stack.Screen name={'BookingScreen'} component={BookingScreen} />
      <Stack.Screen
        name={'BookingDetailScreen'}
        component={BookingDetailScreen}
      />
      <Stack.Screen name={'AccountScreen'} component={AccountScreen} />
      <Stack.Screen name={'ProductScreen'} component={ProductScreen} />
      <Stack.Screen name={'CartScreen'} component={CartScreen} />
      <Stack.Screen name={'SearchScreen'} component={SearchScreen} />
      <Stack.Screen name={'HistoryScreen'} component={HistoryScreen} />
    </Stack.Navigator>
  );
}

export function MainApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'auth'}
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
        }}>
        <Stack.Screen name={'auth'} component={AuthNavigator} />
        <Stack.Screen name={'app'} component={AppNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
