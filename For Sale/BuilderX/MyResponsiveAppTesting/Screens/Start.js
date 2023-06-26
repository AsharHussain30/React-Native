import {
    Image,
    ImageBackground,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React from 'react';
  import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
  } from 'react-native-responsive-dimensions';
  import Button from '../components/Button';
  
  const Start = () => {
    return (
      <View>
        <ImageBackground
          source={require('../assets/images/stock-photo-1001946273.jpg')}
          resizeMode="cover"
          imageStyle={{opacity: 0.72}}
          style={{
            height: responsiveHeight(100),
            width: responsiveWidth(100),
            backgroundColor: 'rgba(0,0,0,1)',
            justifyContent: 'space-between',
          }}>
          {/* <Text style={{fontSize:responsiveFontSize(3),color:"#fff",padding:responsiveWidth(7)}}>Welcome,</Text> */}
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              height: responsiveHeight(10),
            }}>
            <Image
              source={require('../assets/images/download_(1).png')}
              resizeMode="contain"
              style={{
                height: responsiveHeight(7.6),
                width: responsiveWidth(15),
                top: responsiveHeight(2),
              }}
            />
            <Text
              style={{
                fontFamily: 'arya-700',
                color: 'rgba(255,255,255,1)',
                textAlign: 'center',
                left: responsiveWidth(2),
                fontSize: responsiveFontSize(3),
                textAlignVertical: 'center',
                top: responsiveHeight(1.7),
              }}>
              Curry Leaves
            </Text>
          </View>
          <View style={{height: responsiveHeight(40)}}>
            <Text
              style={{
                left: responsiveWidth(8),
                fontFamily: 'balsamiq-sans-700',
                color: 'rgba(255,255,255,1)',
                fontSize: responsiveFontSize(4),
                letterSpacing: 1,
                top: responsiveHeight(3),
                textAlign: 'left',
              }}>
              Enjoy Delicious meal{'\n'}right Now 😋
            </Text>
            <Button
              style={{
                height: responsiveHeight(7.4),
                width: responsiveWidth(85),
                top: responsiveHeight(9),
                borderRadius: 10,
                backgroundColor: 'rgba(255,162,20,1)',
                alignSelf: 'center',
              }}
            />
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  left: responsiveWidth(10),
                  fontFamily: 'amaranth-regular',
                  color: 'rgba(255,255,255,1)',
                  fontSize: responsiveFontSize(2.2),
                  textAlign: 'left',
                  top: responsiveHeight(10.3),
                }}>
                Don&#39;t have an Account?
              </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    fontFamily: 'amaranth-regular',
                    color: 'rgba(255,255,255,1)',
                    fontSize: responsiveFontSize(2.2),
                    top: responsiveHeight(10.3),
                    left: responsiveWidth(11.4),
                  }}>
                  Sign up.
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  };
  
  export default Start;
  
  const styles = StyleSheet.create({});
  