import {StyleSheet, Text, View} from 'react-native';
import React, {createContext, useContext, useState} from 'react';
import {CardField, StripeProvider} from '@stripe/stripe-react-native';
import PaymentCard from './PaymentCard';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

export const GlobalContext = createContext();

const Payment = ({route}) => {
  const [paymentShow, setPaymentShow] = useState();
  const navigation = useNavigation();

  return (
    <GlobalContext.Provider value={{setPaymentShow, paymentShow}}>
      <TouchableOpacity
        activeOpacity={1}
        touchSoundDisabled={true}
        disabled={!paymentShow}
        onPress={() => {
          setPaymentShow(false);
        }}>
        <StripeProvider publishableKey="pk_test_51NGyhLJZiOz1mmzVd1BO9vnpXSaUwfDcxJsStcbCxcGeUoPAGmcPfktojvMaH8wBajFnSkb3Mp145CrsS73P0i1q002kJ0NviF">
          <View
            style={{justifyContent: 'center', height: '100%', width: '100%'}}>
            {/* Payment Header */}
            <View style={styles.Header}>
              <TouchableOpacity
                onPress={() => {
                  navigation.replace('Home');
                }}>
                <Feather name="arrow-left" color="black" size={24} />
              </TouchableOpacity>
              <Text style={styles.headerText}>Payment</Text>
            </View>
            {/* Payment Header */}
            <View
              style={{
                height: '80%',
                width: '90%',
                alignSelf: 'center',
                borderRadius: 25,
                borderWidth: 2,
                borderColor: 'orange',
                backgroundColor: 'white',
              }}>
              <PaymentCard params={route.params.params} />
            </View>
          </View>
        </StripeProvider>
      </TouchableOpacity>
    </GlobalContext.Provider>
  );
};

export default Payment;

const styles = StyleSheet.create({
  Header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: '3%',
    marginHorizontal: '5%',
    bottom: 20,
  },
  hr: {
    width: '88%',
    backgroundColor: 'black',
    height: '.1%',
    elevation: 1,
    alignSelf: 'center',
  },
  headerText: {
    fontSize: responsiveFontSize(4),
    fontFamily: 'Market-Regular',
    color: 'black',
    paddingHorizontal: '10%',
  },
});
