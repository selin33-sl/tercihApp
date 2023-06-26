import {View, Text, Dimensions, FlatList, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import {data} from '../universities-screen';
import {Cart, Header} from '../../components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {getDepartmentProcess} from '../../api';
import {useRoute} from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const bolumler = [
  {
    id: 1,
    name: 'Bilgisayar Mühendisliği',
    puan: '472,48',
  },
  {
    id: 2,
    name: 'Bilgisayar Mühendisliği',
    puan: '472,48',
  },
  {
    id: 3,
    name: 'Bilgisayar Mühendisliği',
    puan: '472,48',
  },
  {
    id: 4,
    name: 'Bilgisayar Mühendisliği',
    puan: '472,48',
  },
  {
    id: 5,
    name: 'Bilgisayar Mühendisliği',
    puan: '472,48',
  },
];

export const UniversityDetail = () => {
  // Find the item with the matching ID from your data array
  // const selectedItem = data.find(item => item.id === itemId);
  const route = useRoute();
  const {id} = route.params;
  const dispatch = useDispatch();
  const {data} = useSelector(state => state.departments);
  console.log(data, 'dataaaaaaaaaaa');

  useEffect(() => {
    dispatch(getDepartmentProcess(id));
  }, []);

  // const renderItem = ({item}) => <Cart text1={item.uniAdi} id={item._id} />;

  return (
    <View style={{flex: 1, backgroundColor: '#000E36'}}>
      <Header text={'Üniversite Bilgileri'} back={true} />
      <ScrollView style={{flex: 1, showsVerticalScrollIndicator: false}}>
        <View
          style={{
            width: windowWidth * 0.96,
            height: windowHeight * 0.4,
            marginHorizontal: '2%',
            marginVertical: '5%',
            borderRadius: 30,
            padding: '5%',
            justifyContent: 'center',
            paddingHorizontal: '8%',
            borderWidth: 1,
            borderColor: '#00D1FF',
          }}>
          {/* <Veri
            text={data.uniAdi}
            iconName={'home-city'}
            fontWeight={'bold'}
            fontSize={20}
          />
          <Veri
            text={data.sehir}
            iconName={'map-marker-radius-outline'}
            fontSize={18}
          />
          <Veri text={data.uniTur} iconName={'grain'} fontSize={20} />
          <Veri
            text={data.kurulusYili}
            iconName={'calendar-month'}
            fontSize={18}
          />
          <Veri text={data.webAdresi} iconName={'web'} fontSize={18} />
          <Veri text={data.eposta} iconName={'email-outline'} fontSize={18} />
          <Veri text={data.telefon} iconName={'phone-in-talk'} fontSize={18} />
          <Veri text={data.fax} iconName={'fax'} fontSize={18} />
          <Veri
            text={data.adres}
            iconName={'map-marker-radius-outline'}
            fontSize={16}
          />
          <Veri text={data.rektorAdi} iconName={'account'} fontSize={20} /> */}
        </View>

        <View style={{flex: 1, marginBottom: '1%', paddingHorizontal: '5%'}}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontWeight: '500',
              marginLeft: '1%',
            }}>
            Bölümler
          </Text>
          {/* <FlatList
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            data={bolumler}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
          /> */}
        </View>
      </ScrollView>
    </View>
  );
};

const Veri = ({text, iconName, fontWeight, fontSize}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Icon
        name={iconName}
        size={windowHeight * 0.03}
        color={'#00D1FF'}
        style={{marginRight: '3%'}}
      />
      <Text
        style={{
          fontSize: fontSize,
          fontWeight: fontWeight,
          color: 'white',
        }}>
        {text}
      </Text>
    </View>
  );
};
