import {createSlice} from '@reduxjs/toolkit';
import {getDepartmentProcess} from '../../api';

export const departmentsSlice = createSlice({
  name: 'departments',
  initialState: {
    isLoading: {},
    error: undefined,
    status: {},
    message: {},
    data: undefined,
  },
  reducers: {
    resetDepartments: state => {
      state.data = undefined;
      state.isLoading = {};
      state.error = undefined;
      state.status = undefined;
      state.message = {};
    },
  },
  extraReducers: {
    [getDepartmentProcess.pending]: state => {
      state.isLoading = {...state.isLoading, getDepartmentProcess: true};
    },
   
    [getDepartmentProcess.fulfilled]: (state, action) => {
      state.isLoading = { ...state.isLoading, getDepartmentProcess: false };
      state.status = action.payload;
      state.data = action.payload; // Tüm veriler state.data içine ekleniyor
    },
    
    [getDepartmentProcess.rejected]: (state, action) => {
      state.isLoading = {...state.isLoading, getDepartmentProcess: false};
      state.status = action.payload;
      state.error = action.error;
    },
  },
});
export const {resetDepartments} = departmentsSlice.actions;
export default departmentsSlice.reducer;
