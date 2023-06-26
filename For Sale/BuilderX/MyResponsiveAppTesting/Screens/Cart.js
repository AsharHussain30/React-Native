import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Feather from 'react-native-vector-icons/Feather';
import {ScrollView} from 'react-native-virtualized-view';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {useStripe} from '@stripe/stripe-react-native';
import {decrement, increment} from './Redux/CartSlice';
import CheckOut from './CheckOut';

const Cart = ({route}) => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const Data = useSelector(state => state.cart);

  // const {initPaymentSheet, presentPaymentSheet} = useStripe();
  // const [loading, setLoading] = useState(false);

  // const fetchPaymentSheetParams = async () => {
  //   const response = await fetch(`${""}/payment-sheet`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  //   const {paymentIntent, ephemeralKey, customer} = await response.json();

  //   return {
  //     paymentIntent,
  //     ephemeralKey,
  //     customer,
  //   };
  // };

  // const initializePaymentSheet = async () => {
  //   const {paymentIntent, ephemeralKey, customer, publishableKey} =
  //     await fetchPaymentSheetParams();

  //   const {error} = await initPaymentSheet({
  //     merchantDisplayName: 'Example, Inc.',
  //     customerId: customer,
  //     customerEphemeralKeySecret: ephemeralKey,
  //     paymentIntentClientSecret: paymentIntent,
  //     // Set `allowsDelayedPaymentMethods` to true if your business can handle payment
  //     //methods that complete payment after a delay, like SEPA Debit and Sofort.
  //     allowsDelayedPaymentMethods: true,
  //     defaultBillingDetails: {
  //       name: 'Jane Doe',
  //     },
  //   });
  //   if (!error) {
  //     setLoading(true);
  //   }
  // };

  // const openPaymentSheet = async () => {
  //   // see below
  // };

  // useEffect(() => {
  //   initializePaymentSheet();
  // }, []);

  return (
    <View style={styles.Container}>
      {/* Cart Header */}
      <View style={styles.CartHeader}>
        <TouchableOpacity
          onPress={() => {
            navigation.replace('Home');
          }}>
          <Feather name="arrow-left" color="black" size={24} />
        </TouchableOpacity>
        <Text style={styles.textCart}>Cart</Text>
      </View>
      {/* Cart Header */}
      {/* Hr */}
      <View style={styles.hr} />
      {/* Hr */}
      {/* Cart Item */}
      {/* <ScrollView nestedScrollEnabled={true}> */}
      {Data ? (
        <>
          <FlatList
            nestedScrollEnabled={true}
            data={Data}
            contentContainerStyle={{paddingBottom: 150}}
            renderItem={({item, index}) => {
              return (
                <View style={styles.CartItem_Container}>
                  <View style={styles.Items_Card}>
                    <Image
                      source={item.selectedImg}
                      style={styles.Items_image}
                    />
                    <View style={styles.InfoView}>
                      <Text style={styles.Items_Name_Text}>
                        {item.selectedName}
                      </Text>
                      <View style={styles.Quantity_View}>
                        <Text style={styles.Quantity_Heading_Text}>
                          Quantity:
                        </Text>
                        <TouchableOpacity
                          style={styles.QuantityPlus_View}
                          onPress={() => {
                            dispatch(increment(item));
                          }}>
                          <Text style={styles.Quantity_Plus}>+</Text>
                        </TouchableOpacity>
                        <Text style={styles.Quantity}>{item.quantity}</Text>
                        <TouchableOpacity
                          style={styles.QuantityMinus_View}
                          onPress={() => {
                            dispatch(decrement(item));
                          }}>
                          <Text style={styles.Quantity_Minus}>-</Text>
                        </TouchableOpacity>
                      </View>
                      <View style={styles.Price_View}>
                        <Text style={styles.Price_Heading_Text}>Price:</Text>
                        <Text style={styles.Price}>{item.price}</Text>
                        <Text style={styles.Price_$}>$</Text>
                      </View>
                    </View>
                  </View>
                </View>
              );
            }}
          />
          <TouchableOpacity onPress={() => navigation.navigate(CheckOut)}>
            <View style={styles.CheckOut_Container}>
              <Text style={styles.CheckOut_Text}>CheckOut</Text>
            </View>
          </TouchableOpacity>
        </>
      ) : (
        <View style={{height: '100%', alignItems: 'center', marginTop: '20%'}}>
          <Image
            source={require('../assets/images/EmptyCart.png')}
            style={{resizeMode: 'contain'}}
          />
        </View>
      )}
      {/* </ScrollView> */}
      {/* Cart Item */}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: 'white',
    marginBottom: responsiveHeight(10),
    height: '100%',
  },
  CartHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: '3%',
    marginHorizontal: '5%',
  },
  hr: {
    width: '88%',
    backgroundColor: 'black',
    height: '.1%',
    elevation: 1,
    alignSelf: 'center',
  },
  textCart: {
    fontSize: responsiveFontSize(4),
    fontFamily: 'Market-Regular',
    color: 'black',
    paddingHorizontal: '10%',
  },
  CartItem_Container: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  Items_image: {
    resizeMode: 'cover',
    height: responsiveHeight(20),
    width: responsiveWidth(35),
    marginHorizontal: responsiveWidth(4),
  },
  Items_Card: {
    flexDirection: 'row',
    // borderWidth:
    elevation: 4,
    borderRadius: 15,
    alignItems: 'center',
  },
  Quantity_View: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Quantity_Plus: {
    fontSize: 20,
    fontFamily: 'Anton-Regular',
    color: 'black',
    bottom: 4,
  },
  Quantity_Minus: {
    fontSize: 20,
    fontFamily: 'Anton-Regular',
    color: 'black',
    bottom: 4,
  },
  Items_Name_Text: {
    fontSize: responsiveFontSize(2.7),
    color: 'black',
    fontFamily: 'Anton-Regular',
  },
  Quantity_Heading_Text: {
    fontSize: responsiveFontSize(2),
    fontFamily: 'roboto-500',
    paddingVertical: 10,
    marginRight: 10,
    color: 'black',
  },
  Quantity: {
    fontSize: responsiveFontSize(2.7),
    marginHorizontal: 10,
    color: 'black',
    fontFamily: 'Monteserrat-Italic-VariableFont_wght',
  },
  CheckOut_Container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF5722',
    borderRadius: 26,
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    marginVertical: responsiveHeight(2),
  },
  CheckOut_Text: {
    color: '#ffff',
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
    fontSize: responsiveFontSize(2.3),
    paddingHorizontal: responsiveWidth(30),
    paddingVertical: responsiveHeight(1),
  },
  InfoView: {
    marginTop: 10,
  },
  QuantityMinus_View: {
    borderRadius: 25,
    elevation: 3,
    backgroundColor: 'orange',
    paddingHorizontal: 12,
  },
  QuantityPlus_View: {
    borderRadius: 25,
    elevation: 3,
    backgroundColor: 'orange',
    paddingHorizontal: 12,
  },
  Price_View: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Price_Heading_Text: {
    fontSize: responsiveFontSize(2),
    fontFamily: 'roboto-500',
    marginRight: 10,
    color: 'black',
  },
  Price: {
    fontSize: responsiveFontSize(3),
    fontFamily: 'Poppins-SemiBold',
    color: 'black',
    marginTop: 8,
  },
  Price_$: {
    color: 'orange',
    fontSize: responsiveFontSize(3.7),
    left: 2,
    fontFamily: 'Poppins-Regular',
    marginTop: 8,
  },
});
