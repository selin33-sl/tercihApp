import {createSlice} from '@reduxjs/toolkit';
import {getUniversitiesProcess} from '../../api';

export const universitiesSlice = createSlice({
  name: 'universities',
  initialState: {
    isLoading: {},
    error: undefined,
    status: {},
    message: {},
    data: undefined,
  },
  reducers: {
    resetUniversities: state => {
      state.data = undefined;
      state.isLoading = {};
      state.error = undefined;
      state.status = {};
      state.message = {};
    },
  },
  extraReducers: {
    [getUniversitiesProcess.pending]: state => {
      state.isLoading = {...state.isLoading, getUniversitiesProcess: true};
    },
    [getUniversitiesProcess.fulfilled]: (state, action) => {
      state.isLoading = {...state.isLoading, getUniversitiesProcess: false};
      state.data = action.payload;
    },
    [getUniversitiesProcess.rejected]: (state, action) => {
      state.isLoading = {...state.isLoading, getUniversitiesProcess: false};
      state.error = action.error;
    },
  },
});
export const {resetUniversities} = universitiesSlice.actions;
export default universitiesSlice.reducer;
