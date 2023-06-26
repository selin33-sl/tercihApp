import React from 'react';
import {AppStack} from './navigators';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export const App = () => {
  return (
    <Provider store={store}>
      <AppStack />
    </Provider>
  );
};
