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
import {App} from '../../App';
import {Home} from './Home';
import {responsiveFontSize, responsiveHeight} from 'react-native-responsive-dimensions';
import AntDesign from 'react-native-vector-icons/AntDesign';

const {height, width} = Dimensions.get('window');
const Data = [
  {
    image: (
      <View style={{flex: 1, backgroundColor: '#918ae2'}}>
        <Image
          source={require('../assets/themePics/roll.png')}
          style={{
            height: '100%',
            width: '100%',
            resizeMode: 'contain',
            position: 'absolute',
            bottom: '20%',
            left: '10%',
          }}
        />
      </View>
    ),
  },
  {
    image: (
      <View style={{flex: 1, backgroundColor: '#ffd37f'}}>
        <Image
          source={require('../assets/themePics/burger.png')}
          style={{
            height: '80%',
            width: '80%',
            resizeMode: 'contain',
            alignSelf: 'center',
            position: 'absolute',
            bottom: '26%',
          }}
        />
      </View>
    ),
  },
  {
    image: (
      <View style={{flex: 1, backgroundColor: '#918ae2'}}>
        <Image
          source={require('../assets/themePics/popcorn.png')}
          style={{
            height: '80%',
            width: '80%',
            position: 'absolute',
            resizeMode: 'contain',
            bottom: '30%',
            alignSelf: 'center',
          }}
        />
      </View>
    ),
  },
  {
    image: (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Image
          source={require('../assets/themePics/sushi.png')}
          style={{
            height: '80%',
            width: '90%',
            resizeMode: 'contain',
            // marginLeft: 15,
            bottom: '34%',
            left: '12%',
            position: 'absolute',
          }}
        />
      </View>
    ),
  },
];

export const Started = () => {
  const [showHomePage, setShowHomePage] = useState(true);

  const Slider = ({item}) => {
    return (
      <>
        {item.image}
        <View
          style={{position: 'absolute', paddingTop: '20%', paddingLeft: 20}}>
          <Text
            style={{
              color: '#121526',
              fontSize: 25,
              fontFamily: 'Poppins-Medium',
            }}>
            Top of the week
          </Text>
        </View>
        <View
          style={{marginLeft: '10%', position: 'absolute', paddingTop: responsiveHeight(50)}}>
          <Text
            style={{
              color: '#121526',
              fontSize: responsiveFontSize(7),
              fontWeight: '800',
              paddingVertical: 10,
              fontFamily: 'Poppins-Bold',
            }}>
            Delicious {'\n'}foods.
          </Text>
          <Text
            style={{
              color: '#121526',
              fontSize: 17,
              fontFamily: 'Rubik-Regular',
            }}>
            Let us help you discover {'\n'}the best food.
          </Text>
        </View>
      </>
    );
  };

  const LabelButtons = label => {
    return (
      <View
        style={{
          backgroundColor: '#5c55b3',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          borderRadius: 15,
          paddingHorizontal: '10%',
          paddingVertical: '3%',
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 15,
            color: 'white',
            fontFamily: 'Rubik-Regular',
          }}>
          {label}
        </Text>
      </View>
    );
  };

  const GetStarted = label => {
    return (
      <View
        style={{
          backgroundColor: '#5c55b3',
          width: '68%',
          height: '100%',
          paddingHorizontal: '5%',
          paddingVertical: '4%',
          alignItems:"center",
          justifyContent:"center",
          borderRadius: 15,
          flexDirection: 'row',
          left:"155%"
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 15,
            color: 'white',
            fontFamily: 'Rubik-Regular',
          }}>
          {label}
        </Text>
        <AntDesign name="right" size={15} color="white" style={{left:"25%"}} />
      </View>
    );
  };

  const navigation = useNavigation();

  if (showHomePage) {
    return (
        <AppIntroSlider
          data={Data}
          renderItem={({item}) => <Slider item={item} />}
          activeDotStyle={{
            backgroundColor: 'black',
            width: 30,
          }}
          showSkipButton
          renderNextButton={() => LabelButtons('Next')}
          renderSkipButton={() => LabelButtons('Skip')}
          renderDoneButton={() => GetStarted('Get Started')}
          onDone={() => {
            setShowHomePage(false);
          }}
        />
    );
  }
  return <Home />;
};
