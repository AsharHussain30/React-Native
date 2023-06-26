import React, {Component, useEffect, useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, FlatList} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {useDispatch, useSelector} from 'react-redux';
import {decrement, increment} from '../Screens/Redux/CartSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Quantity({props}) {
  const dispatch = useDispatch();

  const Increment = item => {
    dispatch(increment(item));
  };

  const Decrement = item => {
    dispatch(decrement(item));
  };

  const products = useSelector(state =>
    state.cart.find(item => item.id == props.id),
  );

  // const arrange = products.sort(function (obj1, obj2) {
  //   return obj1.id - obj2.id;
  // });

  console.log('234');

  console.log(props, 'props');

  console.log(products, 'product');

  // console.log(products.find(item => item));

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          Decrement(props);
          // AsyncStorage.clear();
        }}>
        <Text style={styles.Minus}>-</Text>
      </TouchableOpacity>
      <Text style={styles.Quantity}>{products ? products.quantity : 0}</Text>
      <TouchableOpacity onPress={() => Increment(props)}>
        <Text style={styles.Plus}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255,162,20,1)',
    borderRadius: 25,
    flexDirection: 'row',
    position: 'absolute',
    top: -18,
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 3,
  },
  Minus: {
    fontFamily: 'roboto-regular',
    color: 'rgba(255,255,255,1)',
    fontSize: responsiveFontSize(3),
  },
  Quantity: {
    fontFamily: 'akshar-500',
    color: 'rgba(255,255,255,1)',
    fontSize: responsiveFontSize(3),
    paddingHorizontal: 20,
  },
  Plus: {
    fontFamily: 'roboto-regular',
    color: 'rgba(255,255,255,1)',
    fontSize: responsiveFontSize(3),
  },
});

export default Quantity;
