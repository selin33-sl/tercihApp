import React from 'react';
import {requireNativeComponent} from 'react-native';

const RNGestureHandlerRootView = requireNativeComponent(
  'RNGestureHandlerRootView',
);

export default function GestureHandlerRootView({children}) {
  return <RNGestureHandlerRootView>{children}</RNGestureHandlerRootView>;
}
