import React, { Component } from 'react';
import { View, Text, ImageBackground, StatusBar, StyleSheet, Image, ScrollView, ScrollBar, Button } from 'react-native';
import { Searchbar, Caption, Title } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import { ScrollView } from 'react-native-gesture-handler';
import DrawerContainer from './DrawerContainer';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import { RootNavigation } from '../Component/RootNavigation';
import AppLoading from 'expo-app-loading';
import { CartScreen } from './CartScreen';
import {ItemsScreen} from './ItemsScreen';
// import Provider from 'react-redux';
// import store from '../store';
import Burger from './Burger';

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

const Stack = createStackNavigator();

export const MainScreen = ({navigation}) => {
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
    return <AppLoading
  />;
  } else {
    return (
      <ScrollView>
      <View style={{ paddingVertical: "5%", paddingHorizontal: "5%", backgroundColor: "#d60664" ,borderBottomLeftRadius:50,borderBottomRightRadius:50}}>
          <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
            <StatusBar hidden={true} />
            <TouchableOpacity onPress={navigation.toggleDrawer} style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons name='menu' size={34} color="white" style={{ textAlign: "justify", textShadowColor: "white", textShadowRadius: 15, textShadowOffset: { height: 1, width: 0, }, marginHorizontal: 15, marginVertical: 10 }} />
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => navigation.navigate('Cart')}>
              <MaterialCommunityIcons name='cart' size={34} color="white" style={{ textAlign: "justify", textShadowColor: "white", textShadowRadius: 15, textShadowOffset: { height: 1, width: 0, }, marginHorizontal: 15, marginVertical: 10, }} />
            </TouchableOpacity>
          </View>
          <Text style={{ fontSize: 34, color: "white", shadowOpacity: 0.5, opacity: 0.77, fontWeight: "bold", fontStyle: 'italic', height: 39, textShadowColor: 'white', textShadowRadius: 40, textShadowOffset: { height: 1, width: 0 } }}>Find</Text>
          <Text style={{ fontSize: 34, color: "white", shadowOpacity: 0.5, opacity: 0.77, fontStyle: "italic", fontWeight: "bold", height: 39, textShadowColor: 'white', textShadowRadius: 40, textShadowOffset: { height: 1, width: 0 } }}>  Your Best</Text>
          <Text style={{ fontSize: 34, color: "white", shadowOpacity: 0.5, opacity: 0.77, fontWeight: "bold", height: 39, textShadowColor: 'white', textShadowRadius: 40, textShadowOffset: { height: 1, width: 0 } }}>Food !</Text>
          <View style={{ shadowColor: "white", shadowRadius: 20, shadowOffset: { height: 2, width: 1, elevation: 5 } }}>
            <Image source={require('../assets/panda1.png')} style={{ height: 150, width: 100, display: "flex", marginHorizontal: 180, marginVertical: -52, }} />
          </View>
        </View>
        <View>
          <Searchbar placeholder='Find Your Food Here...' color="white" style={{ borderWidth:1.5,marginHorizontal: 20, borderRadius: 20, shadowRadius: 40, borderColor:"#d60664",shadowColor: "#d60664", shadowOffset: { height: 1, width: 1 }, elevation: 15, marginVertical: 30 }} />
        </View>
        <View>
          <Title style={{ fontFamily: "JosefinSans_600SemiBold", textTransform: 'capitalize', fontSize: 23, marginHorizontal: 20 }}>
            Catogories
          </Title>
          <Title style={{ fontFamily: 'JosefinSans_500Medium_Italic', fontSize: 15, marginHorizontal: 20 }}>BURGERS</Title>
          <ScrollView scrollEnabled horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.card1} >
              <TouchableOpacity id={1} onPress={() => navigation.navigate('burger')}>
                <Image source={require('../assets/burger.png')} style={{ height: 70, width: 100, }} />
                <Caption style={{ color:"pink",fontSize: 15, fontFamily: "JosefinSans_600SemiBold_Italic", textAlign: "center" }}>Burger</Caption>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                  <Text style={styles.forward1}><MaterialCommunityIcons name='cart' size={27} color="white" /></Text>
                  <Text style={{ textAlign: "right" }}><MaterialCommunityIcons name='arrow-right-bold-hexagon-outline' size={27} color='white' /></Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.card1}>
              <TouchableOpacity id={2}>
                <Image source={require('../assets/burger2.png')} style={{ height: 70, width: 100, }} />
                <Caption style={{ color:"pink", fontSize: 15, fontFamily: "JosefinSans_600SemiBold_Italic", textAlign: "center"  }}>Burger</Caption>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                  <Text style={styles.forward1}><MaterialCommunityIcons name='cart' size={27} color="white" /></Text>
                  <Text style={{ textAlign: "right" }}><MaterialCommunityIcons name='arrow-right-bold-hexagon-outline' size={27} color='white' /></Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.card1}>
              <TouchableOpacity id={3}>
                <Image source={require('../assets/burger3.png')} style={{ height: 70, width: 100, }} />
                <Caption style={{ color:"pink", fontSize: 15, fontFamily: "JosefinSans_600SemiBold_Italic", textAlign: "center"  }}>Burger</Caption>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                  <Text style={styles.forward1}><MaterialCommunityIcons name='cart' size={27} color="white" /></Text>
                  <Text style={{ textAlign: "right" }}><MaterialCommunityIcons name='arrow-right-bold-hexagon-outline' size={27} color='white' /></Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.card1}>
              <TouchableOpacity id={4}>
                <Image source={require('../assets/burger3.png')} style={{ height: 70, width: 100, }} />
                <Caption style={{ color:"pink", fontSize: 15, fontFamily: "JosefinSans_600SemiBold_Italic", textAlign: "center"  }}>Burger</Caption>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                  <Text style={styles.forward1}><MaterialCommunityIcons name='cart' size={27} color="white" /></Text>
                  <Text style={{ textAlign: "right" }}><MaterialCommunityIcons name='arrow-right-bold-hexagon-outline' size={27} color='white' /></Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>

          <Title style={{ fontFamily: 'JosefinSans_500Medium_Italic', fontSize: 15, marginHorizontal: 15 }}>PIZZA</Title>
          <ScrollView scrollEnabled horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.card1}>
              <TouchableOpacity id={5}>
                <Image source={require('../assets/pizza.png')} style={{ height: 70, width: 100, }} />
                <Caption style={{ color:"pink", fontSize: 15, fontFamily: "JosefinSans_600SemiBold_Italic", textAlign: "center"  }}>Pizza</Caption>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                  <Text style={styles.forward1}><MaterialCommunityIcons name='cart' size={27} color="white" /></Text>
                  <Text style={{ textAlign: "right" }}><MaterialCommunityIcons name='arrow-right-bold-hexagon-outline' size={27} color='white' /></Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.card1}>
              <TouchableOpacity id={6}>
                <Image source={require('../assets/pizza2.png')} style={{ height: 70, width: 100, }} />
                <Caption style={{ color:"pink", fontSize: 15, fontFamily: "JosefinSans_600SemiBold_Italic", textAlign: "center"  }}>Pizza</Caption>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                  <Text style={styles.forward1}><MaterialCommunityIcons name='cart' size={27} color="white" /></Text>
                  <Text style={{ textAlign: "right" }}><MaterialCommunityIcons name='arrow-right-bold-hexagon-outline' size={27} color='white' /></Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.card1}>
              <TouchableOpacity id={7}>
                <Image source={require('../assets/pizza3.png')} style={{ height: 70, width: 100, }} />
                <Caption style={{ color:"pink", fontSize: 15, fontFamily: "JosefinSans_600SemiBold_Italic", textAlign: "center"  }}>Pizza</Caption>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                  <Text style={styles.forward1}><MaterialCommunityIcons name='cart' size={27} color="white" /></Text>
                  <Text style={{ textAlign: "right" }}><MaterialCommunityIcons name='arrow-right-bold-hexagon-outline' size={27} color='white' /></Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.card1}>
              <TouchableOpacity id={8}>
                <Image source={require('../assets/pizza4.png')} style={{ height: 70, width: 100, }} />
                <Caption style={{ color:"pink", fontSize: 15, fontFamily: "JosefinSans_600SemiBold_Italic", textAlign: "center"  }}>Pizza</Caption>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                  <Text style={styles.forward1}><MaterialCommunityIcons name='cart' size={27} color="white" /></Text>
                  <Text style={{ textAlign: "right" }}><MaterialCommunityIcons name='arrow-right-bold-hexagon-outline' size={27} color='white' /></Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>

        </View>
      </ScrollView>
    );
  }
}

const MainStack  = () => {
  <NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name='burger' component={burger}/>
    </Stack.Navigator>
    </NavigationContainer>
  }


const styles = StyleSheet.create({
  card1: {
    marginHorizontal: 15,
    padding: 20,
    marginVertical: 15,
    justifyContent: "space-evenly",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#d60664",
    borderRadius: 20,
    borderColor: "#d60664",
    aspectRatio:undefined
  },
  forward1: {
    justifyContent: "center",
    textAlign: "left"
  }
})

