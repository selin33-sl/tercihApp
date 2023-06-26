import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    margin: '4%',
  },
  checkbox: {
    padding: 10,
    alignSelf: 'center',
    color: 'white',
  },
  label: {
    margin: 8,
    color: 'white',
  },
});
