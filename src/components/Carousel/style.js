import {StyleSheet, Dimensions} from 'react-native';

const SLIDER_WIDTH = Dimensions.get('window').width;
const SLIDER_HEIGHT = Dimensions.get('window').height;
const ITEM_WIDTH = SLIDER_WIDTH;

export default StyleSheet.create({
  container: {
    flex: 1,
    // marginLeft: '2%',
    marginHorizontal: '5%',
    marginBottom: '2%',
    maxHeight: SLIDER_WIDTH / 1.3,
    // backgroundColor: 'pink',
  },
  cart: {},
  image: {
    width: SLIDER_WIDTH / 2,
    resizeMode: 'contain',
    height: SLIDER_WIDTH / 1.6,
    borderRadius: 30,
  },
  textSchool: {
    color: 'white',
    textAlign: 'center',
    marginTop: '2%',
    fontSize: 18,
    fontWeight: '800',
  },
  textCity: {
    color: 'white',
    textAlign: 'center',
    marginTop: '2%',
    fontSize: 18,
  },
});
