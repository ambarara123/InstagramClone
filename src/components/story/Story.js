import React from 'react';
import {View, Text} from 'react-native';
import ProfilePicture from '../ProfilePicture';

const Story = ({imageUri, name}) => (
  <View>
    <ProfilePicture uri={imageUri} />
    <Text>{name}</Text>
  </View>
);

export default Story;
