import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabbarView from './page/navigation/tabbar';
import SplashView from './page/splash/splash';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashView">
        <Stack.Screen
          name="SplashView"
          component={SplashView}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="TabbarView"
          component={TabbarView}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
