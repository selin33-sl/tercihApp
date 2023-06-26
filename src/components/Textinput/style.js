import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  input: {
    height: windowHeight * 0.05,
    marginHorizontal: windowWidth * 0.05,
    marginVertical: windowHeight * 0.02,
    borderWidth: 1,
    padding: 10,
    color: 'black',
    borderColor: 'white',
  },
});
