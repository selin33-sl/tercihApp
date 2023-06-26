import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import style from './style';
import {useNavigation} from '@react-navigation/native';

export const Header = ({text, back}) => {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      {back ? (
        <TouchableOpacity
          style={style.innerContainer}
          onPress={() => navigation.goBack()}>
          <Icon
            name={'chevron-left'}
            color={'white'}
            size={40}
            style={style.icon}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={style.innerContainer}>
          <Icon name={'menu'} color={'white'} size={40} style={style.icon} />
        </TouchableOpacity>
      )}

      <Text style={style.text}>{text}</Text>
    </View>
  );
};
