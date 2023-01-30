import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import React from 'react';
import { ImageBackground, Text, View,Image, TouchableOpacity, BackHandler } from 'react-native';
import Icon from 'react-native-fontawesome';
import FoodScreen1 from './FoodScreen1'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import AppLoading from 'expo-app-loading';

import {
  useFonts,
  JosefinSans_100Thin,
  JosefinSans_200ExtraLight,
  JosefinSans_300Light,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
  JosefinSans_600SemiBold,
  JosefinSans_700Bold,
  JosefinSans_100Thin_Italic,
  JosefinSans_200ExtraLight_Italic,
  JosefinSans_300Light_Italic,
  JosefinSans_400Regular_Italic,
  JosefinSans_500Medium_Italic,
  JosefinSans_600SemiBold_Italic,
  JosefinSans_700Bold_Italic,
} from '@expo-google-fonts/josefin-sans';
    
    const image = {uri:"https://img.myloview.com/stickers/abstract-smooth-pink-white-wavy-background-design-template-vector-magenta-background-with-copy-space-for-text-400-216609449.jpg"}
   
   const DrawerContainer = () =>{
     navigation = useNavigation();
     let [fontsLoaded] = useFonts({
      JosefinSans_100Thin,
      JosefinSans_200ExtraLight,
      JosefinSans_300Light,
      JosefinSans_400Regular,
      JosefinSans_500Medium,
      JosefinSans_600SemiBold,
      JosefinSans_700Bold,
      JosefinSans_100Thin_Italic,
      JosefinSans_200ExtraLight_Italic,
      JosefinSans_300Light_Italic,
      JosefinSans_400Regular_Italic,
      JosefinSans_500Medium_Italic,
      JosefinSans_600SemiBold_Italic,
      JosefinSans_700Bold_Italic,
    });
  
    let fontSize = 24;
    let paddingVertical = 6;
  
    if (!fontsLoaded) {
      return <AppLoading />;
    } else {
     return (
      <View style={{backgroundColor:"#d60664",flex:1,paddingVertical:90,paddingHorizontal:20,borderBottomRightRadius:35,borderTopRightRadius:35}}>
     <View style={{flexDirection:"row",}} >
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <Text style={{fontFamily: 'JosefinSans_700Bold_Italic',color:"white",fontSize:15,textShadowColor:"white",textShadowOffset:{height:2,width:1},textShadowRadius:25,fontWeight:"400",textTransform:"uppercase",}}> 
      <MaterialCommunityIcons name='home' size={30} style={{color:"white",letterSpacing:20,textShadowColor:"white",textShadowRadius:25,}} />
             HOME
      </Text>
      </TouchableOpacity>
      </View>
      <View style={{marginTop:30,justifyContent:"center",}}>
      <TouchableOpacity onPress={() => navigation.navigate('About')}>
      <Text style={{textAlignVertical:"center",fontFamily: 'JosefinSans_700Bold_Italic',color:"white",fontSize:15,textShadowColor:"white",textShadowRadius:25,fontWeight:"400",textTransform:"uppercase",}}> 
      <MaterialCommunityIcons name='chevron-double-right' size={30} style={{letterSpacing:20,}} />
          customer services
      </Text>
      </TouchableOpacity>
      </View>
      <View style={{marginTop:30,justifyContent:"center",}}>
      <TouchableOpacity onPress={() => navigation.navigate('About')}>
      <Text style={{textAlignVertical:"center",fontFamily: 'JosefinSans_700Bold_Italic',color:"white",fontSize:15,textShadowColor:"white",textShadowRadius:25,fontWeight:"400",textTransform:"uppercase"}}> 
      <MaterialCommunityIcons name='chevron-double-right' size={30} style={{letterSpacing:20,}} />
          rewards
      </Text>
      </TouchableOpacity>
      </View>
      <View style={{marginTop:30,justifyContent:"center",}}>
      <TouchableOpacity onPress={() => navigation.navigate('About')}>
      <Text style={{textAlignVertical:"center",fontFamily: 'JosefinSans_700Bold_Italic',color:"white",fontSize:15,textShadowColor:"white",textShadowRadius:25,fontWeight:"400",textTransform:"uppercase"}}> 
      <MaterialCommunityIcons name='chevron-double-right' size={30} style={{letterSpacing:20,}} />
          About
      </Text>
      </TouchableOpacity>
      </View>
      <View style={{flex:1,flexDirection:"column-reverse",}}>
      <TouchableOpacity onPress={() => BackHandler.exitApp()} style={{color:"#d60664",backgroundColor:"white",borderRadius:20,marginHorizontal:40}}>
      <View style={{justifyContent:"space-around",flexDirection:"row",}}>
      <Text style={{textAlignVertical:"center",fontFamily: 'JosefinSans_700Bold_Italic',color:"#d60664",textAlign:"center",fontSize:15,textShadowColor:"#96037b",textShadowRadius:25,fontWeight:"400",textTransform:"uppercase",marginHorizontal:40,padding:5}}> 
          EXIT
      </Text>
          <View style={{alignSelf:"center",paddingRight:25}}><MaterialCommunityIcons name='exit-run' size={20} color="#d60664" style={{marginLeft:20}}/></View>
      </View>
      </TouchableOpacity>
      </View>
      </View>
  )
};
  }

export default DrawerContainer;


{/* <View style={{backgroundColor:"#d60664",justifyContent:"center",flex:1,paddingTop:40}}>
        <View style={{paddingVertical:40}}>
        <View style={{alignItems:"center"}}>
          <Image source={image} style={{height:70,width:70,borderRadius:50,}}/>
        </View>
        {/* <View style={{paddingHorizontal:20,paddingVertical:40,}} > */}
        // <MaterialCommunityIcons name="home" size={40} style={{color:"white",fontSize:35,borderRadius:50,borderColor:"white",textShadowColor:"white",textShadowRadius:25,fontWeight:"400",}}/><DrawerItem label='Home' style={{textAlign:"center"}}/>
        // <DrawerItem label="About" labelStyle={{color:"white",fontSize:15,borderRadius:50,borderColor:"white",textShadowColor:"white",textShadowRadius:25,fontWeight:"400"}} />
        {/* </View> */}
        // </View>
        // <View style={{flex:2,flexDirection:"column-reverse"}}>
        // <DrawerItem label='LOGOUT' labelStyle={{color:"white",fontSize:15,borderRadius:50,borderColor:"white",textShadowColor:"white",textShadowRadius:25,fontWeight:"400"}}/>
        // </View>
        
      // </View> */}