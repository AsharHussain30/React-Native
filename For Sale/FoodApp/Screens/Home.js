import {
  Button,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
  Animated,
  TouchableOpacityBase,
  Dimensions,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {MotiView, useAnimationState} from 'moti';
import {
  Easing,
  SlideInLeft,
  SlideInRight,
  event,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontIcon from 'react-native-vector-icons/FontAwesome5';
import FontAweIcon from 'react-native-vector-icons/FontAwesome';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {DrawerAnimation} from './DrawerAnimation';
import {useDispatch, useSelector} from 'react-redux';
// import {add} from '../../store/CartSlice';
// import {remove} from '../../store/CartSlice';
import {useNavigation} from '@react-navigation/native';
import {MotiPressable} from 'moti/interactions';
import {useEffect} from 'react';
import {Shadow} from 'react-native-shadow-2';
import LinearGradient from 'react-native-linear-gradient';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Switch} from 'react-native-gesture-handler';
import {responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';

const {width, height} = Dimensions.get('window');
console.log(width, height);

export const Home = () => {
  const navigation = useNavigation();
  const [showMenu, setShowMenu] = useState(false);
  const [confdata, setConfdata] = useState();
  const [saved, setSaved] = useState();
  const [pressToward, setPressToward] = useState(false);

  const DataForCart = [
    {
      title: 'Drinks',
      image:
        'https://res.cloudinary.com/dhox1ri5p/image/upload/v1671452000/Drink_jlzdt1.png',
      rating: 4.5,
      cal: 80,
      id: 1,
      price: 4.25,
    },
    {
      title: 'Cakes',
      image:
        'https://res.cloudinary.com/dhox1ri5p/image/upload/v1671451998/donut_wldy9s.png',
      rating: 4.7,
      cal: 50,
      id: 2,
      price: 3.54,
    },
    {
      title: 'Hot Dog',
      image:
        'https://res.cloudinary.com/dhox1ri5p/image/upload/v1671451999/roll_uw6wpt.png',
      rating: 3.5,
      cal: 140,
      id: 3,
      price: 6.75,
    },
    {
      title: 'Burger',
      image:
        'https://res.cloudinary.com/dhox1ri5p/image/upload/v1671452000/burger_kv8qpt.png',
      rating: 4.9,
      cal: 180,
      id: 4,
      price: 7.25,
    },
  ];

  // const MyJSON = JSON.stringify(DataForCart);

  // const sending = async () => {
  //   await AsyncStorage.setItem('token', MyJSON);

  //   console.log('send data!');
  // };
  // const getData = async () => {

  // };
  //  useEffect(() => {
  //   Sizescreen()
  // }, []);

  const moveToRight = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1)).current;
  const scrollingdownward = useRef(new Animated.Value(1)).current;
  const scrollingtoward = useRef(new Animated.Value(0)).current;

  const {height, width} = Dimensions.get('window');

  const Data = [
    {
      image: (
        <Image
          source={{
            uri: 'https://res.cloudinary.com/dhox1ri5p/image/upload/v1671452000/Drink_jlzdt1.png',
          }}
          onLoad={() => <ActivityIndicator color={'green'} size={24} />}
          style={{
            //   height: "100%",
            //   width: hp('25%'),
            flex: 0.9,
            resizeMode: 'contain',
            aspectRatio: 1,
            // position: 'relative',
            // bottom: 10,
            left: -7,
          }}
        />
      ),
      title: <Text style={{fontFamily: 'Rubik-Medium'}}>Drink</Text>,
      id: 1,
      rating: 4.5,
      key: 1,
    },
    {
      image: (
        <Image
          source={{
            uri: 'https://res.cloudinary.com/dhox1ri5p/image/upload/v1671451998/donut_wldy9s.png',
          }}
          onLoad={() => <ActivityIndicator color={'green'} size={24} />}
          style={{
            // height: wp('40%'),
            // width: hp('24%'),
            // position: 'relative',
            //bottom: 0,
            flex: 0.9,
            resizeMode: 'contain',
            aspectRatio: 1,
            top: 8,
            left: 4,
          }}
        />
      ),
      title: <Text style={{fontFamily: 'Rubik-Medium'}}>Cakes</Text>,
      id: 2,
      rating: 4.7,
      key: 2,
    },
    {
      image: (
        <Image
          source={{
            uri: 'https://res.cloudinary.com/dhox1ri5p/image/upload/v1671451999/roll_uw6wpt.png',
          }}
          onLoad={() => <ActivityIndicator color={'green'} size={24} />}
          style={{
            // height: wp('45%'),
            // width: hp('25%'),
            flex: 0.9,
            aspectRatio: 1,
            resizeMode: 'contain',
            // position: 'relative',
            top: 10,
            left: -5,
          }}
        />
      ),
      title: <Text style={{fontFamily: 'Rubik-Medium'}}>Hot Dog</Text>,
      id: 3,
      rating: 3.5,
      key: 3,
    },
    {
      image: (
        <Image
          source={{
            uri: 'https://res.cloudinary.com/dhox1ri5p/image/upload/v1671452000/burger_kv8qpt.png',
          }}
          onLoad={() => <ActivityIndicator color={'green'} size={24} />}
          style={{
            // height: wp('45%'),
            // width: hp('25%'),
            flex: 0.9,
            resizeMode: 'contain',
            aspectRatio: 1,
            // position: 'relative',
            // top: 7,
            top: 13,
            left: -5,
          }}
        />
      ),
      title: <Text style={{fontFamily: 'Rubik-Medium'}}>Burger</Text>,
      id: 4,
      rating: 4.9,
      key: 4,
    },
  ];

  const shadow = {
    shadowColor: '#ece1ff',
    shadowOpacity: 0.9,
    shadowRadius: 10,
    shadowOffset: {height: 2, width: 0},
  };

  const [loading, setLoading] = useState(false);

  const Carousel = [
    {
      item: (
        <LinearGradient
          colors={['#baa2e1', '#d6c4f4']}
          start={{x: 0.1, y: 1}}
          end={{x: 0.55, y: 0.3}}
          style={[styles.wineView, shadow]}>
          <View style={{justifyContent:"space-evenly",}}>
            <Text
              style={{
                color: '#fff',
                fontSize: wp('4'),
                opacity: 0.5,
                fontFamily: 'Bungee-Regular',
                // bottom: '16%',
              }}>
              Discover
            </Text>
            <Text
              style={{
                color: '#fef9fb',
                fontSize: wp('5.5'),
                // bottom: '15%',
                fontFamily: 'Shrikhand-Regular',
              }}>
              Best lunch {'\n'}of the day
            </Text>
            {/* <TouchableOpacity onPress={sending}> */}
            <MaterialCommunityIcons
              name="arrow-right"
              size={23}
              color="#fef9fb"
              style={{top: '10%'}}
            />
            {/* </TouchableOpacity> */}
          </View>
          <Image
            source={require('../assets/themePics/wine.png')}
            style={{
              // height: hp('25.3'),
              height: "180%",
              width: '100%',
              aspectRatio:1,
              // backgroundColor:"red",
              resizeMode: 'contain',
              marginLeft: responsiveWidth(80)/ 3,
              zIndex:6,
              resizeMode: 'contain',
              position:"absolute",
              bottom:"4%"
            }}
          />
        </LinearGradient>
      ),
    },
    {
      item: (
        <LinearGradient
          colors={['#baa2e1', '#d6c4f4']}
          start={{x: 0.1, y: 1}}
          end={{x: 0.55, y: 0.3}}
          style={[styles.wineView, shadow]}>
          <Text
            style={{
              color: '#fff',
              fontSize: wp('4'),
              opacity: 0.5,
              fontFamily: 'Bungee-Regular',
              top: -10,
            }}>
            Discover
          </Text>
          <Text
            style={{
              color: '#fef9fb',
              fontSize: wp('5.5'),
              bottom: 10,
              fontFamily: 'Shrikhand-Regular',
            }}>
            Best lunch {'\n'}of the day
          </Text>
          {/* <TouchableOpacity onPress={sending}> */}
          <MaterialCommunityIcons
            name="arrow-right"
            size={23}
            color="#fef9fb"
            style={{top: hp(0.7)}}
          />
          {/* </TouchableOpacity> */}
          <Image
            source={require('../assets/themePics/burger.png')}
            style={{
              height: hp('20'),
              resizeMode: 'contain',
              position: 'absolute',
              bottom: hp('1.5'),
            }}
          />
        </LinearGradient>
      ),
    },
  ];

  const [carousel, setCarousel] = useState(false);

  // console.log(carousel);

  const CarouselAnimation = () => {
    Animated.timing(Animate, {
      toValue: carousel ? -391 : 4,
      useNativeDriver: true,
      duration: 500,
    }).start();
    setCarousel(!carousel);
  };

  useEffect(() => {
    setTimeout(() => {
      CarouselAnimation();
    }, 3000);
  });

  const Animate = useRef(new Animated.Value(0)).current;

  const [theme, setTheme] = useState(true);

  const toggleSwitch = () => setTheme(!theme);

  return (
    <View>
      <View style={{height:"100%",width:"100%"}}>
        <DrawerAnimation />
      </View>
      <Animated.View
        style={{
          flex:1,
          margin: 0,
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          position: 'absolute',
          borderTopLeftRadius: showMenu ? 80 : 0,
          borderBottomLeftRadius: showMenu ? 80 : 0,
          borderColor: showMenu ? 'white' : 'transparent',
          borderWidth: 2,
          padding: showMenu ? 22 : 0,
          backgroundColor: theme ? 'white' : 'purple',
          transform: [{scale: scale}, {translateX: moveToRight}],
        }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{padding: hp('2%'), height: '100%', width: '100%'}}>
          <TouchableOpacity
            style={{justifyContent: 'flex-start'}}
            onPress={() => {
              Animated.timing(scale, {
                toValue: showMenu ? 1 : 0.8,
                duration: 400,
                useNativeDriver: true,
              }).start();
              Animated.timing(moveToRight, {
                toValue: showMenu ? 0 : 300,
                duration: 400,
                useNativeDriver: true,
              }).start();
              setShowMenu(!showMenu);
            }}>
            <Image
              source={require('../assets/menu.png')}
              style={{
                height: hp('3%'),
                width: wp('7%'),
                top: 5,
                tintColor: theme ? 'black' : 'white',
                position: 'absolute',
              }}
            />
          </TouchableOpacity>
          <View style={{alignSelf: 'center'}}>
            <Switch onValueChange={toggleSwitch} value={theme} />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Cart')}
            style={{position: 'absolute', alignSelf: 'flex-end'}}>
            <Text style={{paddingRight: wp('2%'), textAlign: 'right'}}>
              <MaterialCommunityIcons
                name="cart"
                size={wp('7%')}
                color={theme ? '#121526' : 'white'}
              />
            </Text>
          </TouchableOpacity>
          <View style={{marginTop:width > 400 ? responsiveHeight(6): responsiveHeight(3) ,}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: '2%',
              }}>
              <Text
                style={{
                  fontSize: width > 400 ? wp('10%') : wp('9%'),
                  color: theme ? '#121526' : '#FFF9',
                  letterSpacing: -1,
                  fontFamily: 'Poppins-Bold',
                }}>
                Top of {'\n'}the day
              </Text>
              <Image
                source={require('../assets/themePics/textburger.png')}
                style={{
                  height: hp('7'),
                  width: wp('10'),
                  top: hp('3.5'),
                  left: 10,
                }}
              />
            </View>
            {/*             <LinearGradient
              colors={['#baa2e1', '#d6c4f4']}
              start={{x: 0.1, y: 1}}
              end={{x: 0.55, y: 0.3}}
              style={[styles.wineView, shadow]}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: wp('4'),
                  opacity: 0.5,
                  fontFamily: 'Bungee-Regular',
                  top: -10,
                }}>
                Discover
              </Text>
              <Text
                style={{
                  color: '#fef9fb',
                  fontSize: wp('5.5'),
                  bottom: 10,
                  fontFamily: 'Shrikhand-Regular',
                }}>
                Best lunch {'\n'}of the day
              </Text>
              {/* <TouchableOpacity onPress={sending}> */}
            {/* <MaterialCommunityIcons
                name="arrow-right"
                size={23}
                color="#fef9fb"
                style={{top: hp(0.7)}}
              /> */}
            {/* </TouchableOpacity> */}
            {/* <Image
                source={require('../assets/themePics/wine.png')}
                style={{
                  height: hp('30'),
                  resizeMode: 'contain',
                  marginLeft: wp('30'),
                  position: 'absolute',
                  bottom: hp('1.5'),
                }}
              />
            </LinearGradient> */}
            {/* Carousel */}
            {/* <FlatList
              data={Carousel}
              contentContainerStyle={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
              scrollEnabled={false}
              showsHorizontalScrollIndicator={false}
              // pagingEnabled
              horizontal
              renderItem={({item}) => {
                return (
                  <Animated.View
                    style={{
                      marginRight: 200,
                      // transform: [{translateX: Animate}],
                    }}>
                    {item.item}
                  </Animated.View>
                );
              }}
            /> */}
            <LinearGradient
          colors={['#baa2e1', '#d6c4f4']}
          start={{x: 0.1, y: 1}}
          end={{x: 0.55, y: 0.3}}
          style={[styles.wineView, shadow]}>
          <View style={{justifyContent:"space-evenly",}}>
            <Text
              style={{
                color: '#fff',
                fontSize: wp('4'),
                opacity: 0.5,
                fontFamily: 'Bungee-Regular',
                // bottom: '16%',
              }}>
              Discover
            </Text>
            <Text
              style={{
                color: '#fef9fb',
                fontSize: wp('5.5'),
                // bottom: '15%',
                fontFamily: 'Shrikhand-Regular',
              }}>
              Best lunch {'\n'}of the day
            </Text>
            {/* <TouchableOpacity onPress={sending}> */}
            <MaterialCommunityIcons
              name="arrow-right"
              size={23}
              color="#fef9fb"
              style={{top: '10%'}}
            />
            {/* </TouchableOpacity> */}
          </View>
          <Image
            source={require('../assets/themePics/wine.png')}
            style={{
              // height: hp('25.3'),
              height: "180%",
              width: '100%',
              aspectRatio:1,
              // backgroundColor:"red",
              resizeMode: 'contain',
              marginLeft: responsiveWidth(80)/ 3,
              zIndex:6,
              resizeMode: 'contain',
              position:"absolute",
              bottom:"4%"
            }}
          />
        </LinearGradient>
     
            {/* Carousel */}
            <View
              style={{
                justifyContent: 'space-between',
                // flex: 1,
                flexDirection: 'row',
                paddingTop: hp('3.5'),
                paddingBottom: 0,
                marginHorizontal: wp('3'),
              }}>
              <Text
                style={{
                  fontSize: wp('3.5'),
                  color: theme ? 'gray' : '#fff9',
                  fontFamily: 'Rubik-Medium',
                  textAlignVertical: 'center',
                }}>
                Most Popular
              </Text>
              <Text>
                <TouchableOpacity
                  onPress={() => {
                    Animated.timing(scrollingtoward, {
                      toValue: 0,
                      duration: 400,
                      useNativeDriver: true,
                    }).start();
                  }}>
                  <MaterialCommunityIcons
                    name="arrow-left"
                    size={wp('5')}
                    color={theme ? 'gray' : '#fff9'}
                    style={{
                      right: wp('6'),
                    }}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    // Animated.timing(scrollingtoward, {
                    //   toValue: -360,
                    //   duration: 400,
                    //   useNativeDriver: true,
                    // }).start();
                    // setPressToward(!pressToward);
                  }}>
                  <MaterialCommunityIcons
                    name="arrow-right"
                    size={wp('5')}
                    color={theme ? 'gray' : '#fff9'}
                  />
                </TouchableOpacity>
              </Text>
            </View>
            <ScrollView
              horizontal={true}
              pagingEnabled
              maximumZoomScale={5}
              showsHorizontalScrollIndicator={false}>
              {Data.map((product, index) => (
                <Animated.View key={index}>
                  <View
                    style={{
                      justifyContent: 'space-evenly',
                      flexDirection: 'row',
                      marginTop: hp('3.5'),
                    }}>
                    <TouchableOpacity
                      key={1}
                      onPress={() =>
                        navigation.navigate('DetailScreen', {
                          params: DataForCart[index],
                        })
                      }>
                      <View
                        style={{
                          flexDirection: 'row',
                          position: 'absolute',
                          zIndex: 6,
                          left: '14%',
                          top: '4%',
                        }}>
                        <MaterialCommunityIcons
                          name="star"
                          size={wp('4.5')}
                          color="orange"
                        />
                        <Text
                          style={{color: 'gray', fontFamily: 'Poppins-Medium'}}>
                          {product.rating}
                        </Text>
                      </View>
                      <View
                        style={{
                          height: hp('28'),
                          width: wp('37'),
                          backgroundColor: '#d3eaf4',
                          borderRadius: 25,
                          marginHorizontal: wp('8'),
                          alignItems: 'center',
                          justifyContent: 'flex-end',
                          marginLeft: wp('3.6'),
                          marginRight: wp('4.9'),
                        }}>
                        <View
                          style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          {/* <Image
                            source={{
                              uri: product.image,
                            }}
                            style={{
                              height: wp('45%'),
                              width: hp('25%'),
                              alignSelf: 'center',
                              resizeMode: 'contain',
                              // position: 'relative',
                              // bottom: 10,
                              // left: -7,
                            }}
                          /> */}
                          {product.image}
                        </View>
                        <Text
                          key={2}
                          style={{
                            textAlign: 'center',
                            fontSize: wp('5'),
                            fontWeight: '800',
                            color: '#121526',
                            paddingBottom: hp('2.5'),
                          }}>
                          {product.title}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </Animated.View>
              ))}
            </ScrollView>
          </View>
        </ScrollView>
      </Animated.View>
    </View>
  );
};

