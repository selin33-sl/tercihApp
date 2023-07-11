import React from 'react';
import {AppStack} from './navigators';
import {Provider} from 'react-redux';
import {store} from './redux/store';

export const App = () => {
  return (
    <Provider store={store}>
      <AppStack />
    </Provider>
  );
};
