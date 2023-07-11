import {createSlice} from '@reduxjs/toolkit';
import { getTercihProcess} from '../../api';

export const tercihSlice = createSlice({
  name: 'tercih',
  initialState: {
    isLoading: {},
    error: undefined,
    status: {},
    message: {},
    data: undefined,
  },
  reducers: {
    resetTercih: state => {
      state.data = undefined;
      state.isLoading = {};
      state.error = undefined;
      state.status = undefined;
      state.message = {};
    },
  },
  extraReducers: {
    [getTercihProcess.pending]: state => {
      state.isLoading = {...state.isLoading, getTercihProcess: true};
    },
   
    [getTercihProcess.fulfilled]: (state, action) => {
      state.isLoading = { ...state.isLoading, getTercihProcess: false };
      state.status = action.payload;
      state.data = action.payload; // Tüm veriler state.data içine ekleniyor
    },
    
    [getTercihProcess.rejected]: (state, action) => {
      state.isLoading = {...state.isLoading, getTercihProcess: false};
      state.status = action.payload;
      state.error = action.error;
    },
  },
});
export const {resetTercih} = tercihSlice.actions;
export default tercihSlice.reducer;
