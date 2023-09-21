import {View, Text, TouchableOpacity, Animated, Dimensions} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
} from 'react-native-admob';

const App = () => {
  const {width, height} = Dimensions.get('window');

  const [timeLeft, setTimeLeft] = useState(1 * 60 * 60); // 2 hours in seconds

  const [Clicked, setClick] = useState(timeLeft);

  const Active = () => {
    const interval = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);
    setClick(true);
    return () => clearInterval(interval);
  };

  const formatTime = seconds => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  console.log(timeLeft);

  return (
    <View style={{backgroundColor: '#101729', flex: 1}}>
      <Text
        style={{
          color: '#13da5ad9',
          fontSize: 25,
          textAlign: 'center',
          marginTop: 20,
        }}>
        Crypto Mining
      </Text>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            height: '30%',
            width: '50%',
            borderRadius: 400,
            borderWidth: 6,
            borderColor: '#13da5ad9',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 40,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 35,
              textAlign: 'center',
            }}>
            {formatTime(timeLeft)}
          </Text>
        </View>
        <Text style={{color:"white",fontSize:24,}}>0.0005$</Text>
        {Clicked == 3600 ? (
          <TouchableOpacity
            onPress={() => {
              Active();
            }}
            style={{
              backgroundColor: Clicked == 3600 ? '#13da5ad9' : 'gray',
              alignItems: 'center',
              justifyContent: 'center',
              height: '5%',
              width: '35%',
              alignSelf: 'center',
              marginTop: '3%',
              marginVertical: '5%',
              borderRadius: 5,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 15,
                textAlign: 'center',
              }}>
              Click to Start
            </Text>
          </TouchableOpacity>
        ) : null}
        <TouchableOpacity
          disabled={Clicked == 3600 ? false : true}
          onPress={() => {
            Active();
          }}
          style={{
            backgroundColor: Clicked == 3600 ? '#13da5ad9' : 'gray',
            alignItems: 'center',
            justifyContent: 'center',
            height: '5%',
            width: '35%',
            alignSelf: 'center',
            marginTop: '50%',
            borderRadius: 5,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 15,
              textAlign: 'center',
            }}>
            Withdraw
          </Text>
        </TouchableOpacity>
        <Text style={{color: 'white', marginVertical: '5%', fontSize: 14}}>
          Referral Earning?
        </Text>
      </View>
    </View>
  );
};

export default App;
