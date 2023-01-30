import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Menu from './Menu';

const Status = ({navigation}) => {
  const {height, width} = Dimensions.get('window');
  const [message, setMessage] = useState('');

  const [nikalo, setNikalo] = useState();

  const [image, setImage] = useState();

  return (
    <View>
      <View
        style={{
          height: 80,
          marginVertical: 20,
          width: width,
          borderWidth: 1,
          justifyContent: 'center',
        }}>
        <TouchableOpacity onPress={() => onImagePick()}>
          <Image
            source={{uri: nikalo}}
            style={{
              height: 65,
              width: 65,
              borderRadius: 100,
              marginHorizontal: 10,
            }}
          />
          <Text>Status</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Status;

const styles = StyleSheet.create({});
