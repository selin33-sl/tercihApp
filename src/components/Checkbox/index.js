import {View, Text} from 'react-native';
import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import style from './style';

export const Checkbox = ({value, onValueChange, label}) => {
  return (
    <View style={style.checkboxContainer}>
      <CheckBox
        value={value}
        onValueChange={onValueChange}
        style={style.checkbox}
        tintColors={{false: 'white'}}
      />
      <Text style={style.label}>{label}</Text>
    </View>
  );
};
