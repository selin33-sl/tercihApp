import {
  View,
  FlatList,
  TextInput,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React ,{useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import { getDepartmentProcess } from '../../api';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const Cart = ({item,id}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {data, status} = useSelector(
    state => state.departments,
  );

  useEffect(() => {
    status === 'success' &&
      navigation.navigate('universitydetail-screen', {item: data, id: id});
      // console.log(item,"555555555555555555555555");
    //  console.log(id,"eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
  }, [status]);

  const handleItemPress = () => {
    dispatch(getDepartmentProcess({id: item._id}));
    console.log(id,"fffffffffffffffffffffffffffffffffffffffffff");
    console.log(item,"şşşşşşşşşşşşşşşşşşşşşşşşşşşşşşşşşşşşşşşşş");
    navigation.navigate('universitydetail-screen', {item });
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
        {item.uniAdi}
      </Text>
      <Text style={{color: '#000E36', fontSize: 18, fontStyle: 'italic'}}>
        {item.sehir}
      </Text>
    </TouchableOpacity>
  );
};
