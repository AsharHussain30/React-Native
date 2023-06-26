import {StyleSheet, Image, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import {
  MotiView,
  ScrollView,
  useAnimationState,
  useDynamicAnimation,
} from 'moti';
import {RotateInDownLeft, RotateInUpRight} from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector, useDispatch} from 'react-redux';
import {decrement, increment} from '../../store/CartSlice';

export const Donut = ({route}) => {
  console.log(route);
  const products = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();
  const increase = item => {
    dispatch(increment(item));
  };
  const decrease = item => {
    dispatch(decrement(item));
  };
  const animation = useDynamicAnimation(() => {
    return {
      translateY: 0,
    };
  });
  const navigation = useNavigation();
  return (
    <View style={{backgroundColor: '#fcfcfc', flex: 1}}>
      <TouchableOpacity
        onPress={() => navigation.goBack('')}
        style={{padding: 25}}>
        <Ionicons name="arrow-back-circle-outline" size={34} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Cart')}
        style={{position: 'absolute', alignSelf: 'flex-end', padding: 25}}>
        <Text style={{paddingRight: 20, textAlign: 'right'}}>
          <MaterialCommunityIcons name="cart" size={34} color="black" />
        </Text>
      </TouchableOpacity>
      <View>
        <Text
          style={{
            fontSize: 39,
            color: 'black',
            fontWeight: 'bold',
            paddingLeft: 25,
          }}>
          Sprinkle {'\n'}Cakes
        </Text>
        <Text
          style={{
            fontSize: 39,
            color: '#5650ac',
            fontWeight: 'bold',
            paddingLeft: 25,
            paddingVertical: 10,
          }}>
          4.25$
        </Text>
        <Image
          source={require('../../assets/themePics/donut.png')}
          style={{
            height: 400,
            resizeMode: 'contain',
            position: 'absolute',
            top: 60,
            left: 180,
          }}
        />
        <Text
          style={{
            fontSize: 20,
            color: '#969698',
            paddingLeft: 25,
            paddingTop: 50,
            textShadowColor: 'gray',
            textShadowRadius: 1,
            textShadowOffset: {height: 0, width: 0.7},
          }}>
          Size
        </Text>
        <Text
          style={{
            fontSize: 40,
            color: 'black',
            paddingLeft: 25,
            paddingTop: 10,
            textShadowColor: 'gray',
            textShadowRadius: 9,
          }}>
          Medium
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: '#969698',
            paddingLeft: 25,
            paddingTop: 50,
            textShadowColor: 'gray',
            textShadowRadius: 1,
            textShadowOffset: {height: 0, width: 0.7},
          }}>
          Delivery in
        </Text>
        <Text
          style={{
            fontSize: 40,
            color: 'black',
            paddingLeft: 25,
            paddingTop: 10,
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
                height: 60,
                width: 180,
                flexDirection: 'row',
                position: 'absolute',
                overflow: 'visible',
                top: 410,
                left: 210,
                borderRadius: 15,
                justifyContent: 'space-evenly',
                backgroundColor: 'red',
                alignItems: 'center',
              }}>
              <TouchableOpacity onPress={() => decrease(product)}>
                <Text style={{fontSize: 25, color: 'white'}}>
                  <MaterialCommunityIcons name="minus" size={34} />
                </Text>
              </TouchableOpacity>
              <Text style={{fontSize: 25, color: 'white'}}>
                {product.quantity}
              </Text>
              <TouchableOpacity onPress={() => increase(product)}>
                <Text style={{fontSize: 25, color: 'white'}}>
                  <MaterialCommunityIcons name="plus" size={34} />
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </>
        ))}
      </View>
      <View
        style={{
          height: 7,
          width: 150,
          backgroundColor: '#908ae2',
          alignSelf: 'center',
          borderRadius: 50,
          bottom: -25,
          marginTop: 20,
        }}></View>
      <View
        style={{
          height: 150,
          backgroundColor: '#908ae2',
          flexDirection: 'row',
          flex: 1,
          marginTop: 30,
          borderTopLeftRadius: 35,
          borderTopRightRadius: 35,
          marginHorizontal: 10,
          justifyContent: 'center',
        }}>
        <View style={{paddingRight: 160}}>
          <Text
            style={{
              fontSize: 20,
              color: 'white',
              paddingTop: 50,
              opacity: 0.7,
              textAlign: 'center',
            }}>
            Ratings
          </Text>
          <Text
            style={{fontSize: 40, color: 'white', paddingTop: 10, opacity: 1}}>
            4.8
          </Text>
          <Entypo
            name="emoji-flirt"
            color="#fed169"
            size={25}
            style={{position: 'absolute', top: 90, left: 60}}
          />
        </View>
        <View>
          <Text
            style={{
              fontSize: 20,
              color: 'white',
              paddingTop: 50,
              opacity: 0.7,
              textAlign: 'center',
            }}>
            Kcal
          </Text>
          <Text
            style={{fontSize: 40, color: 'white', paddingTop: 10, opacity: 1}}>
            125
          </Text>
          <Entypo
            name="emoji-happy"
            color="#fed169"
            size={25}
            style={{position: 'absolute', top: 90, left: 70}}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
