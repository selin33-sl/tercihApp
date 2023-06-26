import React from 'react';
import {Dimensions, View, Text} from 'react-native';
import {Carousell, Header} from '../../components';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = SLIDER_WIDTH / 2;

export const HomeScreen = () => {
  return (
    <>
      <View style={{flex: 1, backgroundColor: '#000E36'}}>
        <Header text={'Anasayfa'} />

        <Text
          style={{
            fontSize: 20,
            fontWeight: '800',
            marginLeft: '5%',
            marginVertical: '2%',
            color: 'white',
          }}>
          Popüler Üniversiteler
        </Text>

        <Carousell school={true} />
        <Text
          style={{
            color: 'white',

            fontSize: 20,
            fontWeight: '800',
            marginLeft: '5%',
            marginVertical: '2%',
          }}>
          Popüler Bölümler
        </Text>
        <Carousell school={false} />
      </View>
    </>
  );
};
