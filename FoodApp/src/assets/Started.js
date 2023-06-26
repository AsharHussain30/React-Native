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
import {Hexagon} from './Home';




const {height, width} = Dimensions.get('window');
const Data = [
  {
    image: (
      <View style={{flex: 1, backgroundColor: '#918ae2'}}>
        <Image
          source={require('../../assets/themePics/roll.png')}
          style={{
            height: 340,
            resizeMode: 'contain',
            position: 'absolute',
            top: 60,
            left: -70,
          }}
        />
      </View>
    ),
  },
  {
    image: (
      <View style={{flex: 1, backgroundColor: '#ffd37f'}}>
        <Image
          source={require('../../assets/themePics/burger.png')}
          style={{
            height: 340,
            resizeMode: 'contain',
            alignSelf: 'center',
            position: 'absolute',
            top: 80,
          }}
        />
      </View>
    ),
  },
  {
    image: (
      <View style={{flex: 1, backgroundColor: '#918ae2'}}>
        <Image
          source={require('../../assets/themePics/popcorn.png')}
          style={{height: 340, resizeMode: 'contain', top: 50, left: -50}}
        />
      </View>
    ),
  },
  {
    image: (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Image
          source={require('../../assets/themePics/sushi.png')}
          style={{
            height: 450,
            resizeMode: 'contain',
            marginLeft: 15,
            top: -20,
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
        <View style={{position: 'absolute', paddingTop: 50, paddingLeft: 20}}>
          <Text style={{color: '#121526', fontSize: 25}}>Top of the week</Text>
        </View>
        <View style={{marginLeft: 35, position: 'absolute', paddingTop: 390}}>
          <Text
            style={{
              color: '#121526',
              fontSize: 80,
              fontWeight: '800',
              paddingVertical: 10,
            }}>
            Delicious {'\n'}foods.
          </Text>
          <Text style={{color: '#121526', fontSize: 17}}>
            Let us help you discover {'\n'}the best food.
          </Text>
        </View>
      </>
    );
  };

  const buttonLabel = label => {
    return (
      <View style={{marginTop: -5}}>
        <View
          style={{
            backgroundColor: '#5c55b3',
            width: 140,
            height: 40,
            justifyContent: 'center',
            borderRadius: 15,
          }}>
          <Text style={{textAlign: 'center', fontSize: 15, color: 'white'}}>
            {label}
          </Text>
        </View>
      </View>
    );}

  const GetStarted = label => {
    return (
      <View style={{position: 'absolute', left: -400, bottom: 0, top: -60}}>
        <View
          style={{
            backgroundColor: '#5c55b3',
            width: 200,
            height: 60,
            justifyContent: 'center',
            borderRadius: 15,
          }}>
          <Text style={{textAlign: 'center', fontSize: 15, color: 'white'}}>
            {label}
          </Text>
        </View>
      </View>
    );}

    const navigation = useNavigation();

      if(showHomePage){
        return(
          <AppIntroSlider
            data={Data}
            renderItem={({item}) => <Slider item={item} />}
            activeDotStyle={{
              backgroundColor: 'black',
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
            )}
      return(
            <Hexagon/>
          )
       }
        
