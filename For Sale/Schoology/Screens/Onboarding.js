import {
  Button,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {Path, Svg} from 'react-native-svg';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { Started } from './Started';

const {height, width} = Dimensions.get('window');
const Data = [
  {
    data: (
      <>
        <View
          style={{
            backgroundColor: '#1A73E8',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '100%',
          }}>
          <Svg viewBox="0 0 1440 320" style={{position: 'absolute', top: 345}}>
            <Path
              fill="#2D9CDB"
              fillOpacity={1}
              d="M0,32L80,53.3C160,75,320,117,480,160C640,203,800,245,960,234.7C1120,224,1280,160,1360,128L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></Path>
          </Svg>
          <Image
            source={require('../assets/logo.png')}
            style={{
              height: 340,
              resizeMode: 'contain',
            }}
          />
        </View>
        <View style={{flex: 1, justifyContent: 'flex-end', bottom: 110}}>
          <Text
            style={{
              position: 'absolute',
              alignSelf: 'center',
              color: 'white',
              fontSize: 13,
              fontWeight: '400',
            }}>
            Little minds with big dreams need teachers with big hearts.
          </Text>
        </View>
      </>
    ),
  },
  {
    data: (
      <>
        <View
          style={{
            backgroundColor: '#8A3FFC',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '100%',
          }}>
          <Svg viewBox="0 0 1440 320" style={{position: 'absolute', top: 345}}>
            <Path
              fill="#FF69B4"
              fillOpacity={1}
              d="M0,96L80,90.7C160,85,320,75,480,112C640,149,800,235,960,229.3C1120,224,1280,128,1360,80L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></Path>
          </Svg>
          <Image
            source={require('../assets/logo.png')}
            style={{
              height: 340,
              resizeMode: 'contain',
            }}
          />
        </View>
        <View style={{flex: 1, justifyContent: 'flex-end', bottom: 110}}>
          <Text
            style={{
              position: 'absolute',
              alignSelf: 'center',
              color: 'white',
              fontSize: 13,
              fontWeight: '400',
            }}>
           A teacher's heart is always in the right place, even when their patience is tested.
           </Text>
        </View>
      </>
    ),
  },
  {
    data: (
      <>
        <View
          style={{
            backgroundColor: '#2D9cdb',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '100%',
          }}>
          <Svg viewBox="0 0 1440 320" style={{position: 'absolute', top: 345}}>
            <Path
              fill="#ffd600"
              fillOpacity={1}
              d="M0,32L80,53.3C160,75,320,117,480,160C640,203,800,245,960,234.7C1120,224,1280,160,1360,128L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></Path>
          </Svg>
          <Image
            source={require('../assets/logo.png')}
            style={{height: 340, resizeMode: 'contain'}}
          />
        </View>
        <View style={{flex: 1, justifyContent: 'flex-end', bottom: 110}}>
          <Text
            style={{
              position: 'absolute',
              alignSelf: 'center',
              color: 'white',
              fontSize: 13,
              fontWeight: '400',
            }}>
           Teachers plant the seeds of knowledge that will bloom for a lifetime.
           </Text>
        </View>
      </>
    ),
  },
  {
    data: (
      <>
        <View
          style={{
            backgroundColor: '#0F4B6F',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '100%',
          }}>
          <Svg viewBox="0 0 1440 320" style={{position: 'absolute', top: 345}}>
            <Path
              fill="#FF4D4F"
              fillOpacity={1}
              d="M0,96L80,90.7C160,85,320,75,480,112C640,149,800,235,960,229.3C1120,224,1280,128,1360,80L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></Path>
          </Svg>
          <Image
            source={require('../assets/logo.png')}
            style={{
              height: 340,
              resizeMode: 'contain',
            }}
          />
        </View>
        <View style={{flex: 1, justifyContent: 'flex-end', bottom: 110}}>
          <Text
            style={{
              position: 'absolute',
              alignSelf: 'center',
              color: 'white',
              fontSize: 13,
              fontWeight: '400',
            }}>
              Good teachers know how to bring out the best in their students.
          </Text>
        </View>
      </>
    ),
  },
];

export const Onboarding = () => {
  const [showHomePage, setShowHomePage] = useState(true);

  const Slider = ({item}) => {
    return <>{item.data}</>;
  };

  const buttonLabel = label => {
    return (
      <View style={{paddingHorizontal: 20}}>
        <Text style={{textAlign: 'center', fontSize: 15, color: 'white'}}>
          {label}
        </Text>
      </View>
    );
  };

  const GetStarted = () => {
    return (
      <View style={{bottom:20}}>
        <View
          style={{
            backgroundColor: '#5c55b3',
            width: 60,
            height: 60,
            justifyContent: 'center',
            borderRadius: 100,
          }}>
          <Text style={{textAlign: 'center', fontSize: 15, color: 'white'}}>
          <MaterialCommunityIcons name="arrow-right" size={24}/>            
          </Text>
        </View>
      </View>
    );
  };

  if (showHomePage) {
    return (
      <AppIntroSlider
        data={Data}
        renderItem={({item}) => <Slider item={item} />}
        activeDotStyle={{
          backgroundColor: 'white',
          width: 30,
        }}
        showSkipButton
        renderNextButton={() => buttonLabel('Next')}
        renderSkipButton={() => buttonLabel('Skip')}
        renderDoneButton={() => GetStarted('Get Started')}
        onDone={() => {
          setShowHomePage(false);
        }}
      />
    );
  }
  return <Started/>;
};
