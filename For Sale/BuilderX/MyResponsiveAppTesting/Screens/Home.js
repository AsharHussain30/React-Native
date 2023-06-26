import {
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Animated,
  RefreshControlComponent,
  ImageBackground,
  Dimensions,
  LogBox,
} from 'react-native';
import React, {createContext, useEffect, useRef, useState} from 'react';
import {View, Text} from 'react-native-animatable';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Card1 from '../components/Card1';
import Menu from '../components/Menu';
import User from '../components/User';
import SearchBar from '../components/SearchBar';
import Filter from '../components/Filter';
import Catagory1 from '../components/Catagory1';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Data} from '../Api Data/Data';
import {ScrollView} from 'react-native-virtualized-view';
import {Neomorph, NeomorphBlur} from 'react-native-neomorph-shadows';
import {Easing, ZoomInUp, log} from 'react-native-reanimated';
import {MotiView, useAnimationState, useDynamicAnimation} from 'moti';
import CartButton from '../components/CartButton';
import Quantity from '../components/Quantity';
import {horizontalScale, moderateScale, verticalScale} from '../App';
import {Swipeable} from 'react-native-gesture-handler';
import {AnimatedItem} from './AnimatedItem';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {add} from './Redux/CartSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';
import {Path, Svg} from 'react-native-svg';
import {CurvedBottomBar} from 'react-native-curved-bottom-bar';
import {FlashList} from '@shopify/flash-list';

const {height, width} = Dimensions.get('window');

