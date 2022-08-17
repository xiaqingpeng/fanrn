import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './page/home';
import NewScreen from './page/new';
import FindScreen from './page/find';
import CartScreen from './page/cart';
import MineScreen from './page/mine';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="HomeScreen"
          options={{
            headerShown: false,
          }}
          component={HomeScreen}
        />
        <Tab.Screen name="NewScreen" component={NewScreen} />
        <Tab.Screen name="FindScreen" component={FindScreen} />
        <Tab.Screen name="CartScreen" component={CartScreen} />
        <Tab.Screen name="MineScreen" component={MineScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
