import { StyleSheet, Text, View,Image, Dimensions } from 'react-native'
import React,{useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'


const AuthSplash = () => {
  useEffect(() => {
      setTimeout(() => {
       navigation.replace("SignIn")
      },4000)
    },[])
    const navigation = useNavigation()
  const {height,width} = Dimensions.get("window");
    return (
      <View style={{justifyContent:"center",alignItems:"center",flex:1}}>
      <Text style={{fontSize:34,color:"black"}}>WhatsApp</Text>
      </View>
     )
}

export default AuthSplash

const styles = StyleSheet.create({})