const Home = () => {
  const Item_SizeHeight = responsiveHeight(20);
  const Item_SizeWidth = responsiveWidth(25);

  const navigation = useNavigation();

  const sum = Item_SizeHeight + Item_SizeWidth;

  const Item_Size = sum + 20 * 3;

  const scrollY = useRef(new Animated.Value(0)).current;

  const [item, setItem] = useState();
  const [quantity, setQuantity] = useState(1);
  const [id, setId] = useState();
  const [homeClick, setHomeClick] = useState(true);
  const [cartClick, setCartClick] = useState();

  const [Rotate, setRotate] = useState(false);
  const [profileClick, setProfileClick] = useState();
  const [index, setIndex] = useState();

  const animatedValue = useRef(new Animated.Value(1)).current;
  const Fade = useRef(new Animated.Value(0)).current;

  const RotateAnimation = useRef(new Animated.Value(0)).current;

  const RotateInterpolate = RotateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const StartRotateAnimation = () => {
    Animated.timing(RotateAnimation, {
      toValue: Rotate ? 1 : 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
    setRotate(!Rotate);
  };

  // const dispatch = useDispatch();

  // const addHandler = item => {
  //   dispatch(add(item));
  // };

  // let AllRows =Math.floor(Data.length / 2);

  // let lastRow = Data.length - (AllRows * 2)

  // while (lastRow !== 0 && lastRow !== 2) {
  //     lastRow ++
  // }

  return (
    <Animated.View style={[StyleSheet.absoluteFillObject, styles.container]}>
      <Image
        source={require('../assets/images/bg1.jpg')}
        blurRadius={2}
        style={{
          height: responsiveHeight(100),
          width: responsiveWidth(100),
          position: 'absolute',
          opacity: 0.8,
        }}
      />
      <View style={styles.menuRow}>
        <Text animation="zoomIn" style={styles.text}>
          Find and order{'\n'}your favorite dish{' '}
          <Image
            source={require('../assets/images/emoji.png')}
            style={{width: 30, height: 30, resizeMode: 'contain'}}
          />
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <View animation="slideInRight">
            <User style={styles.userProfile} />
          </View>
        </TouchableOpacity>
      </View>
      {/* <MotiView state={MotiState} transition={{type: 'spring'}}> */}
      <View animation="slideInLeft" style={styles.searchBarRow}>
        <SearchBar style={styles.searchBar} />
        <Filter style={styles.filter} />
      </View>
      <View style={styles.scrollArea2} animation="slideInRight">
        <View
          style={{
            height: responsiveHeight(20),
            width: responsiveWidth(95),
            flexDirection: 'row',
          }}>
          <Catagory1 style={styles.catagory1} />
        </View>
      </View>
      {/* </MotiView> */}
      <Text
        style={{
          fontFamily: 'OpenSans-Medium',
          color: '#F9F5F5',
          fontSize: responsiveFontSize(2.4),
          letterSpacing: 1,
          marginHorizontal: responsiveWidth(5),
          top: 5,
        }}>
        Search Results
      </Text>
      <FlashList
        data={Data}
        numColumns={2}
        // style={{
        //   marginTop: 20,
        //   paddingBottom: 117,
        // }}
        bounces={true}
        alwaysBounceVertical={true}
        contentContainerStyle={{
          paddingBottom: 117,
        }}
        snapToAlignment="center"
        estimatedItemSize={200}
        centerContent={true}
        // columnWrapperStyle={{justifyContent: 'space-evenly'}}
        // onScroll={Animated.event(
        //   [{nativeEvent: {contentOffset: {y: scrollY}}}],
        //   {useNativeDriver: true},
        // )}
        // nestedScrollEnabled={true}
        renderItem={({item, index}) => {
          // const inputRange = [
          //   -1,
          //   0,
          //   Item_Size * index,
          //   Item_Size * (index + 2),
          // ];
          // const scale = scrollY.interpolate({
          //   inputRange,
          //   outputRange: [1, 1, 1, 0],
          // });

          // <View
          //              style={{
          //                borderRadius: 25,
          //                backgroundColor: 'black',
          //                height: responsiveHeight(35),
          //                width: responsiveWidth(40),
          //              }}
          //            />

          return (
            <>
              <View
                animation="fadeInUp"
                style={[
                  {
                    alignItems: 'center',
                    zIndex: 5,
                    // transform: [{scale}],
                    // marginRight: index +1 == Data.length ? 180 : 0,
                    marginTop: index % 2 === 1 ? 0 : 24,
                    marginHorizontal: 12,
                    // marginBottom: 10,
                  },
                ]}>
                <TouchableOpacity
                  onPress={() => {
                    setIndex(index);
                    setQuantity(quantity);
                    setId(item.id);
                    setTimeout(() => {
                      navigation.navigate('AnimatedItem', {
                        price: item.price,
                        selectedImg: item.image,
                        selectedName: item.name,
                        id: item.id,
                      });
                    }, 2000);
                  }}>
                  <View
                    style={[
                      {
                        elevation: 10,
                        borderRadius: 25,
                        backgroundColor: 'white',
                        width: responsiveWidth(42),
                        alignItems: 'center',
                      },
                    ]}>
                    <Image
                      source={item.image}
                      resizeMode="cover"
                      style={{
                        width: responsiveWidth(36),
                        height: responsiveHeight(18),
                        margin: 5,
                        marginHorizontal: 10,
                        shadowColor: 'black',
                        shadowRadius: 5,
                        shadowOpacity: 1,
                      }}
                    />
                    <Text
                      style={{
                        fontFamily: 'Anton-Regular',
                        color: '#121212',
                        fontSize: responsiveFontSize(2.2),
                        fontWeight: 'bold',
                      }}>
                      {item.name}
                    </Text>
                    <Text
                      style={{
                        fontSize: responsiveFontSize(1.7),
                        fontFamily: 'roboto-500',
                        color: '#121212',
                        textAlign: 'center',
                        alignSelf: 'center',
                        marginTop: responsiveHeight(1),
                      }}>
                      {item.detail}
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
                        {item.currency}
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
                        {item.price}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </>
          );
        }}
      />

      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'orange',
          borderRadius: 55,
          paddingHorizontal: 30,
          position: 'absolute',
          bottom: 20,
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
            // StartRotateAnimation();
            setHomeClick(true);
            setProfileClick(false);
          }}>
          <View
            animation={{
              from: {
                rotate: homeClick ? '0deg' : '360deg',
              },
              to: {
                rotate: homeClick ? '360deg' : '0deg',
              },
            }}
            style={{
              paddingHorizontal: 15,
              marginHorizontal: 10,
              paddingVertical: 5,
              // borderRadius: 9,
              // backgroundColor: '#DDDDDD',
              alignItems: 'center',
              shadowRadius: 25,
            }}>
            <Ionicons
              name={homeClick == true ? 'home' : 'home-outline'}
              size={25}
              color="white"
            />
            {/* <Text style={{color: 'black'}}>Home</Text> */}
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setTimeout(() => {
              navigation.navigate('Cart', {params: item});
            }, 1000);
            setCartClick(true);
            setHomeClick(false);
            setProfileClick(false);
          }}
          style={{
            marginHorizontal: 20,
            padding: 2,
            borderColor: 'orange',
            borderWidth: 3,
            top: -25,
            borderRadius: 100,
          }}>
          <View
            animation={{
              from: {
                rotate: cartClick ? '0deg' : '360deg',
              },
              to: {
                rotate: cartClick ? '360deg' : '0deg',
              },
            }}
            style={{
              alignItems: 'center',
              // transform: [{rotate: RotateInterpolate}],
              backgroundColor: '#f4f4f4',
              paddingHorizontal: 20,
              paddingVertical: 10,
              borderRadius: 100,
              // padding: 80,
              elevation: 24,
            }}>
            <MaterialCommunityIcons name="cart" size={25} color="#454545" />
            <Text style={{color: '#454545'}}>Cart</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setTimeout(() => {
              navigation.navigate('Profile');
            }, 2000);
            // StartRotateAnimation();
            setProfileClick(true);
            setHomeClick(false);
          }}>
          <View
            animation={{
              from: {
                rotate: profileClick ? '0deg' : '360deg',
              },
              to: {
                rotate: profileClick ? '360deg' : '0deg',
              },
            }}
            style={{
              paddingHorizontal: 20,
              marginHorizontal: 10,
              paddingVertical: 10,
              alignItems: 'center',
              // transform: [{rotate: RotateInterpolate}],
            }}>
            <FontAwesome
              name={profileClick == true ? 'user' : 'user-o'}
              size={25}
              color="white"
            />
            {/* <Text style={{color: 'black', top: 3}}>Profile</Text> */}
          </View>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },

  //header
  menuRow: {
    // backgroundColor:"red",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // marginHorizontal: responsiveWidth(3.5),
    marginVertical: responsiveHeight(3),
  },

  // main heading text
  text: {
    fontFamily: 'be-vietnam-pro-700',
    color: '#F9F5F5',
    fontSize: responsiveFontSize(3),
    // marginTop:responsiveHeight(2),
    letterSpacing: 1,
    marginHorizontal: responsiveWidth(5),
  },

  // search area
  searchBarRow: {
    // height: responsiveHeight(7),
    // backgroundColor:"red",
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: responsiveHeight(2),
  },
  searchBar: {
    borderRadius: 10,
    backgroundColor: 'rgba(246,246,246,1)',
  },
  filter: {
    height: responsiveFontSize(6.2),
    padding: 15,
    borderRadius: 10,
    backgroundColor: 'rgba(255,162,20,1)',
    marginLeft: 10,
  },

  // Scroll Catagories
  scrollArea2: {
    height: responsiveHeight(8),
    alignItems: 'center',
    // backgroundColor:"red",
    marginTop: 10,
  },
  catagory1: {
    height: responsiveFontSize(5.5),
    paddingHorizontal: 15,
    backgroundColor: 'rgba(255,162,20,1)',
    marginHorizontal: responsiveWidth(2),
    marginLeft: 10,
    marginTop: 2,
    justifyContent: 'center',
  },
  lastItem: {
    alignSelf: 'flex-start',
  },
});

export default Home;
