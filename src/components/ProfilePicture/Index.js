import React from 'react';
import {Image} from 'react-native';
import profilePictureStyle from './style';

const ProfilePicture = () => (
  <Image
    style={profilePictureStyle.image}
    source={{
      uri: 'https://reactnative.dev/img/tiny_logo.png',
    }}
  />
);
export default ProfilePicture;
