import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './page/home';
import NewScreen from './page/new';
import FindScreen from './page/find';
import CartScreen from './page/cart';
import MineScreen from './page/mine';

//引用iconfont
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="首页"
          component={HomeScreen}
          options={{
            tabBarLabel: '首页',
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <AntDesign name={'home'} size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="新品"
          component={NewScreen}
          options={{
            tabBarLabel: '新品',
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <Fontisto name={'shopify'} size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="发现"
          component={FindScreen}
          options={{
            tabBarLabel: '发现',
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <AntDesign name={'find'} size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="CartScreen"
          component={CartScreen}
          options={{
            tabBarLabel: '购物车',
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <AntDesign name={'shoppingcart'} size={size + 2} color={color} />
            ),
            tabBarBadge: 4,
          }}
        />
        <Tab.Screen
          name="我的"
          component={MineScreen}
          options={{
            tabBarLabel: '我的',
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <EvilIcons name={'user'} size={size + 8} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
