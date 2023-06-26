import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Home from './Screens/Home';
import Animation from './Screens/Animation';
import Start from './Screens/Start';
import Cart from './Screens/Cart';
import EditProfile from './Screens/EditProfile';
import {createStackNavigator} from '@react-navigation/stack';
import {AnimatedItem} from './Screens/AnimatedItem';
import Profile from './Screens/Profile';
import Favourite from './Screens/Favourite';
import Payment from './Screens/Payment';
import {StripeProvider} from '@stripe/stripe-react-native';
import CheckOut from './Screens/CheckOut';
import MyOrders from './Screens/MyOrders';

const Main = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="CheckOut" component={CheckOut} />
        <Stack.Screen name="MyOrders" component={MyOrders} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Favourite" component={Favourite} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        {/* <Stack.Screen name="Animation" component={Animation} /> */}
        <Stack.Screen name="AnimatedItem" component={AnimatedItem} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
