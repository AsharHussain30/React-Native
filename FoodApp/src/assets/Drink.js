import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import {increment} from '../../store/CartSlice';
import {decrement} from '../../store/CartSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Shadow} from 'react-native-shadow-2';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Animated from 'react-native-reanimated';

export const Drink = ({route}) => {
  // console.log(route.params[3].title4);

  // const myTestingData = [
  //   {
  //     title1: 'Drink',
  //     image1:
  //       'https://res.cloudinary.com/dhox1ri5p/image/upload/v1671452000/Drink_jlzdt1.png',
  //     title2: 'Cakes',
  //     image2:
  //       'https://res.cloudinary.com/dhox1ri5p/image/upload/v1671451998/donut_wldy9s.png',
  //     title3: 'Hot Dog',
  //     image3:
  //       'https://res.cloudinary.com/dhox1ri5p/image/upload/v1671451999/roll_uw6wpt.png',
  //     title4: 'Burger',
  //     image4:
  //       'https://res.cloudinary.com/dhox1ri5p/image/upload/v1671452000/burger_kv8qpt.png',
  //   },
  // ];

  // const getData = async () => {
  //   const value = JSON.parse(await AsyncStorage.getItem('token')) ;
  //   setSaved(value[0].image4)
  // };

  // useEffect(() => {
  //   getData();
  //   }, []);

  const {height, width} = Dimensions.get('window');
  const products = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();
  const increase = item => {
    dispatch(increment(item));
  };
  const decrease = item => {
    dispatch(decrement(item));
  };
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, margin: hp('2'), marginTop: hp('6')}}>
      <TouchableOpacity onPress={() => navigation.goBack('')}>
        <MaterialCommunityIcons
          name="keyboard-backspace"
          size={wp('7%')}
          color="black"
          style={{justifyContent: 'flex-start'}}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Cart')}
        style={{position: 'absolute', alignSelf: 'flex-end'}}>
        <Text style={{paddingRight: wp('1%'), textAlign: 'right'}}>
          <MaterialCommunityIcons name="cart" size={wp('7%')} color="#121526" />
        </Text>
      </TouchableOpacity>
      <View style={{marginTop: hp('5%'), flex: 1}}>
        <Text
          style={{
            fontSize: wp('8%'),
            color: '#121526',
            letterSpacing: -1,
            fontFamily: 'Rubik-Medium',
          }}>
          {route.params.title}
        </Text>
        <Text
          style={{
            fontSize: wp('9'),
            color: '#5650ac',
            fontFamily: 'Rubik-Medium',
            fontWeight: 'bold',
            paddingLeft: 0,
            paddingVertical: 10,
          }}>
          4.25$
        </Text>
        <Image
          source={{
            uri: route.params.image,
          }}
          style={{
            height: hp('50'),
            width: wp('60'),
            resizeMode: 'contain',
            position: 'absolute',
            top: hp('-2'),
            left: wp('37'),
          }}
        />
        <Text
          style={{
            fontSize: wp('5'),
            color: '#969698',
            paddingLeft: wp('3'),
            paddingTop: hp('4'),
            textShadowColor: 'gray',
            textShadowRadius: 1,
            textShadowOffset: {height: 0, width: 0.7},
          }}>
          Size
        </Text>
        <Text
          style={{
            fontSize: wp('9'),
            color: 'black',
            paddingLeft: wp('3'),
            paddingTop: hp('1'),
            textShadowColor: 'gray',
            textShadowRadius: 9,
          }}>
          Medium
        </Text>
        <Text
          style={{
            fontSize: wp('5'),
            color: '#969698',
            paddingLeft: wp('3'),
            paddingTop: hp('4'),
            textShadowColor: 'gray',
            textShadowRadius: 1,
            textShadowOffset: {height: 0, width: 0.7},
          }}>
          Delivery in
        </Text>
        <Text
          style={{
            fontSize: wp('9'),
            color: 'black',
            paddingLeft: wp('3'),
            paddingTop: hp('1'),
            textShadowColor: 'gray',
            textShadowRadius: 9,
          }}>
          10 min
        </Text>

        {products.map(product => (
          <>
            <LinearGradient
              colors={['orange', 'red']}
              style={{
                height: hp('7'),
                width: wp('40'),
                flexDirection: 'row',
                position: 'absolute',
                overflow: 'visible',
                top: hp('44'),
                left: wp('47'),
                borderRadius: 15,
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}>
                  <TouchableOpacity key={1} onPress={() => decrease(product)}>
                   <Text key={2} style={{fontSize: wp('5'), color: 'white',marginRight:1}}>
                     <MaterialCommunityIcons key={3} name="minus" size={34} />
                   </Text>
                 </TouchableOpacity>
                 <Text key={4} style={{fontSize: wp('5'), color: 'white'}}>
                   {product.quantity}
                 </Text>
                 <TouchableOpacity key={5} onPress={() => increase(product)}>
                   <Text key={6} style={{fontSize: wp('5'), color: 'white'}}>
                     <MaterialCommunityIcons key={7} name="plus" size={34} />
                   </Text>
                 </TouchableOpacity> 
                 {/* <View style={{alignItems:"center",justifyContent:"center"}}> */}
                {/* <Animated.View style={{opacity:1,}}> 
                  <TouchableOpacity key={1} onPress={() => decrease(product)}>
                    <Text key={2} style={{fontSize: wp('5'), color: 'white',textAlign:"center"}}>
                      Add To Cart
                    </Text>
                  </TouchableOpacity>
                </Animated.View> */}
                {/* <Animated.View style={{opacity:1,flexDirection:"row"}}> */}
                      {/* </Animated.View> */}
                 {/* </View> */}
            </LinearGradient>
          </>
        ))}
      </View>
      <View
        style={{
          height: hp('1'),
          width: wp('35'),
          backgroundColor: '#908ae2',
          alignSelf: 'center',
          borderRadius: 50,
          // bottom: -55,
          position: 'absolute',
          marginTop: hp('65'),
        }}></View>

      <View
        style={{
          // height: hp("28"),
          width: '100%',
          backgroundColor: '#908ae2',
          flexDirection: 'row',
          flex: 1,
          top: hp('18'),
          // position: 'absolute',
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          justifyContent: 'center',
        }}>
        <View style={{paddingRight: wp('30')}}>
          <Text
            style={{
              fontSize: wp('4'),
              color: 'white',
              paddingTop: hp('6'),
              opacity: 0.7,
              textAlign: 'center',
            }}>
            Ratings
          </Text>
          <Text
            style={{
              fontSize: hp('6'),
              color: 'white',
              paddingTop: hp('1'),
              opacity: 1,
            }}>
            4.8
          </Text>
          <Entypo
            name="emoji-flirt"
            color="#fed169"
            size={wp('6')}
            style={{bottom: 50, left: 55}}
          />
        </View>
        <View>
          <Text
            style={{
              fontSize: wp('4'),
              color: 'white',
              paddingTop: hp('6'),
              opacity: 0.7,
              textAlign: 'center',
            }}>
            Kcal
          </Text>
          <Text
            style={{
              fontSize: hp('6'),
              color: 'white',
              paddingTop: hp('1'),
              opacity: 1,
            }}>
            180
          </Text>
          <Entypo
            name="emoji-happy"
            color="#fed169"
            size={wp('6')}
            style={{bottom: 50, left: 65}}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
