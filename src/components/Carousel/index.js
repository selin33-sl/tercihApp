import React, {useRef} from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import style from './style';
// import Carousel from 'react-native-reanimated-carousel';
import {Carousel} from 'react-native-snap-carousel';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = SLIDER_WIDTH / 2;

export const Carousell = ({school}) => {
  const isCarousel = useRef(null);

  const images = [
    {
      url: 'https://picsum.photos/200',
      name: 'Okul Adı 1',
      department: 'Bilgisayar Mühendisliği',
    },
    {
      url: 'https://picsum.photos/200',
      name: 'Okul Adı 2',
      department: 'Bilgisayar Mühendisliği',
    },
    {
      url: 'https://picsum.photos/200',
      name: 'Okul Adı 3',
      department: 'Bilgisayar Mühendisliği',
    },
    {
      url: 'https://picsum.photos/200',
      name: 'Okul Adı 4',
      department: 'Bilgisayar Mühendisliği',
    },
    {
      url: 'https://picsum.photos/200',
      name: 'Okul Adı 5',
      department: 'Bilgisayar Mühendisliği',
    },
    {
      url: 'https://picsum.photos/200',
      name: 'Okul Adı 6',
      department: 'Bilgisayar Mühendisliği',
    },
  ];

  const CarouselCardItem = ({item, index}) => (
    console.log(item.url),
    (
      <View style={style.cart} key={index}>
        <Image source={{uri: item.url}} style={style.image} />
        <Text style={style.textSchool}>
          {school ? item.name : item.department}
        </Text>
        {school ? <Text style={style.textCity}>Selçuklu / Konya</Text> : null}
      </View>
    )
  );

  return (
    <View style={style.container}>
      <Carousel
        autoplayDelay={500}
        autoplayInterval={3000}
        layout={'default'}
        layoutCardOffset={`9`}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        ref={isCarousel}
        data={images}
        renderItem={CarouselCardItem}
        activeSlideAlignment={'start'}
      />
    </View>
  );
};
