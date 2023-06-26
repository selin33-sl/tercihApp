import {
  View,
  FlatList,
  TextInput,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const Cart = ({text1, text2, id}) => {
  const navigation = useNavigation();

  const handleItemPress = () => {
    navigation.navigate('universitydetail-screen', {id: id});
  };

  return (
    <TouchableOpacity
      onPress={() => handleItemPress()}
      style={{
        marginTop: windowHeight * 0.01,
        width: '100%',
        height: windowHeight * 0.12,
        borderWidth: 1,
        borderRadius: 15,
        paddingHorizontal: '4%',
        paddingVertical: '4%',
        backgroundColor: 'white',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          color: '#000E36',
          fontSize: 20,
          fontWeight: 'bold',
          marginBottom: '2%',
        }}>
        {text1}
      </Text>
      <Text style={{color: '#000E36', fontSize: 18, fontStyle: 'italic'}}>
        {text2}
      </Text>
    </TouchableOpacity>
  );
};
