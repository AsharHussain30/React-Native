import {
  Alert,
  Dimensions,
  RefreshControl,
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
  ScrollView,
  StatusBar,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import firebase from '@react-native-firebase/firestore';
import ImageCropPicker from 'react-native-image-crop-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Status from './Screens/Status';
import Chats from './Screens/Chats';
import Menu from './Screens/Menu';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import UserChatDetail from './Screens/UserChatDetail';
import ImagePicker from './Screens/ImagePicker';

import AuthSplash from './Screens/AuthNavigation/AuthSplash';
import {ForgotPassword} from './Screens/AuthNavigation/ForgotPassword';
import SignIn from './Screens/AuthNavigation/SignIn';
import {SignUp} from './Screens/AuthNavigation/SignUp';
import auth from '@react-native-firebase/auth';

function Tab1() {
  const Tab = createMaterialTopTabNavigator();
  const Stack = createNativeStackNavigator();

  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Chat"
        component={Chats}
        options={{
          tabBarIndicatorStyle: {backgroundColor: 'white'},
          tabBarActiveTintColor: 'white',
          tabBarStyle: {backgroundColor: '#075e55'},
        }}
      />
      <Tab.Screen
        name="Status"
        component={Status}
        options={{
          tabBarIndicatorStyle: {backgroundColor: 'white'},
          tabBarActiveTintColor: 'white',
          tabBarStyle: {backgroundColor: '#075e55'},
        }}
      />
    </Tab.Navigator>
  );
}

const ChatStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#075e55'},
        headerTintColor: 'white',
      }}>
      <Stack.Screen
        name="User"
        initialParams={{id1: 123456, id2: 654321}}
        component={UserChatDetail}
      />
    </Stack.Navigator>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="AuthSplash" component={AuthSplash} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};
const {width, height} = Dimensions.get('window');

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

const App = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(userExcist => {
      if (userExcist) {
        setUser(userExcist);
      } else {
        setUser('');
      }
    });
    return subscriber;
  }, []);

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#075e55" />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {user ? (
          <>
            <Stack.Screen name="Chats" component={Tab1} />
            <Stack.Screen name="ImagePicker" component={ImagePicker} />
            <Stack.Screen name="ChatStack" component={ChatStack} />
            <Stack.Screen
              name="Status"
              component={Status}
              options={{
                tabBarIndicatorStyle: {backgroundColor: 'white'},
                tabBarActiveTintColor: 'white',
                tabBarStyle: {backgroundColor: '#075e55'},
              }}
            />
          </>
        ) : (
          <>
            <Stack.Screen name="AuthSplash" component={AuthSplash} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="SignUp" component={SignUp} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
