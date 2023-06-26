import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  ImageBackground,
  Dimensions,
  FlatList,
} from 'react-native';
import {CustomTextInput} from '../CustomTextInput';
import {CustomButtons} from '../CustomButtons';
import {CustomPasswordInput} from '../CustomTextInput';
import {useNavigation} from '@react-navigation/native';
import {Auth} from '../Firebase/';
import {MotiView} from 'moti';
import AutoScroll from '@homielab/react-native-auto-scroll'
import LinearGradient from 'react-native-linear-gradient';

export const SignIn = () => {
  const naviagtion = useNavigation();
  const {height,width} = Dimensions.get("window");
  const images = [
    {
      image: <Image source={require('../../../assets/backgroundAnimation/bg.png')}
      style={{
          flex: 1,
          resizeMode:"cover",
          height:height,
          width:width,
          opacity: 0.4,
        }} />,
    },
    {
      image: <Image source={require('../../../assets/backgroundAnimation/bg1.jpg')}
      style={{
        flex: 1,
        resizeMode:"cover",
        height:height,
        width:width,
        opacity: 0.4,
        }} />,
    },
    {
      image: <Image source={require('../../../assets/backgroundAnimation/bg2.jpeg')}
      style={{
        flex: 1,
        resizeMode:"cover",
        height:height,
        width:width,
        opacity: 0.4,
        }} />,
    },
  ];

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [username, setUsername] = useState();



  return (
      <LinearGradient colors={["purple","black"]}  style={styles.main}>
            <AutoScroll duration={10000}  style={{position:"absolute",justifyContent:"center",height:height,width:width}} isLTR={true} endPaddingWidth={0}>
          <ScrollView horizontal pagingEnabled> 
          <ImageBackground source={require('../../../assets/backgroundAnimation/bg.png')}
      style={{
        width: height,
        height: "100%",
        resizeMode:"contain",
        aspectRatio:1,
        opacity: 0.4,
        }} />
         <ImageBackground source={require('../../../assets/backgroundAnimation/bg1.jpg')} 
      style={{
        width: height,
        height: "100%",
        resizeMode:"contain",
        opacity: 0.4,
        }} />
        <ImageBackground source={require('../../../assets/backgroundAnimation/bg2.jpeg')}
        style={{
          width: height,
          height: "100%",
          resizeMode:"contain",
          opacity: 0.4,
          }} /> 
        
          </ScrollView>
        </AutoScroll>
      <View style={styles.auth}>
        <CustomTextInput
          placeholder="Username"
          value={email}
          setValue={e => setEmail(e)}
        />
        <CustomPasswordInput
          placeholder="Password"
          value={password}
          setValue={e => setPassword(e)}
        />
        <CustomButtons
          text="Sign In"
          onPress={() => Auth.signIn(email, password)}
        />
        <CustomButtons
          text="Forgot Password?"
          type=""
          onPress={() => naviagtion.navigate('ForgotPassword')}
        />
        <CustomButtons
          text="Don't Have an Account? Create one"
          type=""
          onPress={() => naviagtion.navigate('SignUp')}
        />
      </View>
      </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    borderBottomLeftRadius: 30,
    borderBottomEndRadius: 30,
    borderBottomColor: 'cyan',
    shadowColor: 'black',
    shadowRadius: 23,
    shadowOffset: {height: 1, width: 3},
  },
  Logo: {
    height: 100,
    width: 100,
    aspectRatio: 2,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#411d8c',
    borderRadius: 100,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    opacity: 1,
  },
  auth: {
    flex: 0,
    marginTop: 40,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    paddingVertical: 30,
    paddingTop: 60,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
});
