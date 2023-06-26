import {useNavigation} from '@react-navigation/native';
import React, {Component, useRef, useState} from 'react';
import {StyleSheet, TouchableOpacity, Text, View, Image} from 'react-native';
import {
  PanGestureHandler,
  RefreshControl,
  Swipeable,
} from 'react-native-gesture-handler';
import Animation from '../Screens/Animation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import Animated, {
  FadeIn,
  FadeOut,
  SlideOutRight,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {useDispatch, useSelector} from 'react-redux';
import {add} from '../Screens/Redux/CartSlice';

function CartButton({props}) {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const addHandler = props => {
    dispatch(add(props));
  };


  return (
    <View style={[styles.container, props.style]}>
      {/* <MaterialCommunityIcons name="arrow-right" color="white" size={25}/> */}
      <Swipeable
        renderLeftActions={() => {
          return <View style={{height: 45, width: 170}} />;
        }}
        onSwipeableOpen={() => {
          navigation.replace('Cart');
          addHandler(props);
        }}
        useNativeAnimations={true}
        containerStyle={{height: 45, width: 170}}>
        <View style={styles.Swipe}>
          <View style={styles.SwipeView}>
            <Image
              source={require('../assets/images/swipe.png')}
              style={styles.Img}
            />
          </View>
        </View>
      </Swipeable>
      {/* <View style={styles.Swipe}>
        <View style={styles.SwipeView}>
          <Image
            source={require('../assets/images/swipe.png')}
            style={styles.Img}
          />
        </View>
      </View> */}
      <Text style={styles.addToCart}>Add To Cart</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255,162,20,1)',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 15,
    marginBottom: 100,
    height: 50,
    width: 180,
    marginVertical: 20,
    alignSelf: 'center',
  },
  Img: {
    tintColor: 'white',
    resizeMode: 'contain',
    width: 80,
    zIndex: 5,
  },
  Swipe: {
    height: 45,
    width: 170,
  },
  SwipeView: {
    height: 45,
    width: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.7,
    borderColor: 'white',
    borderRadius: 10,
  },
  addToCart: {
    color: '#fff',
    fontSize: responsiveFontSize(1.7),
    textAlign: 'center',
    textAlignVertical: 'center',
    position: 'absolute',
    left: 70,
    // backgroundColor:"red"
  },
});

export default CartButton;
