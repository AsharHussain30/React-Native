import {
  View,
  Text,
  Dimensions,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Video from 'react-native-video';
import {firebase} from '@react-native-firebase/auth';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import firestore from "@react-native-firebase/firestore"

const Home = () => {
  const {height, width} = Dimensions.get('window');

  
  const [data ,setData] = useState();
  const [search,setSearch] = useState('');
  
  
  let FilteredData = data?.filter((item) => item.channelName?.toString()?.toLowerCase().includes(search?.toString()?.toLowerCase())) 
  
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = firestore()
          .collection('users')
          .doc('Admin')
          .get().then((item) => {
            setData(item._data.Channels);
          })
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      {/* Header */}
      <View style={{marginHorizontal: 30, marginVertical: 20}}>
        <Text
          style={{color: 'white', fontSize: 45, fontFamily: 'Poppins-Regular'}}>
          <Text 
          style={{color: '#13da5ad9', fontSize: 45, fontFamily: 'Poppins-Regular'}}>Z</Text>
          Live
        </Text>
      </View>
      {/* Header */}

      {/* Search */}
      <View
        style={{
          height: '7%',
          justifyContent: 'center',
          backgroundColor: 'white',
          marginHorizontal: 20,
          borderRadius: 8,
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom:20
        }}>
        <FontAwesome name="search" size={23} color="gray" />
        <TextInput
          placeholder="Search"
          onChangeText={e => setSearch(e)}
          style={{
            // backgroundColor: 'red',
            fontFamily: 'Poppins-Regular',
            width: '80%',
            left: 20,
            color:"black"
          }}
        />
      </View>
      {/* Search */}

      {/* Channels */}
{  data ? <FlatList
        data={search == '' ? data : FilteredData }
        numColumns={2}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Player',{params:item.channelUrl});
              }}
              style={{
                borderWidth: 1,
                borderColor: 'white',
                shadowColor: 'white',
                flex: 1,
                marginVertical: 20,
                marginHorizontal: 10,
                borderRadius: 20,
              }}>
              <View
                style={{
                  height: height / 3.5,
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                }}>
                <Image
                  source={{uri:item.channelIcon}}
                  style={{height: "95%", width: '95%',borderRadius:15, resizeMode: 'center'}}
                />
                {/* <Text
                  style={{
                    color: 'white',
                    fontSize: 20,
                    fontFamily: 'Poppins-Medium',
                  }}>
                  PTV Sports
                </Text> */}
              </View>
            </TouchableOpacity>
          );
        }}
      /> : <View style={{flex:1,justifyContent:"center",alignItems:"center"}}><ActivityIndicator color="white" size={23}/></View>}
      {/* Channels */}
    </View>
  );
};

export default Home;
