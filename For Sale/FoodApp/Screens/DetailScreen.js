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
    <View style={{height: '100%', width: '100%'}}>
      <View style={{marginHorizontal: wp(3), marginVertical: hp(5)}}>
        <TouchableOpacity onPress={() => navigation.goBack('')}>
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
      <View style={{marginTop: hp('5%'), marginHorizontal: wp(5)}}>
        <Text
          style={{
            fontSize: wp('8%'),
            color: '#121526',
            letterSpacing: -1,
            fontFamily: 'Rubik-Medium',
          }}>
          {route.params.params.title}
        </Text>
        <Text
          style={{
            fontSize: wp('9'),
            color: '#5650ac',
            fontFamily: 'Rubik-Medium',
            fontWeight: 'bold',
            paddingVertical: 10,
          }}>
          4.25$
        </Text>
        <Image
          source={{
            uri: route.params.params.image,
          }}
          style={{
            height: hp('50'),
            width: wp('60'),
            resizeMode: 'contain',
            position: 'absolute',
            bottom: 0,
            top: -5,
            left: wp('32'),
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
          <TouchableOpacity onPress={() => Decrement()}>
            <MaterialCommunityIcons name="minus" size={34} color="white" />
          </TouchableOpacity>
          <Text style={{fontSize: wp('5'), color: 'white'}}>
            {product ? product.quantity : 0}
          </Text>
          <TouchableOpacity onPress={() => Increment()}>
            <MaterialCommunityIcons name="plus" color="white" size={34} />
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
          top: hp('73'),
        }}></View>
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
          alignSelf: 'center',
        }}>
        <View style={{marginRight: wp('30'), paddingVertical: hp('1')}}>
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
            style={{bottom: 50, left: 75}}
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
            style={{bottom: 50, left: 95}}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
