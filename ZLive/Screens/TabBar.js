import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import Profile from './Profile';
import Feather from "react-native-vector-icons/Feather"
const TabBar = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={{headerShown: false,tabBarStyle:{height:"8%"}}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarInactiveBackgroundColor: '#101729',
          tabBarActiveBackgroundColor: '#101729',
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor:"gray",
          tabBarLabelStyle:{bottom:5},
          tabBarIcon:() => <Feather name="home" size={24} color="#13da5ad9"/>
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarInactiveBackgroundColor: '#101729',
          tabBarActiveBackgroundColor: '#101729',
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor:"gray",
          tabBarLabelStyle:{bottom:5},
          tabBarIcon:() => <Feather name="user" size={24} color="#13da5ad9"/>
        }}
      />
    </Tab.Navigator>
  );
};

export default TabBar;
