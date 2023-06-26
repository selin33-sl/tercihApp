import React from 'react';
import {View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import style from './style';

export const SearchBar = ({containerStyle, value, onClear, onChangeText}) => {
  return (
    <View style={[style.container, {...containerStyle}]}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={style.searchBar}
        placeholder="Ara"
      />
      {value ? (
        <Icon
          name="close"
          size={20}
          color={'grey'}
          onPress={onClear}
          style={style.clearIcon}
        />
      ) : null}
    </View>
  );
};
