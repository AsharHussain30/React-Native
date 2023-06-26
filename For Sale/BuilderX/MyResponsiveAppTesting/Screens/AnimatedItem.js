import {MotiView} from 'moti';
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import {TouchableOpacity, ScrollView, Image, Animated} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import CartButton from '../components/CartButton';
import Quantity from '../components/Quantity';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import {Easing, SlideInLeft} from 'react-native-reanimated';
import {useDispatch, useSelector} from 'react-redux';
import Animatable, {View, Text} from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';
import {fav, removeFav} from './Redux/FavSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GlobalContext} from './Payment';

export const AnimatedItem = ({route}) => {
  useSelector(state => console.log(state.cart));

  const navigation = useNavigation();

  const ItemsImgScale = useRef(new Animated.Value(0)).current;
  const ItemsImgX = useRef(new Animated.Value(0)).current;
  const ItemsImgY = useRef(new Animated.Value(0)).current;

  const {price, selectedImg, selectedName, id} = route.params;

  // console.log(route.params);
  const ScaleInterpolate = ItemsImgScale.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 0.5],
  });

  const XaxisInterpolate = ItemsImgX.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 0],
  });

  const YaxisInterpolate = ItemsImgY.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -100],
  });

  const StartAnimation = () => {
    Animated.timing(ItemsImgX, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();

    Animated.timing(ItemsImgScale, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();

    Animated.timing(ItemsImgY, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();

    console.log('Animation Start Successfully');
  };

  const dispatch = useDispatch();

  // useEffect(() => {
  //   StartAnimation();
  // }, []);

  const favItems = useSelector(state =>
    state.fav.find(item => item.id == route.params.id),
  );

  const [favState, setFavState] = useState(true);

  console.log(favItems, 'fav Item');

  const FavColor = 'red';

  return (
    <MotiView
      from={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{duration: 1000}}
      style={{
        backgroundColor: 'rgba(232,230,230,1)',
        zIndex: 10,
      }}>
      <View
        style={{
          height: responsiveHeight(10),
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: responsiveWidth(3),
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Feather
            name="chevron-left"
            style={{
              color: 'rgba(0,0,0,1)',
              fontSize: responsiveFontSize(3),
            }}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontFamily: 'alata-regular',
            color: '#121212',
            fontSize: responsiveFontSize(2.5),
          }}>
          Details
        </Text>
        <TouchableOpacity
          onPress={() => {
            dispatch(
              favState
                ? fav({selectedImg, selectedName, price, id})
                : removeFav({selectedImg, selectedName, price, id}),
            );
            setFavState(!favState);
            // AsyncStorage.clear();
          }}>
          <EvilIcons
            name="heart"
            color={favItems != null ? FavColor : 'rgba(0,0,0,1)'}
            style={{
              fontSize: responsiveFontSize(3),
            }}
          />
        </TouchableOpacity>
      </View>
      {/* <MotiView
          from={{
            transform: [{scale: 0}],
            right: '0%',
            bottom: '-100%',
          }}
          animate={{
            transform: [{scale: .5}],
            right: '10%',
            bottom: '52%',
          }}
          transition={{
            duration: 1000,
            easing: Easing.ease,
          }}
          style={{alignItems: 'center', position: 'absolute', zIndex: 0}}> */}
      <View
        animation="zoomInDown"
        style={{justifyContent: 'center', top: '11%'}}>
        <Image
          source={selectedImg}
          style={{
            position: 'absolute',
            height: 450,
            width: 450,
            resizeMode: 'cover',
            alignSelf: 'center',
            transform: [{scale: 0.5}],
          }}
        />
      </View>
      {/* </MotiView> */}
      {/* <MotiView
          from={{
            bottom: -550,
          }}
          animate={{
            bottom: -250,
          }}
          transition={{
            duration: 1000,
          }}
          style={{
            backgroundColor:"red",
            position:"absolute"
          }}
          > */}
      {/* <View
            style={{
              // top: 21,
              // left: 0,
              width: responsiveWidth(100),
              // position: 'absolute',
              backgroundColor: 'rgba(255,255,255,1)',
              borderTopLeftRadius: responsiveWidth(13),
              borderTopRightRadius: responsiveWidth(13),
            }}> */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: 'rgba(255,255,255,1)',
            borderTopLeftRadius: responsiveWidth(13),
            borderTopRightRadius: responsiveWidth(13),
            marginTop: '60%',
          }}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: responsiveHeight(3),
              marginLeft: responsiveWidth(6),
            }}>
            <FontAwesome
              name="star"
              style={{
                color: 'rgba(221,169,13,1)',
                fontSize: responsiveFontSize(2.5),
                height: 19,
                width: 18,
              }}></FontAwesome>
            <Text
              style={{
                fontFamily: 'roboto-500',
                color: '#121212',
                fontSize: responsiveFontSize(1.8),
                marginLeft: 8,
              }}>
              4.6
            </Text>
          </View>
          <View
            animation="slideInLeft"
            duration={1000}
            delay={300}
            style={{
              // height: responsiveHeight(7),
              flexDirection: 'row',
              marginTop: responsiveHeight(3),
              marginHorizontal: responsiveWidth(4),
              justifyContent: 'flex-end',
            }}>
            <Text
              style={{
                fontFamily: 'albert-sans-700',
                color: '#121212',
                fontSize: responsiveFontSize(3),
                right: responsiveWidth(12),
              }}>
              Shrimp &amp; Vegetable {'\n'}Fried Rice
            </Text>
            <Text
              style={{
                fontFamily: 'roboto-700',
                color: 'rgba(235,174,9,1)',
                fontSize: responsiveFontSize(3),
                textAlignVertical: 'center',
                textAlign: 'center',
              }}>
              $
            </Text>
            <Text
              style={{
                fontFamily: 'aladin-regular',
                color: '#121212',
                fontSize: responsiveFontSize(3),
                textAlign: 'center',
                padding: 7,
                textAlignVertical: 'center',
              }}>
              {price}
            </Text>
          </View>
          <Text
            animation="slideInRight"
            duration={2000}
            style={{
              fontFamily: 'akshar-regular',
              color: 'rgba(134,129,129,1)',
              textAlign: 'left',
              fontSize: 16,
              marginTop: 5,
              marginLeft: 26,
            }}>
            Shrimp fried rice: a savory and satisfying combination {'\n'}of
            tender shrimp, fluffy rice, and crisp vegetables,{'\n'} seasoned
            with a mix of soy sauce, oyster sauce, garlic,{'\n'} and ginger.
          </Text>
          <View
            animation="slideInLeft"
            duration={1000}
            delay={300}
            style={{
              flexDirection: 'row',
              marginTop: 15,
              marginLeft: 26,
              marginRight: 26,
            }}>
            <Text
              style={{
                fontFamily: 'verdana-regular',
                color: 'rgba(240,185,104,1)',
                fontSize: 15,
              }}>
              Proteins
            </Text>
            <Text
              style={{
                fontFamily: 'verdana-regular',
                color: 'rgba(0,0,0,1)',
                fontSize: 15,
                marginLeft: 228,
              }}>
              4.5g
            </Text>
          </View>
          <View
            animation="slideInLeft"
            duration={1000}
            delay={500}
            style={{
              flexDirection: 'row',
              marginTop: 13,
              marginLeft: 26,
              marginRight: 26,
            }}>
            <Text
              style={{
                fontFamily: 'verdana-regular',
                color: 'rgba(240,185,104,1)',
                fontSize: 15,
              }}>
              Fats
            </Text>
            <Text
              style={{
                fontFamily: 'verdana-regular',
                color: 'rgba(0,0,0,1)',
                fontSize: 15,
                marginLeft: 258,
              }}>
              6.3g
            </Text>
          </View>
          <View
            animation="slideInLeft"
            duration={1000}
            delay={700}
            style={{
              flexDirection: 'row',
              marginTop: 14,
              marginLeft: 26,
              marginRight: 22,
            }}>
            <Text
              style={{
                fontFamily: 'verdana-regular',
                color: 'rgba(240,185,104,1)',
                fontSize: 15,
              }}>
              Carbohydrates
            </Text>
            <Text
              style={{
                fontFamily: 'verdana-regular',
                color: 'rgba(0,0,0,1)',
                fontSize: 15,
                marginLeft: 174,
              }}>
              10.9g
            </Text>
          </View>
          <Text
            style={{
              fontFamily: 'albert-sans-700',
              color: '#121212',
              fontSize: 15,
              marginTop: 22,
              marginLeft: 26,
            }}>
            Ingredients
          </Text>
          <View
            style={{
              marginTop: 14,
              marginLeft: 26,
            }}>
            {/* <View
              style={{
                // top: 0,
                // left: 0,
                // width: 316,
                // height: 198,
                // position: 'absolute',
              }}> */}
            <Text
              style={{
                // top: 0,
                // left: 0,
                // position: 'absolute',
                fontFamily: 'verdana-regular',
                color: 'rgba(133,132,131,1)',
                fontSize: 15,
              }}>
              Cooked white rice{'\n'}Shrimp{'\n'}Eggs{'\n'}Vegetables
              {'\n'}
              Garlic (minced){'\n'}Ginger (minced or grated){'\n'}Soy sauce
              {'\n'}Oyster sauce (optional){'\n'}Salt and pepper{'\n'}
              Cooking oil (such as vegetable, canola, or{'\n'}peanut oil)
            </Text>
            {/* </View> */}
          </View>
          <CartButton props={route.params} />
          {/* </ScrollView> */}
          <Quantity props={route.params} />
        </View>
      </ScrollView>
      {/* </MotiView> */}
    </MotiView>
  );
};
