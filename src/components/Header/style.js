import {StyleSheet, Dimensions} from 'react-native';

const SLIDER_WIDTH = Dimensions.get('window').width;
const SLIDER_HEIGHT = Dimensions.get('window').height;
const ITEM_WIDTH = SLIDER_WIDTH;

export default StyleSheet.create({
  container: {
    maxHeight: 60,
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#000E36',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 15,
  },
  innerContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    position: 'absolute',
    left: 5,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    alignSelf: 'center',
  },
});
