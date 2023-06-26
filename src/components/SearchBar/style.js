import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  searchBar: {
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    height: windowHeight * 0.06,
    borderRadius: 40,
    paddingLeft: windowWidth * 0.03,
    fontSize: windowHeight * 0.02,
  },
  container: {
    justifyContent: 'center',
  },
  clearIcon: {
    position: 'absolute',
    right: windowWidth * 0.02,
  },
});
