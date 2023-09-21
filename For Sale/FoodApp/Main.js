import {View, Text} from 'react-native';
import React, {createContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Started} from './Screens/Started';
import {DetailScreen} from './Screens/DetailScreen';
import {Cart} from './Screens/Cart';
import {EditCart} from './Screens/EditCart';
import Index from './Screens/Authentication App/Index';
import {SignIn} from './Screens/Authentication App/SignIn';
import {SignUp} from './Screens/Authentication App/SignUp';
import Payment from './Screens/Payment';
import PaymentCard from './Screens/PaymentCard';
import {Home} from './Screens/Home';
import PaymentHistory from './Screens/PaymentHistory';
import CheckOut from './Screens/CheckOut';
// import Data from './Screens/.Practice/Data';
// import Receiver from './Screens/.Practice/Receiver';
// import TabBar from './Screens/.Practice/TabBar';
// import MainCounter from './Screens/.Practice/MainCounter';
// import ComponentCounter from './Screens/.Practice/ComponentCounter';

const Main = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="Receiver" component={Receiver} />
        <Stack.Screen name="Data" component={Data} />
        <Stack.Screen name="Main" component={MainCounter} />
        <Stack.Screen name="ComCounter" component={ComponentCounter} /> */}
        <Stack.Screen name="Index" component={Index} />
        {/* <Stack.Screen name="TabBar" component={TabBar} /> */}
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="PaymentHistory" component={PaymentHistory} />
        <Stack.Screen name="PaymentCard" component={PaymentCard} />
        <Stack.Screen name="CheckOut" component={CheckOut} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Burger" component={Started} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="EditCart" component={EditCart} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
