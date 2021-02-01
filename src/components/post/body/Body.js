import React from 'react';
import {Image} from 'react-native';
import styles from './style';

const Body = ({imageUri}) => (
  <Image source={{uri: imageUri}} style={styles.image} />
);

export default Body;
