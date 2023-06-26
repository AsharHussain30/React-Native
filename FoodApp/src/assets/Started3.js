import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export const Started3 = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{marginTop: 50}}>
        <Text style={{color: '#202022', fontSize: 25, marginLeft: 25}}>
          Top of the week
        </Text>
      </View>
      <Image
        source={require('../../assets/themePics/sushi.png')}
        style={{
          height: 450,
          resizeMode: 'cover',
          marginLeft: 0,
          position: 'absolute',
        }}
      />
      <View style={{marginLeft: 35, paddingTop: 340}}>
        <Text
          style={{
            color: '#202022',
            fontSize: 80,
            fontWeight: '800',
            paddingVertical: 10,
          }}>
          Delicious {'\n'}foods.
        </Text>
        <Text style={{color: '#202022', fontSize: 17}}>
          Let us help you discover {'\n'}the best food.
        </Text>
        {/* <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={{
            backgroundColor: '#5c55b3',
            width: 200,
            height: 60,
            justifyContent: 'center',
            marginTop: 25,
            borderRadius: 15,
          }}>
          <Text style={{textAlign: 'center', fontSize: 15, color: 'white'}}>
            Get Started
          </Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
