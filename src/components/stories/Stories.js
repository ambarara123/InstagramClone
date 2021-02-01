import React from 'react';
import {FlatList} from 'react-native';
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
  {
    imageUri: 'https://reactnative.dev/img/tiny_logo.png',
    name: 'fifth',
  },
];

const Stories = () => (
  <FlatList
    data={data}
    keyExtractor={({name}) => name}
    horizontal
    showsHorizontalScrollIndicator={false}
    renderItem={({item}) => <Story imageUri={item.imageUri} name={item.name} />}
  />
);

export default Stories;
