import { LogBox, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Onboarding} from './Screens/Onboarding'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Verification from './Screens/Verification'
import Home from './Screens/Home'


const App = () => {
  
  LogBox.ignoreAllLogs();
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Onboarding' component={Onboarding}/>
        <Stack.Screen name='Verification' component={Verification}/>
        <Stack.Screen name='Home' component={Home}/>
        
      </Stack.Navigator>
    </NavigationContainer>
    )
}

export default App