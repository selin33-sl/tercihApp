import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';

import logger from 'redux-logger';

import {universitiesSlice, departmentsSlice} from './slice';

const reducer = combineReducers({
  universities: universitiesSlice,
  departments: departmentsSlice,
});

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});
