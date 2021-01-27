import React from 'react';
import {Image, View} from 'react-native';
import profilePictureStyle from './style';

const ProfilePicture = () => (
  <View style={profilePictureStyle.imageContainer}>
    <Image
      style={profilePictureStyle.image}
      source={{
        uri: 'https://reactnative.dev/img/tiny_logo.png',
      }}
    />
  </View>
);
export default ProfilePicture;