{
  /*<MotiView state={secanimationState}>
    <MotiView 
    from={{
          scale:0.7,
          translateX:-300,
          opacity:1
    }}
    animate={{
      opacity:1,
      scale:0.9,
      translateX:1,
      transition:{
        type:"timing",
        duration:40,
      }}
      }>
    <View style={styles.hexagon}>
    <View style={styles.hexagonInner}>
    {/* <TouchableOpacity onPress={() => {
    Animated.timing(scale,{
      toValue:showMenu ? 1 : 0.8,
      duration:300,
      useNativeDriver: true,
    }).start();
    Animated.timing(moveToRight,{
      toValue:showMenu ? 0 : 240,
      duration:300,
      useNativeDriver: true,
    }).start();
    }} style={{justifyContent:"center"}}>
  */
}
//  <TouchableOpacity>
//     <Text style={{fontSize:25,textAlign:"center",color:"white"}}>{text}</Text>
//   </TouchableOpacity>
//   </View>
// <View style={styles.hexagonBefore}/>
// <View style={styles.hexagonAfter}/>
// </View>
// </MotiView>
// </MotiView> */}

const styles = StyleSheet.create({
  wineView: {
    backgroundColor: '#ece1ff',
    // height: responsiveWidth(50),
    // width:responsiveWidth(91),
    borderRadius: 25,
    marginTop: responsiveHeight(2),
    paddingVertical: responsiveHeight(3.6),
    paddingHorizontal: 25,
    borderBottomColor: '#ece1ff',
    borderBottomWidth: 12,
    borderLeftWidth: 1,
    borderLeftColor: '#ece1ff',
    borderRightColor: '#ece1ff',
    borderRightWidth: 1,
    // flex:1
  },
  drawer: {
    flex: 1,
    backgroundColor: 'black',
    marginBottom: 900,
  },
  shape: {
    borderWidth: 5,
    marginVertical: 15,
    shadowColor: 'cyan',
    shadowOffset: {height: 1, width: 1},
    shadowRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hexa: {
    height: 100,
    width: 100,
  },
  hexagon: {
    height: 55,
    width: 100,
    marginBottom: 45,
  },
  hexagonInner: {
    height: 55,
    width: 100,
    backgroundColor: 'cyan',
  },
  hexagonBefore: {
    position: 'absolute',
    bottom: -26,
    borderLeftWidth: 50,
    borderLeftColor: 'transparent',
    borderRightWidth: 50,
    borderRightColor: 'transparent',
    borderTopWidth: 27,
    borderTopColor: 'cyan',
  },
  hexagonAfter: {
    position: 'absolute',
    top: -26,
    borderLeftWidth: 50,
    borderLeftColor: 'transparent',
    borderRightWidth: 50,
    borderRightColor: 'transparent',
    borderBottomWidth: 27,
    borderBottomColor: 'cyan',
  },
  card1: {
    marginHorizontal: 15,
    padding: 20,
    marginVertical: 15,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#195190FF',
    borderRadius: 20,
    borderColor: '#d60664',
    aspectRatio: 1,
  },
  userimage: {
    height: 130,
    width: 130,
    marginTop: 40,
    marginLeft: 10,
    borderRadius: 100,
    backgroundColor: 'black',
  },
  name: {
    fontSize: 29,
    color: '#12c7a6',
    paddingTop: 80,
    paddingLeft: 170,
    fontWeight: 'bold',
    position: 'absolute',
  },
  screens: {
    paddingTop: 20,
  },
  screen: {
    flexDirection: 'row',
    borderRadius: 20,
    padding: 6,
    marginBottom: 15,
    marginHorizontal: 25,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: '500',
    fontSize: 20,
    paddingLeft: 30,
    textAlign: 'center',
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingLeft: 40,
    marginTop: 50,
  },
  signout: {
    color: 'white',
    fontSize: 10,
    paddingLeft: 10,
    paddingTop: 5,
    textAlign: 'center',
  },
});

// <ScrollView
// style={{padding: height / 60, height: height, width: width}}>
// <TouchableOpacity
//   style={{justifyContent: 'flex-start'}}
//   onPress={() => {
//     Animated.timing(scale, {
//       toValue: showMenu ? 1 : 0.8,
//       duration: 400,
//       useNativeDriver: true,
//     }).start();
//     Animated.timing(moveToRight, {
//       toValue: showMenu ? 0 : 300,
//       duration: 400,
//       useNativeDriver: true,
//     }).start();
//     setShowMenu(!showMenu);
//   }}>
//   <Image
//     source={require('../../assets/menu.png')}
//     style={{height: 35, width: 35, position: 'absolute'}}
//   />
// </TouchableOpacity>
// <TouchableOpacity
//   onPress={() => navigation.navigate('Cart')}
//   style={{position: 'absolute', alignSelf: 'flex-end'}}>
//   <Text style={{paddingRight: 20, textAlign: 'right'}}>
//     <MaterialCommunityIcons name="cart" size={34} color="black" />
//   </Text>
// </TouchableOpacity>
// <View style={{marginTop: 100, flex: 1}}>
//   <View style={{flex: 1, flexDirection: 'row'}}>
//     <Text
//       style={{
//         fontSize: 45,
//         color: '#121526',
//         letterSpacing: -1,
//         fontFamily: 'Rubik-Medium',
//       }}>
//       Top of {'\n'}the day
//     </Text>
//     {/* <Text
//       style={{
//         fontFamily: 'Rubik-Medium',
//         fontSize: 37,
//         color: '#121526',
//       }}>
//       the day
//     </Text> */}
//     <Image
//       source={require('../../assets/themePics/textburger.png')}
//       style={{height: 50, width: 50, top: 58, left: 5}}
//     />
//   </View>
//   <LinearGradient
//     colors={['#baa2e1', '#d6c4f4']}
//     start={{x: 0.01, y: 0.755}}
//     end={{x: 0.7, y: 0.6}}
//     locations={[0, 1.0, 0.4]}
//     style={[styles.wineView, shadow]}>
//     <Text
//       style={{
//         color: '#d8c8ec',
//         fontSize: 15,
//         fontFamily: 'Bungee-Regular',
//         bottom: 20,
//       }}>
//       Discover
//     </Text>
//     <Text
//       style={{
//         color: '#fef9fb',
//         fontSize: 25,
//         bottom: 20,
//         fontFamily: 'Shrikhand-Regular',
//       }}>
//       Best lunch {'\n'}of the day
//     </Text>
//     <TouchableOpacity onPress={{}}>
//       <MaterialCommunityIcons
//         name="arrow-right"
//         size={23}
//         color="#fef9fb"
//         style={{bottom: 10}}
//       />
//     </TouchableOpacity>
//     <Image
//       source={require('../../assets/themePics/wine.png')}
//       style={{
//         height: 220,
//         resizeMode: 'contain',
//         marginLeft: 135,
//         position: 'absolute',
//         bottom: 30,
//       }}
//     />
//   </LinearGradient>
//   <View
//     style={{
//       justifyContent: 'space-between',
//       flex: 1,
//       flexDirection: 'row',
//       paddingTop: 30,
//       paddingBottom: 5,
//     }}>
//     <Text
//       style={{
//         fontSize: 17,
//         color: 'gray',
//         fontFamily: 'Rubik-Medium',
//         textAlignVertical: 'center',
//       }}>
//       Most Popular
//     </Text>
//     <TouchableOpacity
//       onPress={() => backward.transitionTo('animate')}>
//       <MaterialCommunityIcons
//         name="arrow-left"
//         size={23}
//         color="gray"
//       />
//     </TouchableOpacity>
//     <TouchableOpacity
//       onPress={() => Forward.transitionTo('animate')}
//       style={{marginLeft: -190}}>
//       <MaterialCommunityIcons
//         name="arrow-right"
//         size={23}
//         color="black"
//       />
//     </TouchableOpacity>
//   </View>
//   <ScrollView
//     horizontal={true}
//     showsHorizontalScrollIndicator={false}>
//     {Data.map((product, index) => (
//       <MotiView state={backward}>
//         <MotiView state={Forward}>
//           <View
//             style={{
//               justifyContent: 'space-evenly',
//               flexDirection: 'row',
//               flex: 1,
//               marginTop: 35,
//             }}>
//             <TouchableOpacity
//               key={1}
//               onPress={() => production(product)}>
//               <View
//                 style={{
//                   height: 215,
//                   width: 145,
//                   backgroundColor: '#d3eaf4',
//                   borderRadius: 25,
//                   alignItems: 'center',
//                   justifyContent: 'flex-end',
//                   marginLeft: 25,
//                   marginRight: 25,
//                 }}>
//                 {product.image}
//                 <Text
//                   key={2}
//                   style={{
//                     textAlign: 'center',
//                     fontSize: 20,
//                     fontWeight: '800',
//                     color: 'black',
//                     paddingBottom: 15,
//                   }}>
//                   {product.title}
//                 </Text>
//               </View>
//             </TouchableOpacity>
//           </View>
//         </MotiView>
//       </MotiView>
//     ))}
//   </ScrollView>
// </View>
// </ScrollView>
