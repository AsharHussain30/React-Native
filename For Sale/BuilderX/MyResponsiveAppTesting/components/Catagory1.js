import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {FlashList} from '@shopify/flash-list';

const Catagories = [
  {
    image: require('../assets/images/chilli.png'),
    text: 'Spicy',
  },
  {
    image: require('../assets/images/chilli.png'),
    text: 'Spicy',
  },
  {
    image: require('../assets/images/chilli.png'),
    text: 'Spicy',
  },
  {
    image: require('../assets/images/chilli.png'),
    text: 'Spicy',
  },
  {
    image: require('../assets/images/chilli.png'),
    text: 'Spicy',
  },
];

function Catagory1(props) {
  return (
    <>
      {/* <Icon name="chili-mild" style={styles.icon}></Icon> */}
      <FlashList
        data={Catagories}
        numColumns={1}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        estimatedItemSize={200}
        renderItem={({item, index}) => {
          return (
            <View style={[styles.container, props.style]}>
              <Image
                source={item.image}
                style={{
                  resizeMode: 'contain',
                  height: responsiveHeight(6),
                  width: responsiveWidth(8),
                }}
              />
              <Text
                style={{
                  fontFamily: 'andika-regular',
                  color: 'rgba(255,255,255,1)',
                  fontSize: responsiveFontSize(2.5),
                  marginLeft: responsiveWidth(2),
                  textAlignVertical: 'center',
                  textAlign: 'center',
                }}>
                {item.text}
              </Text>
            </View>
          );
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255,162,20,1)',
    borderRadius: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: 'rgba(192,32,32,1)',
    fontSize: 30,
    transform: [
      {
        rotate: '-25.00deg',
      },
    ],
  },
});

export default Catagory1;
