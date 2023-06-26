import React, {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  TextInput,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Cart, Header} from '../../components';
import {useNavigation} from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// export const data = [
//   {
//     id: 1,
//     name: 'Selçuk Üniversitesi 1',
//     loc: 'Selçuklu / İstanbul',
//     uniTuru: 'Devlet',
//     kTarihi: '20.20.2020',
//     web: 'https://selcuk.edu.tr/',
//     eposta: 'selcuk@edu.tr',
//     tel: '0354 000 00 00',
//     fax: '0354 000 00 00',
//     adres:
//       'Alaeddin Keykubat Yerleşkesi, Akademi Mah. Yeni İstanbul Cad. No:369 Posta Kodu:42130 Selçuklu-Konya / TÜRKİYE.',
//     rektörAdı: 'Selin ÇALIŞKAN',
//   },
//   {
//     id: 2,
//     name: 'Selçuk Üniversitesi 2',
//     loc: 'Selçuklu / Konya',
//     uniTuru: 'Devlet',
//     kTarihi: '20.20.2020',
//     web: 'https://selcuk.edu.tr/',
//     eposta: 'selcuk@edu.tr',
//     tel: '0354 000 00 00',
//     fax: '0354 000 00 00',
//     adres:
//       'Alaeddin Keykubat Yerleşkesi, Akademi Mah. Yeni İstanbul Cad. No:369 Posta Kodu:42130 Selçuklu-Konya / TÜRKİYE.',
//     rektörAdı: 'Selin ÇALIŞKAN',
//   },
//   {
//     id: 3,
//     name: 'Selçuk Üniversitesi 3',
//     loc: 'Selçuklu / Konya',
//     uniTuru: 'Devlet',
//     kTarihi: '20.20.2020',
//     web: 'https://selcuk.edu.tr/',
//     eposta: 'selcuk@edu.tr',
//     tel: '0354 000 00 00',
//     fax: '0354 000 00 00',
//     adres:
//       'Alaeddin Keykubat Yerleşkesi, Akademi Mah. Yeni İstanbul Cad. No:369 Posta Kodu:42130 Selçuklu-Konya / TÜRKİYE.',
//     rektörAdı: 'Selin ÇALIŞKAN',
//   },
//   {
//     id: 4,
//     name: 'Selçuk Üniversitesi 4',
//     loc: 'Selçuklu / Konya',
//     uniTuru: 'Devlet',
//     kTarihi: '20.20.2020',
//     web: 'https://selcuk.edu.tr/',
//     eposta: 'selcuk@edu.tr',
//     tel: '0354 000 00 00',
//     fax: '0354 000 00 00',
//     adres:
//       'Alaeddin Keykubat Yerleşkesi, Akademi Mah. Yeni İstanbul Cad. No:369 Posta Kodu:42130 Selçuklu-Konya / TÜRKİYE.',
//     rektörAdı: 'Selin ÇALIŞKAN',
//   },
//   {
//     id: 5,
//     name: 'Selçuk Üniversitesi 5',
//     loc: 'Selçuklu / Konya',
//     uniTuru: 'Devlet',
//     kTarihi: '20.20.2020',
//     web: 'https://selcuk.edu.tr/',
//     eposta: 'selcuk@edu.tr',
//     tel: '0354 000 00 00',
//     fax: '0354 000 00 00',
//     adres:
//       'Alaeddin Keykubat Yerleşkesi, Akademi Mah. Yeni İstanbul Cad. No:369 Posta Kodu:42130 Selçuklu-Konya / TÜRKİYE.',
//     rektörAdı: 'Selin ÇALIŞKAN',
//   },
//   {
//     id: 6,
//     name: 'Selçuk Üniversitesi 5',
//     loc: 'Selçuklu / Konya',
//     uniTuru: 'Devlet',
//     kTarihi: '20.20.2020',
//     web: 'https://selcuk.edu.tr/',
//     eposta: 'selcuk@edu.tr',
//     tel: '0354 000 00 00',
//     fax: '0354 000 00 00',
//     adres:
//       'Alaeddin Keykubat Yerleşkesi, Akademi Mah. Yeni İstanbul Cad. No:369 Posta Kodu:42130 Selçuklu-Konya / TÜRKİYE.',
//     rektörAdı: 'Selin ÇALIŞKAN',
//   },
//   {
//     id: 7,
//     name: 'Selçuk Üniversitesi 5',
//     loc: 'Selçuklu / Konya',
//     uniTuru: 'Devlet',
//     kTarihi: '20.20.2020',
//     web: 'https://selcuk.edu.tr/',
//     eposta: 'selcuk@edu.tr',
//     tel: '0354 000 00 00',
//     fax: '0354 000 00 00',
//     adres:
//       'Alaeddin Keykubat Yerleşkesi, Akademi Mah. Yeni İstanbul Cad. No:369 Posta Kodu:42130 Selçuklu-Konya / TÜRKİYE.',
//     rektörAdı: 'Selin ÇALIŞKAN',
//   },
//   {
//     id: 8,
//     name: 'Selçuk Üniversitesi 5',
//     loc: 'Selçuklu / Konya',
//     uniTuru: 'Devlet',
//     kTarihi: '20.20.2020',
//     web: 'https://selcuk.edu.tr/',
//     eposta: 'selcuk@edu.tr',
//     tel: '0354 000 00 00',
//     fax: '0354 000 00 00',
//     adres:
//       'Alaeddin Keykubat Yerleşkesi, Akademi Mah. Yeni İstanbul Cad. No:369 Posta Kodu:42130 Selçuklu-Konya / TÜRKİYE.',
//     rektörAdı: 'Selin ÇALIŞKAN',
//   },
// ];
import {useDispatch, useSelector} from 'react-redux';
import {getUniversitiesProcess} from '../../api';

export const UniversitiesScreen = () => {
  const dispatch = useDispatch();
  const {data} = useSelector(state => state.universities);

  useEffect(() => {
    dispatch(getUniversitiesProcess());
  }, []);

  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  const navigation = useNavigation();

  // const handleSearch = text => {
  //   setSearchText(text);
  //   const filtered = data.filter(
  //     item =>
  //       item.uniAdi.toLowerCase().includes(text.toLowerCase()) ||
  //       item.sehir.toLowerCase().includes(text.toLowerCase()),
  //   );
  //   setFilteredData(filtered);
  // };

  const renderItem = ({item}) => (
    <Cart text1={item.uniAdi} text2={item.sehir} id={item._id} />
  );
  return (
    <View style={{flex: 1, backgroundColor: '#000E36'}}>
      <Header text={'Üniversiteler'} />
      <View style={{paddingHorizontal: '5%', flex: 1}}>
        <TextInput
          style={{
            height: '7%',
            borderColor: 'gray',
            borderWidth: 1,
            paddingHorizontal: 10,
            borderRadius: 5,
          }}
          placeholder="Üniversite veya Bölge Ara..."
          onChangeText={null}
          value={searchText}
        />
        <View style={{flex: 1, marginVertical: '3%'}}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </View>
  );
};
