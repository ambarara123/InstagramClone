import React, {useState} from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import styles from './style';
import ADIcon from 'react-native-vector-icons/AntDesign';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome';

const Footer = ({likesCount, caption, postedAt}) => {
  const [isLiked, setIsLiked] = useState(false);
  const onLikePressed = () => {
    setIsLiked(!isLiked);
  };
  return (
    <View style={styles.container}>
      <View style={styles.iconsContainer}>
        <View style={styles.leftIcons}>
          <TouchableWithoutFeedback onPress={onLikePressed}>
            {isLiked ? (
              <ADIcon name={'heart'} size={25} color={'#ea3d3d'} />
            ) : (
              <ADIcon name={'hearto'} size={25} color={'#666666'} />
            )}
          </TouchableWithoutFeedback>
          <FontistoIcon name={'comment'} size={23} color={'#666666'} />
          <Ionicons name={'paper-plane-outline'} size={25} color={'#666666'} />
        </View>
        <FAIcon name={'bookmark-o'} size={25} color={'#666666'} />
      </View>

      <Text style={styles.likes}>{likesCount}</Text>
      <Text style={styles.caption}>{caption}</Text>
      <Text style={styles.postedAt}>{postedAt}</Text>
    </View>
  );
};

export default Footer;
