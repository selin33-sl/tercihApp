import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://tercih-robotu-apii.onrender.com/api/universiteler/', // Yerel sunucunuzun IP adresini ve portunu buraya girin
});

const getUniversitiesProcess = createAsyncThunk(
  'universities/getUniversitiesProcess',
  async () => {
    const res = await api.get('get-all-universite-names');
    // .then(function (res) {
    //   console.log(res, 'asdkaskd');
    // })
    // .catch(err => {
    //   console.log(err.response, 'error');
    // });
    return res.data;
  },
);

const getDepartmentProcess = createAsyncThunk(
  'departments/getDepartmentProcess',
  async data => {
    const {id} = data;
    const params = new FormData();
    params.append('_id', id);
    const res = await api.post('filter-universite-details', params);
    // .then(function (res) {
    //   console.log(res, 'asdkaskd');
    // })
    // .catch(err => {
    //   console.log(err.response, 'error');
    // });
    return res.data;
  },
);

export {getUniversitiesProcess, getDepartmentProcess};
