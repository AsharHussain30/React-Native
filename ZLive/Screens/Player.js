import {View, Text, Dimensions, StatusBar} from 'react-native';
import React from 'react';
import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-controls';
import {useNavigation} from '@react-navigation/native';

const Player = ({route}) => {
  const {height, width} = Dimensions.get('window');

  let navigation = useNavigation();
  let VideoUrl = route.params.params;

  return (
    <View style={{flex: 1, zIndex: 8}}>
      <StatusBar hidden />
      <VideoPlayer
        onBack={() => {
          navigation.goBack();
        }}
        source={{
          uri: VideoUrl,
        }}
        tapAnywhereToPause={true}
        style={{height: height, width: '100%',}}
      />
    </View>
  );
};

export default Player;
