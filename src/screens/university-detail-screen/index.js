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

 const bolumler = [
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
  
  const route = useRoute();

 
  const {item} = route.params;


  const dispatch = useDispatch();
  //  const {data,status} = useSelector(state => state.departments);
  // console.log(data, 'detayyyyyyyyyyyyyyyyyyyyyyyyyy');
  // console.log(id,"iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
  console.log(item,"itemmmmmmmmmmmmmmmmmmmmmmmdjfkjfkljsdlkfj");
  console.log(item.uniAdi,"hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh");
 
  //  useEffect(() => {
  //    dispatch(getDepartmentProcess({id}));
  // }, []);

  // console.log(data.length(),"üüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüü");

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
            marginVertical: '1%',
            borderRadius: 30,
            justifyContent: 'center',
            paddingHorizontal: '5%',
            borderWidth: 1,
            borderColor: '#00D1FF',
          }}>
          <Veri
            text={item.uniAdi}
            iconName={'home-city'}
            fontWeight={'bold'}
            fontSize={20}
          />
          <Veri
            text={item.sehir}
            iconName={'map-marker-radius-outline'}
            fontSize={18}
          />
          <Veri text={item.uniTur} iconName={'grain'} fontSize={20} />
          <Veri
            text={item.kurulusYili}
            iconName={'calendar-month'}
            fontSize={18}
          />
          <Veri text={item.webAdresi} iconName={'web'} fontSize={18} />
          <Veri text={item.eposta} iconName={'email-outline'} fontSize={18} />
          <Veri text={item.telefon} iconName={'phone-in-talk'} fontSize={18} />
          <Veri text={item.fax} iconName={'fax'} fontSize={18} />
          <Veri
            text={item.adres}
            iconName={'map-marker-radius-outline'}
            fontSize={16}
          />
          <Veri text={item.rektorAdi} iconName={'account'} fontSize={20} />
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
            data={bolumler},
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
          width:windowWidth*0.8,
          fontSize: fontSize,
          fontWeight: fontWeight,
          color: 'white',
        }}>
        {text}
      </Text>
    </View>
  );
};
