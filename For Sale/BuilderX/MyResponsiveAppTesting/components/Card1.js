import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

function Card1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Image
        source={require('../assets/images/65726a0b-cde2-4c25-a1e4-b2df85142283-removebg-preview.png')}
        resizeMode="contain"
        style={styles.image}/>
      <Text style={styles.ItemsName}>Shrimp fried rice</Text>
      <Text style={styles.Itemsdetail}>
        Fried rice with shirmps{'\n'}and spicy souce
      </Text>
      <View style={styles.textContainer}>
        <Text style={styles.$}>$</Text>
        <Text style={styles.text}>5.30</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    elevation:10,
    borderRadius:25,
    backgroundColor:"white",
    height: responsiveHeight(35),
    width: responsiveWidth(40),
    alignItems:"center",
  },
  ItemsName: {
    fontFamily: 'albert-sans-700',
    color: '#121212',
    fontSize: responsiveFontSize(2),
  },
  Itemsdetail: {
    fontFamily: 'akshar-regular',
    color: '#121212',
    textAlign: 'center',
    alignSelf:"center",
    marginTop: responsiveHeight(1),
  },
  $: {
    fontFamily: 'roboto-700',
    color: 'rgba(235,174,9,1)',
    fontSize: responsiveFontSize(3.5),
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  text: {
    fontFamily: 'aladin-regular',
    color: '#121212',
    fontSize: responsiveFontSize(2.5),
    textAlign: 'center',
    textAlignVertical:"center",
    marginTop:responsiveHeight(1),
    marginLeft:responsiveHeight(1)
  },
  textContainer: {
    height: responsiveHeight(4),
    flexDirection: 'row',
    marginTop:responsiveHeight(1.5)
  },
  image: {
    width: responsiveWidth(35),
    height: responsiveHeight(20),
  },
});

export default Card1;
