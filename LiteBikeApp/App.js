import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import StartScreen from './src/screens/StartScreen';
import EndScreen from './src/screens/EndScreen';
import MapScreen from './src/screens/MapScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='StartScreen' component={StartScreen} />
        <Stack.Screen name='EndScreen' component={EndScreen} />
        <Stack.Screen name='MapScreen' component={MapScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
