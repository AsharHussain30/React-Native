import React, {useState} from 'react';
import {StyleSheet, Text, View, Image,ImageBackground,Dimensions,ScrollView} from 'react-native';
import {CustomTextInput} from '../CustomTextInput';
import {CustomButtons} from '../CustomButtons';
import {CustomPasswordInput} from '../CustomTextInput';
import {useNavigation} from '@react-navigation/native';
import {Auth} from '../Firebase';
import LinearGradient from 'react-native-linear-gradient';
import AutoScroll from '@homielab/react-native-auto-scroll'

export const SignUp = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [username, setUsername] = useState();
  const {height,width} = Dimensions.get("window");

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
          placeholder="Email"
          value={email}
          setValue={e => setEmail(e)}
        />
        <CustomTextInput
          placeholder="Username"
          value={username}
          setValue={e => setUsername(e)}
        />
        <CustomPasswordInput
          placeholder="Password"
          value={password}
          setValue={e => setPassword(e)}
        />
        <CustomButtons
          text="Sign UP"
          onPress={() => Auth.signUp(username, email, password)}
        />
        <CustomButtons
          text="Forgot Password?"
          type=""
          onPress={() => navigation.navigate('ForgotPassword')}
        />
        <CustomButtons
          text="Already Have an Account?"
          type=""
          onPress={() => navigation.navigate('SignIn')}
        />
      </View>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'cyan',
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    borderBottomLeftRadius: 30,
    borderBottomEndRadius: 30,
    borderBottomColor: 'cyan',
    elevation: 15,
  },
  main: {
    flex: 1,
    backgroundColor: '#baa2e1',
  },
  auth: {
    flex: 1,
    justifyContent: 'center',
  },
});
