import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useDispatch, useSelector} from 'react-redux';
import Feather from 'react-native-vector-icons/Feather';
import {add, fav} from './Redux/CartSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Favourite = () => {
  const navigation = useNavigation();

  const favoriteItems = useSelector(state => state.cart.fav);

  return (
    <View style={styles.Container}>
      {/* Cart Header */}
      <View style={styles.CartHeader}>
        <TouchableOpacity
          onPress={() => {
            // navigation.replace('Home');
            // favClick();
          }}>
          <Feather name="arrow-left" color="black" size={24} />
        </TouchableOpacity>
        <Text style={styles.textCart}>My Favorite</Text>
      </View>
      {/* Cart Header */}
      {/* Hr */}
      <View style={styles.hr} />
      {/* Hr */}
      {/* Cart Item */}
      {/* <ScrollView nestedScrollEnabled={true}> */}
      <FlatList
        nestedScrollEnabled={true}
        data={favoriteItems}
        contentContainerStyle={{paddingBottom: 150}}
        renderItem={({item, index}) => {
          // console.log(item);
          return (
            <View style={styles.CartItem_Container}>
              <View style={styles.Items_Card}>
                <Image source={item.selectedImg} style={styles.Items_image} />
                <View style={styles.InfoView}>
                  <Text style={styles.Items_Name_Text}>
                    {item.selectedName}
                  </Text>
                  <View style={styles.Price_View}>
                    <Text style={styles.Price_Heading_Text}>Price:</Text>
                    <Text style={styles.Price}>{item.price}</Text>
                    <Text style={styles.Price_$}>$</Text>
                  </View>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Favourite;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: 'white',
    marginBottom: responsiveHeight(10),
    height: '100%',
  },
  CartHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: '3%',
    marginHorizontal: '5%',
  },
  hr: {
    width: '88%',
    backgroundColor: 'black',
    height: '.1%',
    elevation: 1,
    alignSelf: 'center',
  },
  textCart: {
    fontSize: responsiveFontSize(3),
    fontFamily: 'Market-Regular',
    color: 'black',
    paddingHorizontal: '10%',
    marginVertical: 10,
  },
  CartItem_Container: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  Items_image: {
    resizeMode: 'contain',
    height: responsiveHeight(20),
    width: responsiveWidth(35),
    marginHorizontal: responsiveWidth(4),
  },
  Items_Card: {
    flexDirection: 'row',
    // borderWidth:
    elevation: 4,
    borderRadius: 15,
    alignItems: 'center',
  },
  Quantity_View: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Quantity_Plus: {
    fontSize: 20,
    fontFamily: 'Anton-Regular',
    color: 'black',
    bottom: 4,
  },
  Quantity_Minus: {
    fontSize: 20,
    fontFamily: 'Anton-Regular',
    color: 'black',
    bottom: 4,
  },
  Items_Name_Text: {
    fontSize: responsiveFontSize(2.7),
    color: 'black',
    fontFamily: 'Anton-Regular',
  },
  Quantity_Heading_Text: {
    fontSize: responsiveFontSize(2),
    fontFamily: 'roboto-500',
    paddingVertical: 10,
    marginRight: 10,
    color: 'black',
  },
  Quantity: {
    fontSize: responsiveFontSize(2.7),
    marginHorizontal: 10,
    color: 'black',
    fontFamily: 'Monteserrat-Italic-VariableFont_wght',
  },
  CheckOut_Container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF5722',
    // marginHorizontal: '5%',
    marginVertical: '5%',
    borderRadius: 26,
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    width: '85%',
    height: '5.5%',
  },
  CheckOut_Text: {
    color: '#ffff',
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
    fontSize: responsiveFontSize(2.3),
  },
  InfoView: {
    marginTop: 10,
  },
  QuantityMinus_View: {
    borderRadius: 25,
    elevation: 3,
    backgroundColor: 'orange',
    paddingHorizontal: 12,
  },
  QuantityPlus_View: {
    borderRadius: 25,
    elevation: 3,
    backgroundColor: 'orange',
    paddingHorizontal: 12,
  },
  Price_View: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Price_Heading_Text: {
    fontSize: responsiveFontSize(2),
    fontFamily: 'roboto-500',
    marginRight: 10,
    color: 'black',
  },
  Price: {
    fontSize: responsiveFontSize(3),
    fontFamily: 'Poppins-SemiBold',
    color: 'black',
    marginTop: 8,
  },
  Price_$: {
    color: 'orange',
    fontSize: responsiveFontSize(3.7),
    left: 2,
    fontFamily: 'Poppins-Regular',
    marginTop: 8,
  },
});
