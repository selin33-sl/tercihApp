import {
  View,
  Text,
  Dimensions,
  TextInput,
  Modal,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import style from './style';
import {Checkbox, Header, Modall, Textinput} from '../../components';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const data=[
  {

    id:1,
    yksEnKucukPuan2021:265.5,
    yksBasariSira2021:242328,
    programAdi:'Bilgisayar Müh.',
    sehir:'Konya',
    universiteAdi:'Selçuk Üniversite',
    lisans:'lisans',
    puanTuru:'TYT',
    uniTuru:'DEVLET',

  },
  {

    id:2,
    yksEnKucukPuan2021:265.5,
    yksBasariSira2021:242328,
    sehir:'Konya',
    programAdi:'Elektrik Elektronik Müh.',
    universiteAdi:'Selçuk Üniversite',
    lisans:'lisans',
    puanTuru:'SAYISAL',
    uniTuru:'VAKIF',

  },
  {

    id:3,
    yksEnKucukPuan2021:265.5,
    yksBasariSira2021:242328,
    programAdi:'Makine Müh.',
    sehir:'Konya',
    universiteAdi:'Selçuk Üniversite',
    lisans:'ön lisans',
    puanTuru:'EA',
    uniTuru:'KKTC',

  },


]

const handleSubmit=()=>{
 
}

export const TercihScreen = () => {
  const [sehir, onChangeSehir] = useState('');
  const [bolum, onChangeBolum] = useState('');
  const [universite, onChangeUniversite] = useState('');
  const [minpuan, onChangeMinPuan] = useState('');
  const [maxpuan, onChangeMaxPuan] = useState('');
  const [isSelected1, setSelection1] = useState(false);
  const [isSelected2, setSelection2] = useState(false);
  const [isSelected3, setSelection3] = useState(false);


  return (
    <View style={style.container}>
      <Header text={'Tercih Robotu'} />
      <View style={style.textInputContainer}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Textinput
            onChangeText={onChangeMinPuan}
            value={minpuan}
            width={windowWidth * 0.35}
            placeholder={'Min Puan'}
          />
          <Textinput
            onChangeText={onChangeMaxPuan}
            value={maxpuan}
            width={windowWidth * 0.35}
            placeholder={'Başarı sır.'}
          />
        </View>

        <Textinput
          onChangeText={onChangeSehir}
          value={sehir}
          width={windowWidth * 0.8}
          placeholder={'Şehir (birden fazla olabilir)'}
        />
        <Textinput
          onChangeText={onChangeBolum}
          value={bolum}
          width={windowWidth * 0.8}
          placeholder={'Bölüm (birden fazla olabilir)'}
        />
        <Textinput
          onChangeText={onChangeUniversite}
          value={universite}
          width={windowWidth * 0.8}
          placeholder={'Üniversite'}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Checkbox
            value={isSelected1}
            onValueChange={setSelection1}
            label={'Lisans (4+ yıllık)'}
          />
          <Checkbox
            value={isSelected2}
            onValueChange={setSelection2}
            label={'Önlisans (2 yıllık)'}
          />
        </View>
        <Checkbox
          value={isSelected3}
          onValueChange={setSelection3}
          label={'Ek kontenjanlar olabilir'}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: '6%',
            marginBottom: '20%',
          }}>
          <Modall puan={true} text={'Puan Türü'} />
          <Modall text={'Üniversite Türü'} />
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
          onPress={handleSubmit}
            style={{
              width: windowWidth * 0.5, 
              height: windowHeight * 0.08,
              padding: 2,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'red',
              borderRadius: 8,
              flexDirection: 'row',
            }}>
            <Text style={{color: 'white', fontSize: 20, fontWeight: '600'}}>
              Sonuçları Filterle
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
