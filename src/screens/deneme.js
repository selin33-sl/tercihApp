import React, {useState} from 'react';
import {View, Button, Modal, TextInput, Text} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const Example = () => {
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

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button title="Seçenekleri Göster" onPress={handleModalOpen} />

      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}>
          <View
            style={{backgroundColor: 'white', padding: 20, borderRadius: 10}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 10,
              }}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                Seçenekleri Seçin
              </Text>
              <Button title="Kapat" onPress={handleModalClose} />
            </View>

            <CheckBox
              value={tempSelectedOptions.includes('Seçenek 1')}
              onValueChange={() => handleOptionToggle('Seçenek 1')}
              tintColors={{false: 'black'}}
            />
            <Text style={{color: 'black'}}>Seçenek 1</Text>

            <CheckBox
              value={tempSelectedOptions.includes('Seçenek 2')}
              onValueChange={() => handleOptionToggle('Seçenek 2')}
              tintColors={{false: 'black'}}
            />
            <Text style={{color: 'black'}}>Seçenek 2</Text>

            <CheckBox
              value={tempSelectedOptions.includes('Seçenek 3')}
              onValueChange={() => handleOptionToggle('Seçenek 3')}
              tintColors={{false: 'black'}}
            />
            <Text style={{color: 'black'}}>Seçenek 3</Text>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                marginTop: 20,
              }}>
              <Button title="İptal" onPress={handleModalClose} />
              <Button title="Kaydet" onPress={handleSaveOptions} />
            </View>
          </View>
        </View>
      </Modal>

      <TextInput
        style={{
          marginTop: 20,
          paddingHorizontal: 10,
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          color: 'black',
        }}
        value={selectedOptions.join(', ')}
        placeholder="Seçenek"
        placeholderTextColor={'black'}
        editable={false}
      />
    </View>
  );
};

export default Example;
