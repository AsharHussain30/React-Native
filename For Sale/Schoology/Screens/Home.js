import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import FontAwesome from "react-native-vector-icons/FontAwesome"
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'

const Home = () => {
  return (
    <View style={{backgroundColor:"darkblue",flex:1}}>
      <View
        style={{
          flexDirection: 'row',
          top: 60,
          alignItems: 'center',
          marginHorizontal: 20,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{position:"absolute"}}>
          {/* <FontAwesome
            name="align-left"
            size={24}
            color="white"
            style={{transform:[{translateY:-7}]}}
          /> */}
          <Image source={require("../assets/menu.png")} style={{height:40,width:40,resizeMode:"contain",}}/>
        </TouchableOpacity>
        <View style={{alignItems: 'center', flex: 1}}>
          <Text
            style={{
              fontSize: heightPercentageToDP('2.1%'),
              padding: 10,
              color: 'white',
              textAlign: 'center',
              textAlignVertical: 'center',
              fontFamily:"Acme-Regular"
            }}>
            Home
          </Text>
        </View>
      </View>
        <View style={{paddingTop:70,}}>
          <Image source={require("../assets/profile.png")} style={{height:80,resizeMode:"contain",}}/>
        </View>
    </View>
  )
}

export default Home