import React from 'react';
import {Text} from 'react-native';
import ProfilePicture from '../../components/ProfilePicture/Index';

const HomeScreen = () => (
  <>
    <Text>Hello World</Text>
    <ProfilePicture uri={'https://reactnative.dev/img/tiny_logo.png'} />
    <ProfilePicture uri={'https://reactnative.dev/img/tiny_logo.png'} />
    <ProfilePicture uri={'https://reactnative.dev/img/tiny_logo.png'} />
    <ProfilePicture uri={'https://reactnative.dev/img/tiny_logo.png'} />
  </>
);
export default HomeScreen;
