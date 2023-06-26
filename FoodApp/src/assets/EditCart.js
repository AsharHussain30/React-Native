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
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch} from 'react-redux';
import {remove} from '../../store/CartSlice';
import {increment} from '../../store/CartSlice';
import {decrement} from '../../store/CartSlice';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const EditCart = ({route}) => {
  const navigation = useNavigation();
  const {height, width} = Dimensions.get('window');

  const [cartnotification, setCartnotification] = useState([]);

  const items = useSelector(state => state.cart);
  const products = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();

  console.log(products);

  const handleRemove = product => {
    dispatch(remove(product));
    console.log(product);
  };

  return (
    <View style={{flex: 1, margin: hp('2'), marginTop: hp('6')}}>
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
          <MaterialCommunityIcons name="cart" size={wp('7%')} color="#121526" />
        </Text>
      </TouchableOpacity>

      <View style={{marginTop: hp('5%'), flex: 1}}>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              fontSize: wp('10%'),
              color: '#121526',
              letterSpacing: -1,
              fontFamily: 'Rubik-Medium',
            }}>
            Edit Cart
          </Text>
          <Image
            source={require('../../assets/themePics/textburger.png')}
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

        <ScrollView showsVerticalScrollIndicator={false} style={{}}>
          <View style={{alignItems: 'center', marginVertical: hp('5')}}>
            {products.map((product, index) => (
              <>
                <View key={1} style={styles.card1}>
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
                        fontSize: wp("5"),
                        color: 'white',
                        textAlignVertical: 'center',
                      }}>
                      {product.quantity}
                    </Text>
                  </LinearGradient>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'space-evenly',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <TouchableOpacity onPress={() => handleRemove(product)}>
                      <MaterialCommunityIcons
                        name="delete"
                        size={wp("7")}
                        color="gray"
                      />
                    </TouchableOpacity>
                    <Text
                      style={{
                        color: 'black',
                        paddingLeft: 20,
                        fontSize: wp("5"),
                        fontWeight: 'bold',
                        textAlign: 'left',
                        textAlignVertical: 'center',
                      }}>
                      {product.title}
                    </Text>
                    <View style={{marginBottom: 25, paddingLeft: 20}}>
                      {product.image}
                    </View>
                  </View>
                </View>
              </>
            ))}
          </View>
        </ScrollView>

        {products == !cartnotification ? (
          <View
            style={{
              flex: 1,
              alignItems: 'center',
            }}>
            <Image
              source={require('../../assets/themePics/emptycart.png')}
              style={{
                resizeMode: 'contain',
                position: 'absolute',
                bottom: 150,
                height: hp('30%'),
              }}
            />
          </View>
        ) : (
          <View style={{justifyContent: 'center', marginHorizontal: wp('4')}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#ffcc00',
                width: '100%',
                height: wp('22'),
                borderRadius: 25,
                justifyContent: 'center',
                marginBottom: hp('1'),
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  textAlignVertical: 'center',
                  fontSize: wp('5'),
                  color: 'black',
                  fontWeight: 'bold',
                }}>
                Checkout
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
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
    backgroundColor: 'white',
    elevation: 15,
    borderRadius: 20,
  },
});
