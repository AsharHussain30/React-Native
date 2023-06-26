import { StyleSheet, Text, View,Image, Dimensions } from 'react-native'
import React,{useEffect} from 'react'
import { StackActions, useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'
import { heightPercentageToDP as hp,widthPercentageToDP as wp} from 'react-native-responsive-screen'


export const AuthSplash = () => {

    const navigation = useNavigation()
    useEffect(() => {
        setTimeout(() => {
         navigation.dispatch(StackActions.replace("SignIn"))
        },4000)
    } )
  const {height,width} = Dimensions.get("window");
    return (
      <LinearGradient colors={["purple","pink"]} style={{flex:1,elevation:25,}}>
      <Image source={require("../../../assets/themePics/logo1.png")} style={{resizeMode:"cover",width:wp("50"),alignSelf:"center",height:hp("30"),borderColor:"purple",shadowColor:"red",position:"absolute",borderRadius:100,top:50,}}/>
      <View style={{justifyContent:"flex-end",alignItems:"flex-end",flex:1}}>
      <Image source={require("../../../assets/themePics/paupau.gif")} style={{resizeMode:"contain",width:width,height:hp("50%"),opacity:0.8,}}/>
      </View>
      </LinearGradient>
    )
}

const styles = StyleSheet.create({})