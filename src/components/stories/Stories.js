import React from 'react';
import {View} from 'react-native';
import Story from '../story/Story';

const data = [
  {
    imageUri: 'https://reactnative.dev/img/tiny_logo.png',
    name: 'first',
  },
  {
    imageUri: 'https://reactnative.dev/img/tiny_logo.png',
    name: 'second',
  },
  {
    imageUri: 'https://reactnative.dev/img/tiny_logo.png',
    name: 'third',
  },
  {
    imageUri: 'https://reactnative.dev/img/tiny_logo.png',
    name: 'fourth',
  },
];

const Stories = () => (
  <View>
    <Story imageUri={data[0].imageUri} name={data[0].name} />
    <Story imageUri={data[1].imageUri} name={data[1].name} />
    <Story imageUri={data[2].imageUri} name={data[2].name} />
    <Story imageUri={data[3].imageUri} name={data[3].name} />
  </View>
);

export default Stories;
