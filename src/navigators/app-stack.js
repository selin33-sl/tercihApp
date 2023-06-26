import {SafeAreaView, StatusBar} from 'react-native';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  HomeScreen,
  TercihScreen,
  UniversitiesScreen,
  UniversityDetail,
} from '../screens';
import Example from '../screens/deneme';

export const AppStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="universities-screen">
          <Stack.Screen name="home-screen" component={HomeScreen} />
          <Stack.Screen name="example" component={Example} />
          <Stack.Screen name="tercih-screen" component={TercihScreen} />
          <Stack.Screen
            name="universities-screen"
            component={UniversitiesScreen}
          />
          <Stack.Screen
            name="universitydetail-screen"
            component={UniversityDetail}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};
