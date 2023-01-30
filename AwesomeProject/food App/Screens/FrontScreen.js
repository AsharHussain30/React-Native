import React, { Component } from 'react';
import { View, Text,Image } from 'react-native';
import { Title } from 'react-native-paper';

export default FrontScreen = (props) => {
    return (
      <View>
        <Image source={require('../assets/frontsc.jpg')} style={{height:'100%',width:"100%"}}/>
      </View>
    );
  }


