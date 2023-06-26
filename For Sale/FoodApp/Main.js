import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Started} from './Screens/Started';
import {DetailScreen} from './Screens/DetailScreen';
import {Cart} from './Screens/Cart';
import HomeScreen from './Screens/ChatGptHome';

const Main = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Burger" component={Started} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
