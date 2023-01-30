import {
  Dimensions,
  TouchableOpacity,
  Animated,
  Image,
  StyleSheet,
  Text,
  View,
  Alert,
  FlatList,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import ImageCropPicker from 'react-native-image-crop-picker';
import UserChatDetail from './UserChatDetail';
import {
  createNavigationContainerRef,
  useNavigation,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import firestore from '@react-native-firebase/firestore';
import ImagePicker from './ImagePicker';

const Chats = () => {
  const navigationRef = createNavigationContainerRef();

  const navigation = useNavigation();

  const AnimationOn = useRef(new Animated.Value(1)).current;
  const AnimationOff = useRef(new Animated.Value(0)).current;

  const {width, height} = Dimensions.get('window');

  const [showMenu, setShowMenu] = useState(false);

  const [getter, setGetter] = useState();

  const [users, setUsers] = useState(null);

  const [id, setID] = useState();

   const IDMaker = () => {
     let fire = firestore().collection('Chats');
     fire.add({
         user: '1',
         MessageID: '',
       })
       .then(docRef => {
         firestore().collection('Chats').doc(docRef.id).update({
           MessageID: docRef.id,
         });
       });
   };

  const getData = () => {
    // let user = firestore().collection('Chats').doc("123456");
    // user.onSnapshot(snaps => {
    //   let userData = snaps.docs.map(item => item.data());
    //   console.log(userData);
    // });
  };

  const getUsers = () => {
    let user = firestore().collection('Chats')
    // user.onSnapshot(snaps => {
    //   let userData = snaps.docs.map(item => item.data());
    //   console.log(userData);
    // });
  };

  const send = () => {
    let fire = firestore().collection('Chats').doc(id);
    fire.update({
      user: '1',
      image: "asdasd",
    });
  };

  useEffect(() => {
    getUsers();
  }, []);

  const img = getter
    ? getter.path
    : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi0ToKk_pNdClvoT5zslZZ6iQV_xOVIktrsuYUt1FRunsvtjpXmW9lnTWzD8N1t2KLLnw&usqp=CAU';
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity onPress={() => navigation.navigate('ChatStack')}>
        <View
          style={{
            height: 80,
            marginVertical: 20,
            width: width,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              Animated.timing(AnimationOn, {
                toValue: showMenu ? 0 : 400,
                duration: 1,
                useNativeDriver: true,
              }).start();
              setShowMenu(!showMenu);
            }}>
            <Image
              source={{uri: img}}
              style={{
                height: 65,
                width: 65,
                borderRadius: 100,
                marginHorizontal: 10,
              }}
            />
          </TouchableOpacity>
          <Text style={{color: 'black'}}>Chats</Text>
        </View>
      </TouchableOpacity>

      {/* <FlatList 
              data={}
              renderItem={({item}) => {
                return(
                    <>

                    </>
                )
              }}
              /> */}

      <Animated.View
        style={{
          justifyContent: 'flex-end',
          flex: 1,
          transform: [
            {
              translateX: AnimationOn,
            },
          ],
        }}>
        <ImagePicker />
      </Animated.View>
    </View>
  );
};

export default Chats;

const styles = StyleSheet.create({});
