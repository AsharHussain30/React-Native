import React,{useState} from 'react';
import { View, Text, TextInput,StyleSheet,TouchableOpacity } from 'react-native';


const LoginScreen = () => {
    return (
        <View style={styles.textstyle}>
         
        <TextInput 
        style={styles.textinput}
        placeholder="Username"
        placeholderTextColor="orange"
        
        />
        <TextInput 
        style={styles.textinput}
        placeholder="Password"
        placeholderTextColor="orange"
        />
        <TouchableOpacity><Text style={styles.btn1}>LOGIN</Text></TouchableOpacity>
        
      </View>
       
 );
}
      

const styles = StyleSheet.create({
  textinput:{
    backgroundColor:'white',
    shadowColor:'blue',
        shadowOffset:{height:5,width:5,},
        shadowOpacity:0.9,
        shadowRadius:12,
        elevation:5,
        borderRadius:12,
        padding:10,
        margin:5,
        textAlign:'center'
  },
  textstyle:{
    paddingTop:100,
    padding:50,
    opacity:1
    // padding:50,
    // paddingTop:100,
  },
  btn1:{
    alignItems:'center',
    backgroundColor:"orange",
    borderRadius:10,
    margin:10,
    color:'white',
    textAlign:'center',
    fontWeight:'bold',
    padding:10,
    margin:15,
  },
});

export default LoginScreen;
