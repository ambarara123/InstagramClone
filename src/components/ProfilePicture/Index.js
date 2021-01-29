import React from 'react';
import {Image, View} from 'react-native';
import profilePictureStyle from './style';

const ProfilePicture = ({uri}) => (
  <View style={profilePictureStyle.imageContainer}>
    <Image
      style={profilePictureStyle.image}
      source={{
        uri: uri,
      }}
    />
  </View>
);

export default ProfilePicture;
