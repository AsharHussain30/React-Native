import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, ImageBackground, FlatList, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { SplashScreen } from './Screens/SplashScreen';
import { FoodScreen1 } from './Screens/FoodScreen1';
// import SearchBar from "react-native-";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { navigationRef } from './Component/RootNavigation';
// import { Stack } from 'react-native-paper';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { DrawerContent } from './Screens/DrawerContent';
// import { createDrawerNavigator } from '@react-navigation/drawer';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Searchbar } from 'react-native-paper';
// import FoodScreen1 from './Screens/FoodScreen1';
import DrawerContainer from './Screens/DrawerContainer';
import LoginScreen from './Screens/LoginScreen';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Mytheme = {
  colors: {backgroundColor:"transparent"
}}

function App({navigation}) {
  return (
      <NavigationContainer theme={Mytheme} options={{headerStyle:{backgroundColor:"transparent"}}}>
      <Drawer.Navigator screenOptions={{
        headerTitle:"",
        headerShown:false,
        headerTintColor:"transparent",  
        headerStyle:{
          backgroundColor:'transparent',
               }
        }} drawerContent={props => <DrawerContainer {...props}/>}>
         <Drawer.Screen name="Home" component={SplashScreen}/> 
         <Drawer.Screen name="Login" component={LoginScreen} /> 
         <Drawer.Screen name="About" component={FoodScreen1} /> 
        
      </Drawer.Navigator>
      </NavigationContainer>
    
  );
}

export default App;

// function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>

//         <Tab.Screen name="Home" component={SplashScreen}
//           options={{
//             tabBarActiveBackgroundColor: 'white',
//             tabBarIcon: props => {
//               if (props.focused) {
//                 return <MaterialCommunityIcons name='home' size={40} color="#d60664" />
//               }
//               return <MaterialCommunityIcons name='home' size={40} color="gray" />
//             },
//             title: "HOME",
//             headerStyle:
//               { backgroundColor: 'black' },
//             tabBarActiveTintColor: '#d60664',
//             tabBarInactiveTintColor: 'grey',
//             headerTitle: '',
//             headerTintColor: 'white',
//             headerTitleAlign: 'center',
//             headerShown: false,
//             headerRight: (props) =>
//               <TouchableOpacity onPress={() => navigationRef.navigate("Details")}>
//                 {/* <SearchBar placeholder='search' placeholderTextColor='orange' />
//         */}
//                 <Searchbar placeholder='search' placeholderTextColor='pink' iconColor='pink' style={{ alignSelf: 'center', justifyContent: 'center', marginRight: 80, width: 200, paddingLeft: 42, }} />
//                 {/* <MaterialCommunityIcons name='microsoft-xbox-controller-menu' 
//             color='white' size={40} 
//           /> */}
//               </TouchableOpacity>,
//             headerLeft: (props) =>
//               <TouchableOpacity onPress={() => navigationRef.navigate("Home")}>
//                 <MaterialCommunityIcons name='home'
//                   color='white' size={40}
//                 />
//               </TouchableOpacity>,

//           }} />
//         <Tab.Screen name="Food" component={FoodScreen1}
//           options={{
//             tabBarIcon: props => {
//               if (props.focused) {
//                 return <MaterialCommunityIcons name='account' size={40} color="#d60664" />;
//               }
//               return <MaterialCommunityIcons name='account' size={40} color="gray" />;
//             },
//             headerStyle:
//               { backgroundColor: 'black' },
//             title: "USER",
//             tabBarActiveTintColor: '#d60664',
//             tabBarInactiveTintColor: "grey",
//             headerTintColor: 'white',
//             headerShown: false
//           }} />
//         <Tab.Screen name="Front" component={FrontScreen}
//           options={{
//             tabBarShowLabel: false,
//             tabBarIconShown: false,
//             tabBarIcon: props => {
//               if (props.focused) {
//                 return <MaterialCommunityIcons name='account' size={40} color="#d60664" />;
//               }
//               return <MaterialCommunityIcons name='account' size={40} color="gray" />;
//             },
//             headerStyle:
//               { backgroundColor: 'black' },
//             title: "USER1",
//             tabBarActiveTintColor: '#d60664',
//             tabBarInactiveTintColor: "grey",
//             headerTintColor: 'white',
//             headerShown: false
//           }} />
//       </Tab.Navigator>
//    </NavigationContainer>
  

