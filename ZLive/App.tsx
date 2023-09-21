import {
  View,
  Text,
  Dimensions,
  TouchableHighlightComponent,
} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SignIn} from './Screens/Authentication App/SignIn';
import {SignUp} from './Screens/Authentication App/SignUp';
import Player from './Screens/Player';
import TabBar from './Screens/TabBar';
import Home from './Screens/Home';

const App = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Player" component={Player} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
