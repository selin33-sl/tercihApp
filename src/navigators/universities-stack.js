import {SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  UniversitiesScreen, UniversityDetail,
} from '../screens';

export const UniversitiesStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView style={{flex: 1}}>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          >
          <Stack.Screen name="universities-screen" component={UniversitiesScreen} />
          <Stack.Screen name="universitydetail-screen" component={UniversityDetail} />

        </Stack.Navigator>
    </SafeAreaView>
  );
};
