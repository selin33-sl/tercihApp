import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {flex: 1, backgroundColor: '#000E36'},
  textInputContainer: {
    flex: 1,
    margin: '5%',
    width: windowWidth * 0.9,
    height: windowHeight * 0.9,
  },
});
