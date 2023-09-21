import 'react-native-reanimated';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch} from 'react-redux';
// import {remove} from '../../store/CartSlice';
// import {increment} from '../../store/CartSlice';
// import {decrement} from '../../store/CartSlice';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Neomorph, NeomorphBlur, Shadow} from 'react-native-neomorph-shadows';

export const Cart = ({route}) => {
  const [saved, setSaved] = useState();
  const navigation = useNavigation();
  const {height, width} = Dimensions.get('window');

  const products = useSelector(state => state.cart);

  console.log(products);
  // const dispatch = useDispatch();

  // const sending = async () => {

  // };

  //  useEffect(() => {
  //    test2();
  //  }, []);

  // const test2 = async () => {

  //       const MyJSON = JSON.stringify(route.params);
  //       await AsyncStorage.setItem('token1', MyJSON);
  //       console.log('send data!');

  //         //  setSaved(value);
  //      const value = await AsyncStorage.getItem('token1');
  //      setSaved(value)

  //     };
  //     console.log(saved);
  // console.log(products);

  // console.log(test2);

  // const handleRemove = product => {
  //   dispatch(remove(product));
  //   console.log(product);
  // };

  return (
    <View style={{height: '100%', width: '100%'}}>
      <ScrollView showsVerticalScrollIndicator={false} style={{}}>
        <View style={{marginHorizontal: wp(3), marginVertical: hp(5)}}>
          <TouchableOpacity
            onPress={() => navigation.goBack('')}
            style={{alignSelf: 'flex-start'}}>
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
              <MaterialCommunityIcons
                name="cart"
                size={wp('7%')}
                color="#121526"
              />
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{marginHorizontal: wp(3), flex: 1}}>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: wp('10%'),
                color: '#121526',
                letterSpacing: -1,
                fontFamily: 'Rubik-Medium',
              }}>
              My Cart
            </Text>
            <Image
              source={require('../assets/themePics/textburger.png')}
              style={{height: hp('7'), width: wp('10'), left: 7}}
            />
          </View>

          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              paddingTop: hp('2.8'),
              paddingVertical: 20,
              marginHorizontal: wp('5'),
            }}>
            <Text
              style={{
                fontSize: wp('3.5'),
                color: 'gray',
                fontFamily: 'Rubik-Medium',
                textAlignVertical: 'center',
              }}>
              Items Choosen
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('EditCart')}>
              <AntDesign name="edit" size={wp('5')} color="black" />
            </TouchableOpacity>
          </View>

          <View style={{alignItems: 'center', marginVertical: hp('5')}}>
            {products.map((product, index) => (
              <Shadow
                inner
                style={[
                  {
                    shadowOffset: {width: 2, height: 2},
                    shadowOpacity: 1,
                    shadowColor: '#baa2e1',
                    shadowRadius: 15,
                    borderRadius: 20,
                  },
                  styles.card1,
                ]}
                key={index}>
                <LinearGradient
                  colors={['orange', 'red']}
                  style={{
                    borderRadius: 100,
                    position: 'absolute',
                    bottom: hp('11'),
                    left: 30,
                    height: hp('6.7'),
                    width: wp('13'),
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: wp('5'),
                      color: 'white',
                      textAlignVertical: 'center',
                    }}>
                    {product.quantity}
                  </Text>
                </LinearGradient>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      paddingLeft: 20,
                      fontSize: wp('5'),
                      fontWeight: 'bold',
                      textAlign: 'left',
                      textAlignVertical: 'center',
                    }}>
                    {product.title}
                  </Text>
                  <View style={{marginBottom: 25, paddingLeft: 20}}>
                    <Image
                      source={{uri: product.image}}
                      style={{
                        height: hp('19'),
                        width: wp('55'),
                        resizeMode: 'contain',
                      }}
                    />
                  </View>
                </View>
              </Shadow>
            ))}
          </View>

          {products == !products ? (
            <View
              style={{
                flex: 1,
                alignItems: 'center',
              }}>
              <Image
                source={require('../assets/themePics/emptycart.png')}
                style={{
                  resizeMode: 'contain',
                  position: 'absolute',
                  bottom: 150,
                  height: hp('30%'),
                }}
              />
            </View>
          ) : (
            <View
              style={{
                justifyContent: 'center',
                marginHorizontal: wp('4'),
              }}>
              <LinearGradient
                colors={['#ffcc00', 'orange']}
                locations={[0.1, 25]}
                style={{
                  bottom: '10%',
                  elevation: 5,
                  width: '100%',
                  height: wp('22'),
                  borderRadius: 25,
                  justifyContent: 'center',
                  marginBottom: hp('1'),
                }}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('CheckOut');
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      textAlignVertical: 'center',
                      fontSize: wp('8'),
                      top: 5,
                      color: 'white',
                      fontFamily: 'Poppins-Medium',
                    }}>
                    Check Out
                  </Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  card1: {
    marginHorizontal: 5,
    padding: 20,
    marginTop: 35,
    marginVertical: 15,
    height: hp('14.5'),
    width: wp('85'),
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#d6c4f4',
    elevation: 5,
    borderRadius: 20,
  },
});
