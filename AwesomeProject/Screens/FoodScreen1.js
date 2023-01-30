import React, { Component } from 'react';
import {Linking, View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Title, Caption, Avatar } from 'react-native-paper';
import aboutcountries from '../assets/aboutcountries.svg'

export const FoodScreen1 = ({navigation}) => {
  return (
    <View style={{ flex: 1, }}>
      <View>
      <ImageBackground  source={require('../assets/aboutbg.jpg')} style={{height:100}}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={{backgroundColor:"white",height:30,width:30,borderRadius:10,borderColor:'black',shadowRadius:20,shadowOffset:{height:1,width:2},margin:5}} >
      <MaterialCommunityIcons name='backburger' size={30} color='#d46066' style={{flexDirection:'column',justifyContent:"flex-end"}}/>
      </TouchableOpacity>
      <Text style={{ textTransform: "uppercase", fontSize: 25, textAlign: "center", textShadowColor: "pink", textShadowRadius: 25, textAlignVertical: "center", justifyContent: "center", color: "white", }}>about us</Text>
      </ImageBackground>
      </View>
      {/* <View style={{ alignContent: "center", flex: 0.25 }}>
        <ImageBackground source={require('../assets/aboutbg.jpg')} style={{ height: 140, width: "100%", position: "absolute", }}>
          
        </ImageBackground>
      </View> */}
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, marginTop: 0, paddingHorizontal: 0 }}>
        <View style={{ backgroundColor: "#d70f64", padding: 20 }}>
          <Title style={{ color: "white", fontSize: 17, letterSpacing: 1, margin: 5 }}>
            OUR MISSION
          </Title>
          <Text style={{ color: "white", lineHeight: 22, textAlign: "left" }}>

            "Bringing good food into your everyday. That's our mission.

            That means we don't just deliver--we bring it, always going the extra mile to make your experience memorable.

            And it means this is delicious food you can enjoy everyday: from vibrant salads for healthy office lunches, to indulgent family-sized pizzas, to fresh sushi for a romantic night in. Whatever you crave, we can help."
          </Text>
        </View>
        <View>
          <Title style={{ color: "#d70f64", paddingLeft: 20 }}>WHERE WE ARE</Title>
          <Image source={require('../assets/aboutmap.png')} style={{ height: 270, width: "100%" }} />
        </View>
        <View style={{ justifyContent: "space-around", marginHorizontal: 20, marginVertical: 20, flexDirection: "row" }}>
          <TouchableOpacity>
            <Image source={require("../assets/aboutcountries.png")} style={{ height: 50, width: 50, alignSelf: 'center' }} />
            <Text style={{ color: "#d70f64", textAlign: "center" }}>
              11
            </Text>
            <Text style={{ fontSize: 10, textAlign: "center" }}>
              COUNTRIES
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require("../assets/aboutrestaurants.png")} style={{ height: 50, width: 50, alignSelf: 'center' }} />
            <Text style={{ color: "#d70f64", textAlign: "center" }}>
              115,000+
            </Text>
            <Text style={{ fontSize: 10, textAlign: "center" }}>
              RESTAURANTS
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require("../assets/aboutbikes.png")} style={{ height: 50, width: 50, alignSelf: 'center' }} />
            <Text style={{ color: "#d70f64", textAlign: "center" }}>
              80,000+
            </Text>
            <Text style={{ fontSize: 10, textAlign: "center" }}>
              BIKES
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require("../assets/aboutcities.png")} style={{ height: 50, width: 50, alignSelf: 'center' }} />
            <Text style={{ color: "#d70f64", textAlign: "center" }}>
              400
            </Text>
            <Text style={{ fontSize: 10, textAlign: "center" }}>
              CITIES
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ backgroundColor: "white", paddingLeft: 15,paddingHorizontal:20,paddingVertical:20}}>
            <View>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.foodpanda.com/')}><Image source={require("../assets/aboutlogo.png")} style={{ height: 30, width: "40%", }} /></TouchableOpacity>
            <Text style={{ opacity: 0.7, marginTop: 10 }}>© 2022</Text>
            </View>
            <View style={{ justifyContent: "flex-end", flexDirection: "row",  paddingBottom:20,marginTop:-50}}>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/lifeatfoodpanda')} style={{paddingRight:5}}><Image source={require('../assets/fb.png')} style={{height:30,width:30}}/></TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/company/foodpanda')}><Image source={require('../assets/linkedin.png')}style={{height:30,width:30}}/></TouchableOpacity>
            </View>
          
          <View style={{ justifyContent: "flex-end", flexDirection: "row" }}>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.foodpanda.com/contact')}><Text style={{ opacity: 0.8, marginLeft: 10, }}>Imprint</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.foodpanda.com/security')}><Text style={{ opacity: 0.8, marginLeft: 10, }}>Security</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.foodpanda.com/privacy-policy')}><Text style={{ opacity: 0.8, marginLeft: 10, }}>Privacy</Text></TouchableOpacity>
          </View>
          </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  about: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    position: 'absolute',
    marginVertical: 630,
    alignContent: 'center',
    paddingHorizontal: 10

  },
  about1: {
    flexDirection: "column",
  },
  about3: {
    paddingVertical: 15,
    fontSize: 20
  },
  about2: {
    paddingVertical: "20%",
    paddingHorizontal: 10,
    margin: 20,
    flexDirection: "column"
  },
  btn1: {
    marginTop: 190,
    marginLeft: 100,
    alignItems: 'center'
  },
  img: {
    height: 80,
  },
  container: {
    alignContent: 'center',
    margin: 15,
    flex: 1,
    backgroundColor: 'white',
  },
});
