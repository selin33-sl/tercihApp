import React, {useState} from 'react';
import {
  View,
  Button,
  Modal,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Checkbox} from '../Checkbox';
import { data } from '../../screens';

// const puanTuru = [
//   {id: 1, name: 'Hepsi'},
//   {id: 2, name: 'TYT'},
//   {id: 3, name: 'SAYISAL'},
//   {id: 4, name: 'EŞİT AĞIRLIK'},
//   {id: 5, name: 'SÖZEL'},
//   {id: 6, name: 'DİL'},
// ];
const universiteTuru = [
  {id: 1, name: 'Hepsi'},
  {id: 2, name: 'DEVLET'},
  {id: 3, name: 'VAKIF'},
  {id: 4, name: 'KKTC'},
  {id: 5, name: 'VAKIF MYO'},
  {id: 6, name: 'YABANCI'},
];

export const Modall = ({puan, text}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [tempSelectedOptions, setTempSelectedOptions] = useState([]);

  const handleModalOpen = () => {
    setTempSelectedOptions(selectedOptions);
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const handleOptionToggle = option => {
    const updatedOptions = tempSelectedOptions.includes(option)
      ? tempSelectedOptions.filter(item => item !== option)
      : [...tempSelectedOptions, option];
    setTempSelectedOptions(updatedOptions);
  };

  const handleSaveOptions = () => {
    setSelectedOptions(tempSelectedOptions);
    setModalVisible(false);
  };

  const formatSelectedOptions = () => {
    const formattedOptions = selectedOptions.join(', ');
    if (formattedOptions.length > 15) {
      return formattedOptions.slice(0, 15) + '...';
    }
    return formattedOptions;
  };
  return (
    <View>
      <Text style={{marginBottom: 10}}>{text}</Text>

      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Modal visible={modalVisible} animationType="slide" transparent={true}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0,0,0,0.5)',
            }}>
            <View
              style={{
                backgroundColor: '#1F869C',
                padding: 20,
                borderRadius: 10,
                elevation: 10,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 10,
                }}>
                <Text
                  style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>
                  Seçenekleri Seçin
                </Text>
              </View>

              {puan
                ? data.map(option => (
                    <Checkbox
                      key={option.id}
                      value={tempSelectedOptions.includes(option.name)}
                      onValueChange={() => handleOptionToggle(option.name)}
                      label={option.puanTuru}
                    />
                  ))
                : data.map(option => (
                    <Checkbox
                      key={option.id}
                      value={tempSelectedOptions.includes(option.name)}
                      onValueChange={() => handleOptionToggle(option.name)}
                      label={option.uniTuru}
                    />
                  ))}

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 20,
                }}>
                <Button
                  title="İptal"
                  color={'red'}
                  style={{}}
                  onPress={handleModalClose}
                />
                <Button
                  title="Kaydet"
                  color={'green'}
                  onPress={handleSaveOptions}
                />
              </View>
            </View>
          </View>
        </Modal>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
          }}
          value={formatSelectedOptions()}
          placeholder="Seçenek"
          editable={false}
        />
        <TouchableOpacity onPress={handleModalOpen}>
          <Icon name="chevron-down" size={25} color={'white'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
