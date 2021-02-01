import React from 'react';
import {FlatList} from 'react-native';
import Post from '../post/Post';
import Stories from '../stories/Stories';

const feedData = [
  {
    user: {
      imageUri: 'https://reactnative.dev/img/tiny_logo.png',
      name: 'Name',
    },
    imageUri:
      'https://www.kids-world-travel-guide.com/images/xpyramids_giza_500.jpeg.pagespeed.ic.L6HuuLoR_9.jpg',
    caption: 'Beautiful place #instagram',
    likesCount: '86 Likes',
    postedAt: '2 minutes ago',
  },
  {
    user: {
      imageUri: 'https://reactnative.dev/img/tiny_logo.png',
      name: 'Name',
    },
    imageUri:
      'https://www.kids-world-travel-guide.com/images/xtajmahal_500.jpg.pagespeed.ic.V6ys_qmH8t.jpg',
    caption: 'Beautiful place #instagram',
    likesCount: '86 Likes',
    postedAt: '2 minutes ago',
  },
  {
    user: {
      imageUri: 'https://reactnative.dev/img/tiny_logo.png',
      name: 'Name',
    },
    imageUri:
      'https://www.kids-world-travel-guide.com/images/xtajmahal_500.jpg.pagespeed.ic.V6ys_qmH8t.jpg',
    caption: 'Beautiful place #instagram',
    likesCount: '86 Likes',
    postedAt: '2 minutes ago',
  },
  {
    user: {
      imageUri: 'https://reactnative.dev/img/tiny_logo.png',
      name: 'Name',
    },
    imageUri: 'https://reactnative.dev/img/tiny_logo.png',
    caption: 'Beautiful place #instagram',
    likesCount: '86 Likes',
    postedAt: '2 minutes ago',
  },
  {
    user: {
      imageUri: 'https://reactnative.dev/img/tiny_logo.png',
      name: 'Name',
    },
    imageUri:
      'https://www.kids-world-travel-guide.com/images/xpyramids_giza_500.jpeg.pagespeed.ic.L6HuuLoR_9.jpg',
    caption: 'Beautiful place #instagram',
    likesCount: '86 Likes',
    postedAt: '2 minutes ago',
  },
];

const Feed = () => (
  <FlatList
    data={feedData}
    renderItem={({item}) => <Post post={item} />}
    ListHeaderComponent={Stories}
  />
);

export default Feed;
