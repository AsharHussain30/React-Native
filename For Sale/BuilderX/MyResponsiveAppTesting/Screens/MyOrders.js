import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import {useSelector} from 'react-redux';

const MyOrders = () => {
  const navigation = useNavigation();

  const Data = useSelector(state => state.orders);

  return (
    <View style={{backgroundColor: 'white', height: '100%', width: '100%'}}>
      <View
        style={{
          height: responsiveHeight(8),
          flexDirection: 'row',
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
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}>
          <Text
            style={{
              fontFamily: 'alata-regular',
              color: '#121212',
              fontSize: responsiveFontSize(2.5),
              textAlign: 'center',
            }}>
            My Orders
          </Text>
        </View>
      </View>
      {/* Hr */}
      <View style={styles.hr} />
      {/* Hr */}
      {Data.map(({item, index}) => {
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
          <View
            style={{width: '90%', height: '.5%', backgroundColor: 'gray'}}
          />
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
                {item.RefNum}
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
                {item.PaymetTime.substring(0, 16)}
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
                {item.paymentMethod}
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
                {Math.floor(item.Price)}$
              </Text>
            </View>
          </View>
        </View>;
      })}
    </View>
  );
};

export default MyOrders;

const styles = StyleSheet.create({
  hr: {
    width: '95%',
    backgroundColor: 'gray',
    height: '.1%',
    elevation: 2,
    alignSelf: 'center',
  },
});
