import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {createContext, useContext, useEffect, useState} from 'react';
import {
  CardField,
  CardForm,
  CardFormView,
  confirmPayment,
  createToken,
} from '@stripe/stripe-react-native';
import createPaymentIntent from '../Payment/stripeApi';
import axios from 'axios';
import SelectDropdown from 'react-native-select-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {GlobalContext} from './Payment';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {AddOrders} from './Redux/MyOrdersSlice';

const PaymentCard = props => {
  const [cardInfo, setCardInfo] = useState(null);
  const [completeData, setCompleteData] = useState();

  const fetchCardDetails = cardDetails => {
    if (cardDetails.complete) {
      setCardInfo(cardDetails);
    } else {
      setCardInfo(null);
    }
  };

  let apiData = {
    amount: Math.floor(props.params) * 100,
    currency: 'usd',
  };

  const value = useContext(GlobalContext);

  const dispatch = useDispatch();

  const onDone = async () => {
    AddHandler();
    // axios
    //   .post('http://10.0.2.2:4002/payment-sheet', apiData)
    //   .then(finish => {
    //     console.log('finish', finish);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });

    try {
      const res = await createPaymentIntent(apiData);
      console.log('payment Intent Successfully :', res);

      setCompleteData(res);

      if (res?.data?.paymentIntent) {
        let confirmPaymentIntent = await confirmPayment(
          res?.data?.paymentIntent,
          {paymentMethodType: 'Card'},
        );
        if (confirmPaymentIntent?.error?.message) {
          Alert.alert(confirmPaymentIntent.error.message);
        } else {
          value.setPaymentShow(!value.paymentShow);
        }
      }
    } catch (error) {
      console.log('error raised during payment intent', error);
      Alert.alert('error raised during payment intent', error);
    }

    // if (!!cardInfo) {
    //   try {
    //     const resToken = await createToken({...cardInfo, type: 'Card'});
    //     console.log('resToken', resToken);
    //   } catch (error) {
    //     console.log('error', error);
    //   }
    // }
  };

  const AddHandler = () => {
    dispatch(
      AddOrders({
        Price: props?.params,
        RefNum: completeData?.data?.paymentIntent
          .toString()
          ?.split('_')[1]
          ?.substring(12, 24),
        PaymetTime: completeData?.headers?.date,
        paymentMethod: 'Card',
      }),
    );
  };

  const ImagesArr = [
    {
      imgUrl: '../assets/images/VisaCard.png',
    },
    {
      imgUrl: '../assets/images/VisaCard.png',
    },
    {
      imgUrl: '../assets/images/VisaCard.png',
    },
  ];

  const PaymentSuccess = () => {
    return (
      <View
        style={{
          alignItems: 'center',
          backgroundColor: 'black',
          alignSelf: 'center',
          position: 'absolute',
          zIndex: 6,
          borderRadius: 20,
          paddingVertical: responsiveHeight(10),
          width: '100%',
        }}>
        <Ionicons
          name="ios-checkmark-circle"
          color="lime"
          size={35}
          style={{
            backgroundColor: 'green',
            padding: 4,
            borderRadius: 55,
            opacity: 0.4,
          }}
        />
        <Text
          style={{
            fontSize: 20,
            marginTop: 10,
            marginHorizontal: 20,
            color: 'white',
            fontFamily: 'Poppins-Regular',
          }}>
          {Math.floor(props.params)}$
        </Text>
        <Text
          style={{
            fontSize: 15,
            marginHorizontal: 20,
            margin: 10,
            color: 'white',
            opacity: 0.8,
            fontFamily: 'Poppins-Regular',
          }}>
          Payment Success!
        </Text>
        {/* hr */}
        <View style={{width: '90%', height: '.5%', backgroundColor: 'gray'}} />
        {/* hr */}
        <View style={{marginTop: '10%'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 12,
                marginHorizontal: 20,
                margin: 10,
                color: 'white',
                opacity: 0.8,
                fontFamily: 'Poppins-Regular',
              }}>
              Ref Number:
            </Text>
            <Text
              style={{
                fontSize: 15,
                marginHorizontal: 20,
                margin: 10,
                color: 'white',
                fontFamily: 'Poppins-Regular',
              }}>
              {completeData?.data?.paymentIntent
                .toString()
                ?.split('_')[1]
                ?.substring(12, 24)}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 12,
                marginHorizontal: 20,
                margin: 10,
                color: 'white',
                opacity: 0.8,
                fontFamily: 'Poppins-Regular',
              }}>
              Payment Time:
            </Text>
            <Text
              style={{
                fontSize: 15,
                marginHorizontal: 20,
                margin: 10,
                color: 'white',
                fontFamily: 'Poppins-Regular',
              }}>
              {completeData?.headers?.date?.substring(0, 16)}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: 12,
                marginHorizontal: 20,
                margin: 10,
                color: 'white',
                opacity: 0.8,
                fontFamily: 'Poppins-Regular',
              }}>
              Payment Method:
            </Text>
            <Text
              style={{
                fontSize: 15,
                marginHorizontal: 20,
                margin: 10,
                color: 'white',
                fontFamily: 'Poppins-Regular',
              }}>
              Card
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 12,
                marginHorizontal: 20,
                margin: 10,
                color: 'white',
                opacity: 0.8,
                fontFamily: 'Poppins-Regular',
              }}>
              Amount:
            </Text>
            <Text
              style={{
                fontSize: 15,
                marginHorizontal: 20,
                margin: 10,
                color: 'white',
                fontFamily: 'Poppins-Regular',
              }}>
              {Math.floor(props.params)}$
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      touchSoundDisabled={true}
      activeOpacity={1}
      onPress={() => {
        value.setPaymentShow(false);
      }}>
      <View
        style={{
          width: '80%',
          height: '100%',
          alignSelf: 'center',
          justifyContent: 'center',
        }}>
        {value.paymentShow ? <PaymentSuccess /> : null}
        <Image
          source={require('../assets/images/VisaCard.png')}
          style={{
            resizeMode: 'contain',
            height: 200,
            width: 300,
          }}
        />
        <View style={{marginTop: '10%'}}>
          {/* <SelectDropdown
          defaultButtonText="Currency"
          buttonStyle={{
            borderWidth: 1,
            borderColor: '#FFA500',
            borderRadius: 5,
            backgroundColor: 'white',
            width: '100%',
          }}
          renderCustomizedButtonChild={() => {
            return (
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: 'black', fontFamily: 'Poppins-Regular'}}>
                  {currency ? currency : 'Currency'}
                </Text>
                <AntDesign name="down" size={15} style={{top: 4}} />
              </View>
            );
          }}
          data={currencyArr}
          onSelect={item => setCurrency(item)}
        /> */}
          <CardForm
            onFormComplete={cardDetails => {
              console.log('card details', cardDetails);
              setCardInfo(cardDetails);
            }}
            cardStyle={{
              placeholderColor: 'gray',
              textColor: 'black',
              fontFamily: 'Poppins-Medium',
            }}
            style={{height: 290}}
          />

          {/* <CardField
          cardStyle={{
            borderRadius: 5,
            placeholderColor: 'gray',
            borderColor: '#FFA500',
            borderWidth: 2,
            textColor: 'black',
            fontFamily: 'Poppins-Medium',
          }}
          style={{
            height: 50,
            width: '100%',
            marginVertical: 30,
            marginBottom: 50,
          }}
          postalCodeEnabled={false}
          placeholders={{number: '4242 4242 4242 4242'}}
          onCardChange={cardDetails => fetchCardDetails(cardDetails)}
        /> */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  fontFamily: '',
                  fontSize: responsiveFontSize(2),
                }}>
                Total:
              </Text>
              <Text
                style={{
                  color: 'orange',
                  fontWeight: '700',
                  fontFamily: 'Poppins-Regular',
                  fontSize: responsiveFontSize(2),
                  left: responsiveWidth(2),
                }}>
                {Math.floor(props.params)}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => onDone()}
              disabled={!cardInfo}
              style={{
                backgroundColor: !cardInfo ? 'gray' : '#FFA500',
                paddingHorizontal: 40,
                paddingVertical: 10,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
              }}>
              <Text style={{color: 'white', fontFamily: 'Poppins-Regular'}}>
                Pay Now!
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PaymentCard;

const styles = StyleSheet.create({});
