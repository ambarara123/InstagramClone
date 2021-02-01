import React from 'react';
import {Image, View} from 'react-native';
import profilePictureStyle from './style';

const ProfilePicture = ({uri, size = 70}) => (
  <View
    style={[
      profilePictureStyle.imageContainer,
      {width: size + 6, height: size + 6},
    ]}>
    <Image
      style={[profilePictureStyle.image, {width: size, height: size}]}
      source={{
        uri: uri,
      }}
    />
  </View>
);

export default ProfilePicture;
