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
import {increment} from './Redux/CartSlice';
import {decrement} from './Redux/CartSlice';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Animated from 'react-native-reanimated';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {responsiveFontSize, responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';

export const DetailScreen = ({route}) => {
  // const getData = async () => {
  //   const value = JSON.parse(await AsyncStorage.getItem('token')) ;
  //   setSaved(value[0].image4)
  // };

  // useEffect(() => {
  //   getData();
  //   }, []);

  const product = useSelector(state =>
    state.cart.find(item => item.id == route.params.params.id),
  );

  const dispatch = useDispatch();

  const Increment = () => {
    dispatch(increment(route.params.params));
  };

  const Decrement = () => {
    dispatch(decrement(route.params.params));
  };

  const {height, width} = Dimensions.get('window');

  const navigation = useNavigation();
  return (
    <View style={{height: '100%', width: '100%',backgroundColor:"white"}}>
      <View style={{marginHorizontal: wp(3), marginVertical: hp(5)}}>
        <TouchableOpacity
          onPress={() => navigation.goBack('')}
          style={{width: '10%'}}>
          <MaterialCommunityIcons
            name="keyboard-backspace"
            size={wp('7%')}
            color="black"
            style={{alignSelf: 'flex-start'}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Cart')}
          style={{position: 'absolute', alignSelf: 'flex-end'}}>
          <MaterialCommunityIcons name="cart" size={wp('7%')} color="#121526" />
        </TouchableOpacity>
      </View>
      <View style={{marginTop: responsiveHeight(5), marginHorizontal: wp(5)}}>
        <Text
          style={{
            fontSize: responsiveFontSize(3),
            color: '#121526',
            letterSpacing: -1,
            fontFamily: 'Rubik-Medium',
          }}>
          {route.params.params.title}
        </Text>
        <Text
          style={{
            fontSize: responsiveFontSize(4),
            color: '#5650ac',
            paddingVertical: 10,
            fontFamily: 'Poppins-Bold',
          }}>
          {route.params.params.price + '$'}
        </Text>
        <Image
          source={{
            uri: route.params.params.image,
          }}
          style={{
            height: "70%",
            width: "70%",
            // backgroundColor: 'red',
            resizeMode: 'contain',
            position: 'absolute',
            aspectRatio:1,
            bottom: responsiveHeight(20),
            left: responsiveWidth(32),
          }}
        />
        <Text
          style={{
            fontSize: responsiveFontSize(2),
            color: '#969698',
            fontFamily: 'Poppins-Regular',
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
            fontSize: responsiveFontSize(3),
            color: 'black',
            paddingLeft: wp('3'),
            paddingTop: hp('0'),
            textShadowColor: 'gray',
            textShadowRadius: 9,
            fontFamily: 'Poppins-Regular',
          }}>
          Medium
        </Text>
        <Text
          style={{
            fontSize: responsiveFontSize(2),
            color: '#969698',
            paddingLeft: wp('3'),
            paddingTop: hp('4'),
            textShadowColor: 'gray',
            fontFamily: 'Poppins-Regular',
            textShadowRadius: 1,
            textShadowOffset: {height: 0, width: 0.7},
          }}>
          Delivery in
        </Text>
        <Text
          style={{
            fontSize: responsiveFontSize(3),
            color: 'black',
            paddingLeft: wp('3'),
            paddingTop: hp('0'),
            textShadowColor: 'gray',
            fontFamily: 'Poppins-Regular',
            textShadowRadius: 9,
          }}>
          10 min
        </Text>
        <LinearGradient
          colors={['orange', 'red']}
          style={{
            height: "12%",
            width: "40%",
            flexDirection: 'row',
            // position: 'absolute',
            bottom: hp('5'),
            left: wp('47'),
            borderRadius: 15,
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => Decrement()}>
            <MaterialCommunityIcons name="minus" size={34} color="white" />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: responsiveFontSize(3),
              fontFamily: 'Poppins-Semi',
              color: 'white',
            }}>
            {product == undefined ? 0 : product?.quantity}
          </Text>
          <TouchableOpacity onPress={() => Increment()}>
            <MaterialCommunityIcons name="plus" color="white" size={34} />
          </TouchableOpacity>
          {/* <View style={{alignItems:"center",justifyContent:"center"}}> */}
          {/* <Animated.View style={{opacity:1,}}> 
                  <TouchableOpacity key={1} onPress={() => decrease(product)}>
                    <Text key={2} style={{fontSize: responsiveFontSize(5), color: 'white',textAlign:"center"}}>
                      Add To Cart
                    </Text>
                  </TouchableOpacity>
                </Animated.View> */}
          {/* <Animated.View style={{opacity:1,flexDirection:"row"}}> */}
          {/* </Animated.View> */}
          {/* </View> */}
        </LinearGradient>
      </View>
      <View style={{flex:1,bottom:0}}>
        <View
          style={{
            height: hp('1'),
            width: wp('25'),
            backgroundColor: '#908ae2',
            alignSelf: 'center',
            borderRadius: 50,
            bottom:responsiveHeight(26.5),
            position: 'absolute',
          }}
        />
        <View
          style={{
            backgroundColor: '#908ae2',
            flexDirection: 'row',
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            justifyContent: 'center',
            alignItems: 'center',
            bottom: 0,
            position: 'absolute',
            width: '95%',
            height: responsiveHeight(26),
            alignSelf: 'center',
          }}>
          <View style={{marginRight: wp('30')}}>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: responsiveFontSize(2),
                color: 'white',
                paddingTop: hp('6'),
                right:10,
                opacity: 0.7,
                textAlign: 'center',
              }}>
              Ratings
            </Text>
            <Text
              style={{
                fontSize: responsiveFontSize(3),
                color: 'white',
                paddingTop: hp('1'),
                opacity: 1,
                fontFamily: 'Poppins-Medium',
              }}>
              {route.params.params.rating}
            </Text>
            <Entypo
              name="emoji-flirt"
              color="#fed169"
              size={wp('6')}
              style={{bottom: '40%', left: '100%'}}
            />
          </View>
          <View>
            <Text
              style={{
                fontSize: responsiveFontSize(2),
                color: 'white',
                paddingTop: hp('6'),
                fontFamily: 'Poppins-Medium',
                right:10,
                opacity: 0.7,
                textAlign: 'center',
              }}>
              Kcal
            </Text>
            <Text
              style={{
                fontSize: responsiveFontSize(3),
                color: 'white',
                fontFamily: 'Poppins-Medium',
                paddingTop: hp('1'),
                opacity: 1,
              }}>
              {route.params.params.cal}
            </Text>
            <Entypo
              name="emoji-happy"
              color="#fed169"
              size={wp('6')}
              style={{bottom: '40%', left: '100%'}}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
