import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './home';
import DetailsScreen from './details';

const IndexStack = createNativeStackNavigator();
function IndexStackScreen() {
  return (
    <IndexStack.Navigator>
      <IndexStack.Screen
        name="Home"
        options={{headerShown: false}}
        component={HomeScreen}
      />
      <IndexStack.Screen name="Details" component={DetailsScreen} />
    </IndexStack.Navigator>
  );
}

export default IndexStackScreen;
