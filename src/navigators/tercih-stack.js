import {SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  TercihScreen,
} from '../screens';

export const TercihStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView style={{flex: 1}}>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          >
          <Stack.Screen name="tercih-screen" component={TercihScreen} />

        </Stack.Navigator>
    </SafeAreaView>
  );
};
