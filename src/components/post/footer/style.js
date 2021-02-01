import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftIcons: {
    flexDirection: 'row',
    width: 110,
    justifyContent: 'space-between',
    padding: 5,
  },
  likes: {
    fontWeight: 'bold',
    margin: 3,
  },
  caption: {
    margin: 3,
  },
  postedAt: {
    color: '#858585',
    margin: 3,
  },
});

export default styles;
