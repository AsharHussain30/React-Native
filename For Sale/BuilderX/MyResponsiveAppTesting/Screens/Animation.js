import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Animated from 'react-native-reanimated';
import {MotiImage, MotiView} from 'moti';
import Soundeff from '../assets/SoundEffects/SoundEffect2.mp3';
import soundClick from '../assets/SoundEffects/soundClick.wav';
import axios from 'axios';
const DetailScreen = () => {
  return (
    <View>
      <Text>Detail Screen</Text>
    </View>
  );
};

const Animation = () => {
  const Item_SizeHeight = responsiveHeight(20);
  const Item_SizeWidth = responsiveWidth(25);

  const [textApi, setTextApi] = useState([]);

  const getApiData = async () => {
    const google = await axios.get(
      'https://www.youtube.com/watch?v=NS9z2QHcZdY',
    );
    // console.log(google.data);
    // setTextApi(google.data);
  };

  // console.log(textApi);
  const Sound = require('react-native-sound');

  let eff = new Sound(soundClick, Sound.MAIN_BUNDLE, error => {
    if (error) {
    } else {
      console.log('Your audio have some issues');
    }
  });

  const sum = Item_SizeHeight + Item_SizeWidth;

  const Spacing = 20;

  const Item_Size = sum + Spacing * 10;

  const [click, setClick] = useState(false);

  const scrollY = useRef(new Animated.Value(0)).current;
  return (
    // <View style={[StyleSheet.absoluteFillObject,{backgroundColor:"black",height:"100%",width:"100%"}]}>
    <View style={{backgroundColor: 'white', flex: 1}}>
      {click ? (
        <MotiView
          // from={{
          //  height:"0%",
          // }}
          // animate={{
          //   height:"100%"
          // }}
          style={{height: '100%', width: '100%', backgroundColor: 'yellow'}}>
          {/* {textApi.map((item, index) => {
            return (
              <Image
                key={index}
                source={{uri: item}}
                style={{height: '100%', width: '100%'}}
              />
            );
          })} */}
          {/* <View style={{flex: 1}}>
            <YouTube
              videoId="O3y-MdGwhrk"
              play={true}
              fullscreen={true}
              loop={true}
              onReady={e => console.log('onReady', e)}
              onChangeState={e => console.log('onChangeState', e)}
              onChangeQuality={e => console.log('onChangeQuality', e)}
              onError={e => console.log('onError', e)}
              style={{alignSelf: 'stretch', height: 300}}
            />
          </View> */}
          {/* <WebView
            source={{uri: 'https://www.youtube.com/embed/xNRJwmlRBNU'}}
          /> */}
        </MotiView>
      ) : null}
      {/* <Animated.FlatList
        data={[
          {name: 'Ashar', age: '17'},
          {name: 'Ashar', age: '17'},
          {name: 'Ashar', age: '17'},
          {name: 'Ashar', age: '17'},
          {name: 'Ashar', age: '17'},
          {name: 'Ashar', age: '17'},
          {name: 'Ashar', age: '17'},
          {name: 'Ashar', age: '17'},
          {name: 'Ashar', age: '17'},
          {name: 'Ashar', age: '17'},
          {name: 'Ashar', age: '17'},
          {name: 'Ashar', age: '17'},
          {name: 'Ashar', age: '17'},

        ]}

        contentContainerStyle={{padding: Spacing,}}

        onScroll={Animated.event(
          [{ nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true}
        )}
        nestedScrollEnabled={true}
      
        renderItem={({item,index}) => {
        
          const inputRange = [
            0,
            0,
            Item_Size * index,
            Item_Size * (index + 2)
          ]
  
          const scale = scrollY.interpolate({
            inputRange,
            outputRange: [1,1,1,0]
          })
          return(
            <Animated.View style={{transform:[{scale}],backgroundColor:"white",height:450,width:400,margin:Spacing,borderRadius:25,justifyContent:"center",alignItems:"center",shadowColor:"white",shadowRadius:25,shadowOpacity:1,shadowOffset:[{height:1,width:2}]}}> 
              <Text>{item.name}</Text>
              <Text>{item.age}</Text>            
            </Animated.View>
          )
        }}
      /> */}
      <View
        style={{
          flexDirection: 'row',
          bottom: 0,
          position: 'absolute',
          height: 400,
          paddingHorizontal: 20,
        }}>
        <TouchableOpacity
          onPress={() => {
            DetailScreen(), setClick(!click);
            getApiData();
            eff.play(success => {
              console.log(success, '123');
            });
          }}>
          <View
            style={[
              {
                elevation: 10,
                borderRadius: 25,
                backgroundColor: 'white',
                marginRight: 20,
                // height: responsiveHeight(35),
                // width: responsiveWidth(40),
                alignItems: 'center',
              },
              // animatedStyles
            ]}>
            <Image
              source={require('../assets/images/65726a0b-cde2-4c25-a1e4-b2df85142283-removebg-preview.png')}
              resizeMode="contain"
              style={{
                width: responsiveWidth(35),
                height: responsiveHeight(20),
                margin: 5,
                marginHorizontal: 10,
              }}
            />
            <Text
              style={{
                fontFamily: 'albert-sans-700',
                color: '#121212',
                fontSize: responsiveFontSize(2.2),
                fontWeight: 'bold',
              }}>
              Shrimps
            </Text>
            <Text
              style={{
                fontSize: responsiveFontSize(1.7),
                fontFamily: 'akshar-regular',
                color: '#121212',
                textAlign: 'center',
                alignSelf: 'center',
                marginTop: responsiveHeight(1),
              }}>
              Shrimps
            </Text>
            <View
              style={{
                flexDirection: 'row',
                margin: 5,
                marginVertical: 15,
              }}>
              <Text
                style={{
                  fontFamily: 'roboto-700',
                  color: 'rgba(235,174,9,1)',
                  fontSize: responsiveFontSize(3.5),
                  textAlign: 'center',
                  textAlignVertical: 'center',
                }}>
                $
              </Text>
              <Text
                style={{
                  fontFamily: 'aladin-regular',
                  color: '#121212',
                  fontSize: responsiveFontSize(2.5),
                  textAlign: 'center',
                  textAlignVertical: 'center',
                  marginTop: responsiveHeight(1),
                  marginLeft: responsiveHeight(1),
                }}>
                10
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={[
              {
                elevation: 10,
                borderRadius: 25,
                backgroundColor: 'white',
                // height: responsiveHeight(35),
                // width: responsiveWidth(40),
                alignItems: 'center',
              },
              // animatedStyles
            ]}>
            <Image
              source={require('../assets/images/65726a0b-cde2-4c25-a1e4-b2df85142283-removebg-preview.png')}
              resizeMode="contain"
              style={{
                width: responsiveWidth(35),
                height: responsiveHeight(20),
                margin: 5,
                marginHorizontal: 10,
              }}
            />
            <Text
              style={{
                fontFamily: 'albert-sans-700',
                color: '#121212',
                fontSize: responsiveFontSize(2.2),
                fontWeight: 'bold',
              }}>
              Shrimps
            </Text>
            <Text
              style={{
                fontSize: responsiveFontSize(1.7),
                fontFamily: 'akshar-regular',
                color: '#121212',
                textAlign: 'center',
                alignSelf: 'center',
                marginTop: responsiveHeight(1),
              }}>
              Shrimps
            </Text>
            <View
              style={{
                flexDirection: 'row',
                margin: 5,
                marginVertical: 15,
              }}>
              <Text
                style={{
                  fontFamily: 'roboto-700',
                  color: 'rgba(235,174,9,1)',
                  fontSize: responsiveFontSize(3.5),
                  textAlign: 'center',
                  textAlignVertical: 'center',
                }}>
                $
              </Text>
              <Text
                style={{
                  fontFamily: 'aladin-regular',
                  color: '#121212',
                  fontSize: responsiveFontSize(2.5),
                  textAlign: 'center',
                  textAlignVertical: 'center',
                  marginTop: responsiveHeight(1),
                  marginLeft: responsiveHeight(1),
                }}>
                10
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        {/* <MotiImage
    source={require("../assets/images/emoji.png")} 
    from={{
      borderRadius:100,
      height:"10%",
      width:"10%"      
    }}
    animate={{
      borderRadius:0,
      height:"100%",
      width:"100%"
    }}
    transition={{
      duration:3000,
    }}
    style={{resizeMode:"contain",borderRadius:65,}}
    /> */}
      </View>
    </View>
  );
};

export default Animation;
