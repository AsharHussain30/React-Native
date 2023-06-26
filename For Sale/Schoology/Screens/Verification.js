import {
  View,
  Text,
  Dimensions,
  TextInput,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {StackActions, useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const Verification = () => {
  const navigation = useNavigation();
  const [VerifyInput1, setVerifyInput1] = useState('');
  const [VerifyInput2, setVerifyInput2] = useState('');
  const [VerifyInput3, setVerifyInput3] = useState('');
  const [VerifyInput4, setVerifyInput4] = useState('');

  const InputRef1 = useRef();
  const InputRef2 = useRef();
  const InputRef3 = useRef();
  const InputRef4 = useRef();

  const {width, height} = Dimensions.get('window');

  return (
    <LinearGradient
      colors={['#1A73E8', '#fff']}
      style={{
        flex: 1,
      }}>
      {/* Header */}

      <View
        style={{
          flexDirection: 'row',
          top: 60,
          alignItems: 'center',
          marginHorizontal: 20,
          zIndex:5
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons
            name="keyboard-backspace"
            size={24}
            color="white"
          />
        </TouchableOpacity>
        <View style={{alignItems: 'center', flex: 1}}>
          <Text
            style={{
              fontSize: heightPercentageToDP('2.1%'),
              padding: 10,
              color: 'white',
              textAlign: 'center',
              textAlignVertical: 'center',
              fontFamily:"Acme-Regular"
            }}>
            VERIFICATION
          </Text>
        </View>
      </View>

      {/* Header */}

      {/* Verification */}
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text
          style={{
            fontSize: heightPercentageToDP('2.6%'),
            padding: 10,
            bottom: 50,
            color: 'white',
            textAlign: 'center',
            textAlignVertical: 'center',
            fontFamily:"UbuntuCondensed-Regular"
          }}>
          We send you a code to verify your mobile number
        </Text>
        <Text
          style={{
            fontSize: heightPercentageToDP('2.1%'),
            padding: 10,
            color: 'white',
            textAlign: 'center',
            textAlignVertical: 'center',
            fontFamily:"Acme-Regular"
          }}>
          Enter Your OTP Code Here
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 20,
            marginVertical: 10,
            height: heightPercentageToDP('8'),
            justifyContent: 'space-evenly',
          }}>
          <LinearGradient
            colors={['#1A73E8', '#4285F4']}
            start={{x: 0.5, y: 1}}
            end={{x: 1, y: 0.1}}
            locations={[0, 0.5, 0.6]}
            style={{
              alignItems: 'center',
              borderRadius: 5,
            }}>
            <TextInput
              keyboardType="number-pad"
              textAlign="center"
              textAlignVertical="center"
              maxLength={1}
              ref={InputRef1}
              value={String(VerifyInput1)}
              onChangeText={e => {
                setVerifyInput1(e);
                if (e != '') {
                  InputRef2.current.focus();
                }
              }}
              style={{
                borderBottomColor: 'white',
                borderBottomWidth: 2,
                color: 'white',
                marginHorizontal: 15,
                fontSize: 35,
                bottom: 3,
                paddingVertical: 5,
                paddingHorizontal: 15,
              }}
            />
          </LinearGradient>
          <LinearGradient
            colors={['#1A73E8', '#4285F4']}
            start={{x: 0.5, y: 1}}
            end={{x: 1, y: 0.1}}
            locations={[0, 0.5, 0.6]}
            style={{
              alignItems: 'center',
              borderRadius: 5,
            }}>
            <TextInput
              keyboardType="number-pad"
              maxLength={1}
              textAlign="center"
              ref={InputRef2}
              value={String(VerifyInput2)}
              onChangeText={e => {
                setVerifyInput2(e);
                if (e != '') {
                  InputRef3.current.focus();
                } else if (e.length <= 0) {
                  InputRef1.current.focus();
                }
              }}
              style={{
                borderBottomColor: 'white',
                borderBottomWidth: 2,
                color: 'white',
                marginHorizontal: 15,
                fontSize: 35,
                bottom: 3,
                paddingVertical: 5,
                paddingHorizontal: 15,
              }}
            />
          </LinearGradient>
          <LinearGradient
            colors={['#1A73E8', '#4285F4']}
            start={{x: 0.5, y: 1}}
            end={{x: 1, y: 0.1}}
            locations={[0, 0.5, 0.6]}
            style={{
              alignItems: 'center',
              borderRadius: 5,
            }}>
            <TextInput
              keyboardType="number-pad"
              maxLength={1}
              textAlign="center"
              ref={InputRef3}
              value={String(VerifyInput3)}
              onChangeText={e => {
                setVerifyInput3(e);
                if (e != '') {
                  InputRef4.current.focus();
                } else if (e.length <= 0) {
                  InputRef2.current.focus();
                }
              }}
              style={{
                borderBottomColor: 'white',
                borderBottomWidth: 2,
                color: 'white',
                marginHorizontal: 15,
                fontSize: 35,
                bottom: 3,
                paddingVertical: 5,
                paddingHorizontal: 15,
              }}
            />
          </LinearGradient>
          <LinearGradient
            colors={['#1A73E8', '#4285F4']}
            start={{x: 0.5, y: 1}}
            end={{x: 1, y: 0.1}}
            locations={[0, 0.5, 0.6]}
            style={{
              alignItems: 'center',
              borderRadius: 5,
            }}>
            <TextInput
              ref={InputRef4}
              keyboardType="number-pad"
              maxLength={1}
              textAlign="center"
              value={String(VerifyInput4)}
              onChangeText={e => {
                setVerifyInput4(e);
                if (e.length <= 0) {
                  InputRef3.current.focus();
                }
              }}
              style={{
                borderBottomColor: 'white',
                borderBottomWidth: 2,
                color: 'white',
                marginHorizontal: 15,
                fontSize: 35,
                bottom: 3,
                paddingVertical: 5,
                paddingHorizontal: 15,
              }}
            />
          </LinearGradient>
        </View>
        <TouchableOpacity
        onPress={() => {navigation.dispatch(StackActions.replace("Home"))}}
          style={{
            flexDirection: 'row',
            backgroundColor: '#FFA700',
            paddingHorizontal: 20,
            marginHorizontal: 20,
            padding: 20,
            borderRadius: 10,
            justifyContent:"space-between",
            alignItems:"center"
          }}>
          <Text
            style={{
              color: '#454545',
              fontSize: heightPercentageToDP('2.3'),
              fontFamily:"Acme-Regular"
            }}>
            SUBMIT
          </Text>
          <MaterialCommunityIcons name="arrow-right" color="#454545" size={23}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text
            style={{
              color: '#454545',
              fontSize: heightPercentageToDP('1.9'),
              textAlign:"center",
              paddingVertical:10,
            }}>
            I didn't receive a code!
          </Text>
          </TouchableOpacity>
          <TouchableOpacity>
          <Text
            style={{
              color: '#FF8C00',  
              fontSize: heightPercentageToDP('2.3'),
              textAlign:"center",
              paddingVertical:5,
              fontWeight:"bold",
              fontFamily:"Acme-Regular"
            }}>
            Resend Code
          </Text>
          </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default Verification;
