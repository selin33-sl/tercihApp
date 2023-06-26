import {View, Text, TextInput, Dimensions} from 'react-native';
import React, {useState} from 'react';
import style from './style';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const Textinput = ({value, onChangeText, width, placeholder}) => {
  const WidthStyles = {
    width: width,
  };
  return (
    <View style={style.container}>
      <View style={style.textInputContainer}>
        <TextInput
          style={[style.input, WidthStyles]}
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={'grey'}
        />
      </View>
    </View>
  );
};
