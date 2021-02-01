import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';
import ProfilePicture from '../ProfilePicture/Index';

const Story = ({imageUri, name}) => (
  <View>
    <ProfilePicture uri={imageUri} />
    <Text style={styles.name}>{name}</Text>
  </View>
);

export default Story;
