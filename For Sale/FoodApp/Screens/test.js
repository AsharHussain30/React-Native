import { Image, StyleSheet, Text, View } from 'react-native'
import React,{useEffect,useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'


export const Test = () => {
  const [confdata,setConfdata] = useState()
  
  const getData = async () => {
      const value = await AsyncStorage.getItem('key')
      setConfdata(JSON.parse(value))  
    }

      
  useEffect(() => {
      getData()
  },[])

  return (
    <View style={{justifyContent:"center",alignItems:"center"}}>
      {/* <Image source={{uri: confdata[0].image }} style={{height:600,width:2000,resizeMode:"contain"}}/>   */}
      {/* <Text>
        {confdata[0].title}
      </Text> */}
    </View>
  )
}

const styles = StyleSheet.create({})