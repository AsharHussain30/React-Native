import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useSelector} from 'react-redux';

const CheckOut = () => {
  const navigation = useNavigation();

  const CartData = useSelector(state => state.cart);

  const TotalPrice = () => {
    let total = 0;
    CartData.map(item => {
      total = total + item.price * item.quantity;
    });
    return total;
  };

  //   useEffect(() => {
  //     CartData.filter(item => setTotalPrice(item, '234'));
  //   }, []);

  return (
    <View style={{height: responsiveHeight(100), width: responsiveWidth(100)}}>
      {/* Payment Header */}
      <View style={styles.Header}>
        <TouchableOpacity
          onPress={() => {
            navigation.replace('Home');
          }}>
          <Feather name="arrow-left" color="black" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerText}>CheckOut</Text>
      </View>
      {/* Payment Header */}

      {/* Address Details */}
      <View style={{}}>
        <Text
          style={{
            fontSize: responsiveFontSize(2),
            marginLeft: responsiveWidth(5),
            color: 'black',
            fontFamily: 'Poppins-Regular',
          }}>
          Address Details:
        </Text>
        <View
          style={{
            borderColor: 'orange',
            borderWidth: 2,
            marginHorizontal: responsiveWidth(2),
            marginTop: responsiveHeight(2),
            borderRadius: 15,
            paddingHorizontal: responsiveHeight(2),
            paddingVertical: responsiveHeight(1),
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontSize: responsiveFontSize(3),
              marginLeft: responsiveWidth(2),
              color: '#008000',
              fontFamily: 'Poppins-Medium',
            }}>
            House No: # L-632,north karachi,Karachi
          </Text>
          <Feather
            name="edit"
            color="black"
            size={34}
            style={{position: 'absolute', bottom: -10, right: 10}}
          />
        </View>
        <Text
          style={{
            fontSize: responsiveFontSize(2),
            marginLeft: responsiveWidth(5),
            marginTop: responsiveHeight(2),
            color: 'black',
            fontFamily: 'Poppins-Regular',
          }}>
          Your FoodList:
        </Text>
        <View
          style={{
            borderColor: 'orange',
            borderWidth: 2,
            marginHorizontal: responsiveWidth(2),
            marginTop: responsiveHeight(2),
            borderRadius: 15,
            paddingHorizontal: responsiveHeight(2),
            paddingVertical: responsiveHeight(1),
          }}>
          {CartData.map((item, index) => {
            return (
              <View
                key={index}
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text
                  style={{
                    fontSize: responsiveFontSize(2.2),
                    marginLeft: responsiveWidth(2),
                    color: '#008000',
                    fontFamily: 'Poppins-Medium',
                  }}>
                  {item.selectedName}
                </Text>
                <Text
                  style={{
                    fontSize: responsiveFontSize(2),
                    marginLeft: responsiveWidth(3),
                    color: '#000',
                    fontFamily: 'Poppins-Medium',
                  }}>
                  Qty:
                </Text>
                <Text
                  style={{
                    fontSize: responsiveFontSize(2.2),
                    marginLeft: responsiveWidth(2),
                    color: '#008000',
                    fontFamily: 'Poppins-Medium',
                  }}>
                  {item.quantity}
                </Text>
                <Text
                  style={{
                    fontSize: responsiveFontSize(2),
                    marginLeft: responsiveWidth(3),
                    color: '#000',
                    fontFamily: 'Poppins-Medium',
                  }}>
                  Price:
                </Text>
                <Text
                  style={{
                    fontSize: responsiveFontSize(2.2),
                    marginLeft: responsiveWidth(2),
                    color: '#008000',
                    fontFamily: 'Poppins-Medium',
                  }}>
                  {item.price * item.quantity}
                </Text>
              </View>
            );
          })}
        </View>
      </View>
      {/* Address Details */}
      <View
        style={{
          borderColor: 'orange',
          borderWidth: 2,
          marginHorizontal: responsiveWidth(2),
          marginTop: responsiveHeight(3),
          borderRadius: 15,
          paddingHorizontal: responsiveHeight(2),
          paddingVertical: responsiveHeight(1),
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: responsiveHeight(1),
          }}>
          <Text
            style={{
              fontSize: responsiveFontSize(2),
              marginLeft: responsiveWidth(3),
              color: '#000',
              fontFamily: 'Poppins-Regular',
            }}>
            SubTotal:
          </Text>
          <Text
            style={{
              fontSize: responsiveFontSize(2.2),
              color: '#008000',
              fontFamily: 'Poppins-Medium',
            }}>
            {TotalPrice() + '$'}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: responsiveHeight(1),
          }}>
          <Text
            style={{
              fontSize: responsiveFontSize(2),
              marginLeft: responsiveWidth(3),
              color: '#000',
              fontFamily: 'Poppins-Regular',
            }}>
            Shipping Cost:
          </Text>
          <Text
            style={{
              fontSize: responsiveFontSize(2.2),
              color: '#008000',
              fontFamily: 'Poppins-Medium',
            }}>
            {TotalPrice() * '.5' + '$'}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: responsiveHeight(1),
          }}>
          <Text
            style={{
              fontSize: responsiveFontSize(2),
              marginLeft: responsiveWidth(3),
              color: '#000',
              fontFamily: 'Poppins-Regular',
            }}>
            Taxes:
          </Text>
          <Text
            style={{
              fontSize: responsiveFontSize(2.2),
              color: '#008000',
              fontFamily: 'Poppins-Medium',
            }}>
            {Math.floor(TotalPrice() * '.2') + '$'}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: responsiveHeight(1),
          }}>
          <Text
            style={{
              fontSize: responsiveFontSize(2),
              marginLeft: responsiveWidth(3),
              color: '#000',
              fontFamily: 'Poppins-Regular',
            }}>
            Total:
          </Text>
          <Text
            style={{
              fontSize: responsiveFontSize(2.2),
              color: '#008000',
              fontFamily: 'Poppins-Medium',
            }}>
            {Math.floor(
              TotalPrice() + TotalPrice() * '.5' + TotalPrice() * '.2',
            ) + '$'}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          if (TotalPrice() + TotalPrice() * '.5' + TotalPrice() * '.2' > 50) {
            navigation.navigate('Payment', {
              params: TotalPrice() + TotalPrice() * '.5' + TotalPrice() * '.2',
            });
          } else {
            Alert.alert('Please purchase More than 50$');
          }
        }}>
        <View
          style={{
            backgroundColor:
              TotalPrice() + TotalPrice() * '.5' + TotalPrice() * '.2' < 50
                ? 'gray'
                : 'orange',
            marginTop: responsiveHeight(5),
            borderRadius: 15,
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: responsiveWidth(5),
            paddingVertical: responsiveHeight(2),
            marginHorizontal: responsiveWidth(5),
          }}>
          <Text
            style={{
              fontSize: responsiveFontSize(2.2),
              color: '#fff',
              fontFamily: 'Poppins-Medium',
            }}>
            Pay Now!
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CheckOut;

const styles = StyleSheet.create({
  Header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: '12%',
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
