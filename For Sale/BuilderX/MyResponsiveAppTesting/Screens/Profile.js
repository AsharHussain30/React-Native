import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {ScrollView} from 'react-native-virtualized-view';

const Profile = ({route}) => {
  console.log(route);
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View
        style={{
          height: responsiveHeight(10),
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: responsiveWidth(3),
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Feather
            name="chevron-left"
            style={{
              color: 'rgba(0,0,0,1)',
              fontSize: responsiveFontSize(3),
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}>
          <Text
            style={{
              fontFamily: 'alata-regular',
              color: '#121212',
              fontSize: responsiveFontSize(2.5),
              textAlign: 'center',
            }}>
            My Profile
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 45,
          borderColor: 'purple',
          borderWidth: 1,
          borderRadius: 205,
          marginTop: 30,
        }}>
        <Image
          source={require('../assets/images/ProfileImage.png')}
          style={{
            height: responsiveWidth(30),
            width: responsiveWidth(30),
            borderRadius: 100,
          }}
        />
        <Text
          style={{
            fontSize: responsiveFontSize(4.5),
            color: 'black',
            marginTop: 10,
            fontFamily: 'Poppins-Medium',
            left: 20,
            textAlignVertical: 'center',
          }}>
          Hanry
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
          <Feather
            name="edit-3"
            size={24}
            color="black"
            style={{marginTop: 50, marginLeft: 40}}
          />
        </TouchableOpacity>
      </View>
      <View style={{marginHorizontal: 26, marginTop: 40}}>
        <Text
          style={{
            fontSize: responsiveFontSize(2),
            color: 'gray',
            marginTop: 10,
            fontFamily: 'Poppins-Medium',
            textAlignVertical: 'center',
          }}>
          DashBoard
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('MyOrders');
          }}>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 20,
              alignItems: 'center',
              justifyContent: 'space-between',
              marginVertical: 20,
            }}>
            <Entypo
              name="wallet"
              size={34}
              color="white"
              style={{
                padding: 20,
                backgroundColor: '#5bbf7f',
                borderRadius: 56,
              }}
            />
            <Text
              style={{
                fontSize: responsiveFontSize(2.5),
                color: 'black',
                marginTop: 5,
                marginRight: 80,
                fontFamily: 'Poppins-Medium',
                textAlignVertical: 'center',
              }}>
              My Orders
            </Text>
            <Entypo name="chevron-small-right" size={34} color="gray" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Favourite');
          }}>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 20,
              alignItems: 'center',
              justifyContent: 'space-between',
              marginVertical: 20,
            }}>
            <Entypo
              name="heart"
              size={34}
              color="white"
              style={{
                padding: 20,
                backgroundColor: '#FF69B4',
                borderRadius: 56,
              }}
            />
            <Text
              style={{
                fontSize: responsiveFontSize(2.5),
                color: 'black',
                marginRight: 60,
                marginTop: 5,
                fontFamily: 'Poppins-Medium',
                textAlignVertical: 'center',
              }}>
              Favourites
            </Text>
            <Entypo name="chevron-small-right" size={34} color="gray" />
          </View>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: 20,
            alignItems: 'center',
            justifyContent: 'space-between',
            marginVertical: 20,
          }}>
          <MaterialCommunityIcons
            name="shield-account"
            size={34}
            color="white"
            style={{padding: 20, backgroundColor: '#d7d8dd', borderRadius: 56}}
          />
          <Text
            style={{
              fontSize: responsiveFontSize(2.5),
              color: 'black',
              marginRight: 80,
              marginTop: 5,
              fontFamily: 'Poppins-Medium',
              textAlignVertical: 'center',
            }}>
            Privacy
          </Text>
          <Entypo name="chevron-small-right" size={34} color="gray" />
        </View>
        <View style={{marginBottom: 20}}>
          <Text
            style={{
              fontSize: responsiveFontSize(2),
              color: 'gray',
              marginTop: 20,
              fontFamily: 'Poppins-Medium',
              textAlignVertical: 'center',
            }}>
            My Account
          </Text>
          <View style={{flexDirection: 'row', marginTop: 20}}>
            <Ionicons
              name="log-out-outline"
              size={34}
              color="white"
              style={{padding: 10, borderRadius: 55, backgroundColor: 'gray'}}
            />
            <Text
              style={{
                fontSize: responsiveFontSize(2.3),
                color: 'red',
                marginLeft: 10,
                marginTop: 5,
                fontFamily: 'Poppins-Medium',
                textAlignVertical: 'center',
              }}>
              Log Out
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
