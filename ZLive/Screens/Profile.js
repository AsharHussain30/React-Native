import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Profile = () => {
  let userExist = auth()?.currentUser?.email;

  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <View style={{flex: 1, marginHorizontal: 20, marginTop: '20%'}}>
        <View
          style={{
            flex: 0.2,
            backgroundColor: 'white',
            borderRadius: 10,
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          {userExist ? (
            <Image
              source={require('../assets/userProfile.png')}
              style={{
                height: 90,
                width: 90,
                marginLeft: 20,
                backgroundColor: 'black',
                borderRadius: 200,
              }}
            />
          ) : (
            <View
              style={{
                height: 90,
                width: 90,
                marginLeft: 20,
                backgroundColor: 'black',
                borderRadius: 200,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <FontAwesome name="user" color="white" size={40} />
            </View>
          )}
          <View
            style={{
              height: 80,
              marginLeft: 20,
              width: 200,
              justifyContent: 'center',
            }}>
            {userExist == null ? (
              <TouchableOpacity onPress={() => {navigation.navigate("SignUp")}}>
                <Text
                  style={{
                    color: 'black',
                    fontFamily: 'Poppins-Regular',
                    fontSize: 20,
                  }}>
                  Sign Up Now!
                </Text>
              </TouchableOpacity>
            ) : (
              <>
                <Text
                  style={{
                    color: 'black',
                    fontFamily: 'Poppins-Regular',
                    fontSize: 20,
                  }}>
                  {}
                </Text>
                <Text
                  style={{
                    color: 'black',
                    fontFamily: 'Poppins-Regular',
                    fontSize: 12,
                  }}>
                  Signed in On //date
                </Text>
              </>
            )}
          </View>
        </View>
        <View
          style={{
            flex: 1,
            borderRadius: 10,
            backgroundColor: 'white',
            marginVertical: 20,
          }}>
          <View style={{}}></View>
        </View>
      </View>
    </View>
  );
};

export default Profile;
