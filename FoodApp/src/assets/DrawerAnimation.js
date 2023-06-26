import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
  BackHandler,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {Hexagon} from './Home';
import {MotiView, useAnimationState} from 'moti';
import {Easing} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontIcon from 'react-native-vector-icons/FontAwesome5';
import FontAweIcon from 'react-native-vector-icons/FontAwesome';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {FlatList} from 'react-native-gesture-handler';
import {Auth} from './Firebase';

const {height, width} = Dimensions.get('window');
const DataItems = [
  {
    icon: <Icon name="home" size={width / 12} color="white" />,
    title: 'Home',
  },
  {
    icon: <EvilIcon name="search" size={width / 12} color="white" />,
    title: 'Explore',
  },
  {
    icon: <AntIcon name="addusergroup" size={width / 12} color="white" />,
    title: 'Join Friends',
  },
  {
    icon: <AntIcon name="setting" size={width / 12} color="white" />,
    title: 'Settings',
  },
  {
    icon: <Icon name="information" size={width / 12} color="white" />,
    title: 'About',
  },
];

export const DrawerAnimation = ({navigation}) => {
  const [click, setClick] = useState(0);
  const [signout, setSignout] = useState(false);

  const {height, width} = Dimensions.get('window');

  const animationState = useAnimationState({
    from: {
      scale: 1,
      opacity: 1,
    },
    animate: {
      opacity: 0.8,
      scale: 1,
      translateX: 1,
      transition: {
        type: 'spring',
        duration: 2000,
      },
    },
  });

  return (
    <View style={{flex: 1, backgroundColor: '#918ae2'}}>
      <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
        <Image
          source={require('../../assets/themePics/img.jpeg')}
          blurRadius={4}
          style={{
            resizeMode: 'cover',
            height: height / 6,
            width: width / 3.1,
            marginTop: height / 30,
            marginLeft: width / 25,
            borderRadius: 100,
            borderWidth: 4,
            borderColor: '#gray',
            backgroundColor: 'black',
            marginBottom: width / 9,
          }}
        />

        <Text style={styles.name}>LanreB</Text>
      </View>

      <FlatList
        data={DataItems}
        renderItem={({index, item}) => {
          return (
            <View
              style={{
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                onPress={() => setClick(index)}
                style={{
                  backgroundColor: click == index ? '#d3eaf4' : 'transparent',
                  paddingTop: 7,
                  height: height / 12.5,
                  marginHorizontal: 20,
                  borderBottomColor: '#C7D3D4FF',
                  borderBottomWidth: 2,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    borderRadius: 20,
                    paddingLeft: height / 30,
                    marginHorizontal: width / 15,
                    alignItems: 'center',
                    marginTop: height / 150,
                  }}>
                  {item.icon}
                  <Text style={styles.text}>{item.title}</Text>
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
      />

      <TouchableOpacity
        onPress={() => {
          setSignout, Auth.signOut();
        }}
        style={{
          borderColor: signout ? '#C7D3D4FF' : 'transparent',
          borderWidth: 1,
          borderRadius: 20,
          marginRight: 90,
          marginHorizontal: width / 5,
          alignItems: 'flex-start',
          height: height / 14,
          paddingTop: 6,
          marginBottom: height / 39,
        }}>
        <View style={styles.bottom}>
          <FontAweIcon name="sign-out" size={width / 14} color="white" />
          <Text style={styles.signout}>Sign Out</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  userimage: {},
  name: {
    fontSize: 29,
    color: '#d3eaf4',
    paddingTop: 60,
    paddingLeft: 170,
    fontWeight: 'bold',
    position: 'absolute',
  },
  screens: {},
  screen: {},
  text: {
    color: 'white',
    fontWeight: '500',
    fontSize: width / 20.5,
    paddingLeft: 30,
    textAlign: 'center',
  },
  bottom: {
    paddingLeft: 50,
    flexDirection: 'row',
    paddingTop: 6,
  },
  signout: {
    color: 'white',
    fontSize: width / 24,
    paddingLeft: 30,
    paddingTop: 2.5,
    textAlign: 'center',
  },
});

{
  /* <View style={styles.screens}>
     <MotiView state={animationState}>
      <TouchableOpacity onPress={setClick} style={{backgroundColor:click?"#12c7a6":0}}>
      <View style={styles.screen}>
      <Icon name="home" size={34} color="white"/>
      <Text style={styles.text}>Home</Text>
      </View>
      </TouchableOpacity>
     </MotiView>
      <MotiView state={animationState}>
      <TouchableOpacity>
      <View style={styles.screen}>
      <EvilIcon name="search" size={34} color="white" />
      <Text style={styles.text}>Explore</Text>
      </View>
      </TouchableOpacity>
      </MotiView>
      <MotiView state={animationState}>
      <TouchableOpacity onPress={() => {animationState.transitionTo("animate")}}>
      <View style={styles.screen}>
      <Icon name="calendar" size={34} color="white" />
      <Text style={styles.text}>
        My Events
        </Text>
      </View>
        </TouchableOpacity>
      </MotiView>
      <MotiView state={animationState}>
      <TouchableOpacity onPress={() => {animationState.transitionTo("animate")}}>
      <View style={styles.screen}>
      <FontIcon name="tasks" size={34} color="white" />
      <Text style={styles.text}>
        Tasks
        </Text>
      </View>
        </TouchableOpacity>
        </MotiView>
      <MotiView state={animationState}>
      <TouchableOpacity onPress={() => {animationState.transitionTo("animate")}}>
      <View style={styles.screen}>
      <AntIcon name="addusergroup" size={34} color="white" />
      <Text style={styles.text}>
        Invite Friends</Text>
      </View>
        </TouchableOpacity>
        </MotiView>
      <MotiView state={animationState}>
      <TouchableOpacity onPress={() => {animationState.transitionTo("animate")}}>
      <View style={styles.screen}>
      <AntIcon name="setting" size={34} color="white" />
      <Text style={styles.text}>
        Settings</Text>
      </View>
        </TouchableOpacity>
      </MotiView>
      <MotiView state={animationState}>
      <TouchableOpacity onPress={() => {animationState.transitionTo("animate")}}>
      <View style={styles.screen}>
      <Icon name="information" size={34} color="white" />
      <Text style={styles.text}>
        About</Text>
      </View>
        </TouchableOpacity>
    
        </MotiView>
  </View>


  */
}

{
  /* //{[...Array(3).keys()].map((index) => { */
}
{
  /* //return ( */
}
{
  /* //       <MotiView 
       from={{
    //         scale:1,
    //         opacity:0
    //       }}
    //   animate={{
    //     opacity:0.7,
    //     scale:4,
    //   }}
    //   transition={{
    //     type:"timing",
    //     duration:2000,
    //     delay:index * 400,
    //     repeatReverse:false,
    //     loop:true,
    //   }}
    //   style={[
    //     {
    //     backgroundColor:"#525252",
    //     borderRadius:200,
    //     height:100,
    //     width:100,
    //     scale:1,
    //     // position:"absolute",
    //     // top:0,
    //     // left:0,
    //     // right:0,
    //     // bottom:0,
    //     flex:1
    // },
    //     StyleSheet.absoluteFillObject
    //   ]}
    //   key={index}
    //   />
     // );
       // })}*/
}
``;
