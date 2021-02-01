import React from 'react';
import {View} from 'react-native';
import Body from './body/Body';
import Header from './header/Header';
import Footer from './footer/Footer';

const Post = ({post}) => (
  <View>
    <Header imageUri={post.user.imageUri} name={post.user.name} />
    <Body imageUri={post.imageUri} />
    <Footer
      likesCount={post.likesCount}
      caption={post.caption}
      postedAt={post.postedAt}
    />
  </View>
);

export default Post;
