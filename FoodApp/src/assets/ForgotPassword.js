import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Image,
  Alert,
} from 'react-native';
import {CustomTextInput} from './CustomTextInput';
import {CustomButtons} from './CustomButtons';
import {Auth} from './Firebase';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import AutoScroll from '@homielab/react-native-auto-scroll';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';


export const ForgotPassword = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState();
  const {height, width} = Dimensions.get('window');

  return (
    <LinearGradient colors={['purple', 'black']} style={styles.main}>
      <AutoScroll
        duration={10000}
        style={{
          position: 'absolute',
          justifyContent: 'center',
          height: height,
          width: width,
        }}
        isLTR={true}
        endPaddingWidth={0}>
        <ScrollView horizontal pagingEnabled>
          <ImageBackground
            source={require('../../assets/backgroundAnimation/bg.png')}
            style={{
              width: height,
              height: '100%',
              resizeMode: 'contain',
              aspectRatio: 1,
              opacity: 0.4,
            }}
          />
          <ImageBackground
            source={require('../../assets/backgroundAnimation/bg1.jpg')}
            style={{
              width: height,
              height: '100%',
              resizeMode: 'contain',
              opacity: 0.4,
            }}
          />
          <ImageBackground
            source={require('../../assets/backgroundAnimation/bg2.jpeg')}
            style={{
              width: height,
              height: '100%',
              resizeMode: 'contain',
              opacity: 0.4,
            }}
          />
        </ScrollView>
      </AutoScroll>
     <TouchableOpacity onPress={() => navigation.goBack('')} style={{padding: 25,alignSelf:"flex-start",}}>
        <MaterialCommunityIcons
          name="keyboard-backspace"
          size={wp('7%')}
          color="white"
          style={{justifyContent: 'flex-start'}}
        />
      </TouchableOpacity>
      <View
        style={{
          justifyContent: 'center',
          flex: 1,
          position: 'absolute',
          height: height,
          width: width,
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: wp("5"),
            color: 'white',
            paddingVertical: hp("2"),
          }}>
          Reset Your Password!
        </Text>
        <CustomTextInput
          placeholder="Email"
          value={email}
          setValue={e => setEmail(e)}
        />
        <CustomButtons
          text="Submit"
          onPress={() => {
            Auth.forgetPassword(email),
              Alert.alert(
                'Email:',
                'Your Forgot Password Request Has Been Send SuccessFully Check Your Email Spam Folder..',
              );
          }}
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    opacity: 1,
  },
});
