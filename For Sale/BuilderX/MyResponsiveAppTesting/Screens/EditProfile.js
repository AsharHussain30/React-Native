import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {ScrollView} from 'react-native-virtualized-view';

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={{backgroundColor: 'white'}}>
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
            Edit Profile
          </Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', alignSelf: 'center'}}>
        <Image
          source={require('../assets/images/ProfileImage.png')}
          style={{
            height: responsiveWidth(40),
            width: responsiveWidth(40),
            borderRadius: 400,
            resizeMode: 'cover',
          }}
        />
        <View
          style={{
            alignItems: 'center',
            backgroundColor: '#124602',
            justifyContent: 'center',
            height: responsiveWidth(10),
            width: responsiveWidth(10),
            borderRadius: 50,
            position: 'absolute',
            bottom: 0,
            right: 0,
          }}>
          <Feather name="edit-3" color="white" size={25} />
        </View>
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text
          style={{
            fontSize: responsiveFontSize(5),
            color: 'black',
            marginTop: 10,
            fontFamily: 'Poppins-Medium',
          }}>
          Hanry
        </Text>
        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {/* Purchased */}
          <Text
            style={{
              fontSize: responsiveFontSize(2),
              color: 'black',
              alignSelf: 'flex-start',
              fontFamily: 'Poppins-Medium',
            }}>
            Item's Purchased:
          </Text>
          <Text
            style={{
              fontSize: responsiveFontSize(3),
              color: 'black',
              alignSelf: 'flex-start',
              left: 15,
              bottom: 6,
              fontFamily: 'roboto-500',
            }}>
            05
          </Text>
        </View>
      </View>
      <View style={{marginHorizontal: 25, marginTop: 20}}>
        <Text
          style={{
            fontSize: responsiveFontSize(2),
            color: 'gray',
            alignSelf: 'flex-start',
            fontFamily: 'Poppins-Medium',
          }}>
          Email Address
        </Text>
        <TextInput
          placeholder="edwardlarry@email.com"
          placeholderTextColor="black"
          style={{
            fontSize: responsiveFontSize(2.5),
            borderBottomWidth: 1,
            borderBottomColor: 'gray',
          }}
        />
        <Text
          style={{
            fontSize: responsiveFontSize(2),
            color: 'gray',
            alignSelf: 'flex-start',
            fontFamily: 'Poppins-Medium',
            marginTop: 20,
          }}>
          UserName
        </Text>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            placeholder="EdLarry"
            placeholderTextColor="black"
            style={{
              fontSize: responsiveFontSize(2.5),
              borderBottomWidth: 1,
              borderBottomColor: 'green',
              fontFamily: 'Poppins-Medium',
              width: '100%',
            }}
          />
          <Feather
            name="check-circle"
            style={{
              fontSize: responsiveFontSize(2.5),
              color: 'green',
              alignSelf: 'flex-start',
              fontFamily: 'Poppins-Medium',
              marginTop: 10,
              right: 25,
            }}
          />
        </View>
        <Text
          style={{
            fontSize: responsiveFontSize(2),
            color: 'gray',
            alignSelf: 'flex-start',
            fontFamily: 'Poppins-Medium',
            marginTop: 20,
          }}>
          Password
        </Text>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            placeholder="********"
            placeholderTextColor="black"
            style={{
              fontSize: responsiveFontSize(2.5),
              borderBottomWidth: 1,
              borderBottomColor: 'green',
              fontFamily: 'roboto-700',
              width: '100%',
            }}
          />
          <Feather
            name="check-circle"
            style={{
              fontSize: responsiveFontSize(2.5),
              color: 'green',
              alignSelf: 'flex-start',
              fontFamily: 'Poppins-Medium',
              marginTop: 10,
              right: 25,
            }}
          />
        </View>
        <Text
          style={{
            fontSize: responsiveFontSize(2),
            color: 'gray',
            alignSelf: 'flex-start',
            fontFamily: 'Poppins-Medium',
            marginTop: 20,
          }}>
          Date Of Birth
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <TextInput
            placeholder="14"
            placeholderTextColor="black"
            style={{
              fontSize: responsiveFontSize(2.5),
              borderBottomWidth: 1,
              borderBottomColor: 'gray',
              fontFamily: 'roboto-700',
              width: '20%',
              textAlign: 'center',
            }}
          />
          <TextInput
            placeholder="September"
            placeholderTextColor="black"
            style={{
              fontSize: responsiveFontSize(2.5),
              borderBottomWidth: 1,
              borderBottomColor: 'gray',
              fontFamily: 'roboto-700',
              width: '40%',
              marginHorizontal: 20,
              textAlign: 'center',
            }}
          />
          <TextInput
            placeholder="1994"
            placeholderTextColor="black"
            style={{
              fontSize: responsiveFontSize(2.5),
              borderBottomWidth: 1,
              borderBottomColor: 'gray',
              fontFamily: 'roboto-700',
              width: '20%',
              textAlign: 'center',
            }}
          />
        </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 40}}>
          <Text
            style={{
              fontSize: responsiveFontSize(2),
              color: 'gray',
              alignSelf: 'flex-start',
              fontFamily: 'Poppins-Medium',
            }}>
            Joined
          </Text>
          <Text
            style={{
              fontSize: responsiveFontSize(2.2),
              color: 'black',
              alignSelf: 'flex-start',
              fontFamily: 'Poppins-Medium',
              marginLeft: 10,
            }}>
            21 Jan 2021
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
