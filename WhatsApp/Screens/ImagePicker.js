import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React,{useState,useEffect} from 'react';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import { launchImageLibrary } from 'react-native-image-picker';

const ImagePicker = () => {

  const [image, setImage] = useState();

  const [getter, setGetter] = useState();

  const [id, setID] = useState();

  useEffect(() => {
    getData();
    }, []);


  const send = () => {
    let fire = firebase().collection('Chats').doc(id);
    fire.update({
      user: '1',
      image: image,
    });
  };

  const getData = () => {
    let user = firestore().collection('Chats');
    let userData = user.onSnapshot(snaps => {snaps.docs.map(item => item.data());
      // setGetter(userData[0].image);
      // setID(userData[0].MessageID);
    });
  };


  const onImagePick = () => {
    // ImageCropPicker.openCamera({
    //   cropping: true,
    // }).then(image => {
    //   setImage(image);
    // });



    const user = storage().ref().child(`./userprofile/${Date.now()}`).put("https://www.w3schools.com/css/img_lights.jpg")
    console.log(user);
    return user
  };

  const pickFromGallery = () => {
    ImageCropPicker.openPicker({
      cropping: true,
    }).then(image => {
      setImage(image);
    });
  };




  const {height, width} = Dimensions.get('window');


  return (
    <View
      style={{
        backgroundColor: '#075e55',
        height: 200,
        borderTopLeftRadius: 54,
        borderTopRightRadius: 54,
        transform:[{
          translateX:-400
        }]
      }}>
      <Text
        style={{
          textAlign: 'center',
          color: 'white',
          marginTop: 20,
          fontSize: 15,
        }}>
        Image Profile
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 40,
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => onImagePick()}>
          <View style={{flexDirection: 'row',}}>
            <MaterialCommunityIcon name="camera" size={36} color="black" />
            <Text
              style={{
                textAlignVertical: 'center',
                color: 'white',
                marginLeft: 10,
              }}>
              Take It
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => pickFromGallery()}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../Assets/download.png')}
              style={{height: 34, width: 34}}
            />
            <Text
              style={{
                textAlignVertical: 'center',
                color: 'white',
                marginLeft: 10,
              }}>
              Gallery
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => send()}>
        <Text style={{textAlign:"center",justifyContent:"center",backgroundColor:"white",padding:9,color:"#075e55",marginHorizontal:50,borderRadius:7,elevation:15,marginTop:25}}>Set As Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ImagePicker;
