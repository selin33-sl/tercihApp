import { createAsyncThunk } from '@reduxjs/toolkit';
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
    const { id } = data;
    try {
      const res = await api.post('filter-universite-details', { _id: id });
      return res.data;
    } catch (error) {
      console.log(error.response, "error");
      throw error; // Hata durumunda işlemi yönetmek için hata yeniden fırlatılabilir
    }
  },
);

const getTercihProcess = createAsyncThunk(
  'tercih/getTercihProcess',
  async data => {
    const { enKucukPuan, enBuyukPuan, programAdi, universiteAdi, puanTuru, universiteTuru } = data;
    const params = new FormData();
    params.append('enKucukPuan', enKucukPuan);
    params.append('enBuyukPuan', enBuyukPuan);
    params.append('programAdi', programAdi);
    params.append('universiteAdi', universiteAdi);
    params.append('puanTuru', puanTuru);
    params.append('universiteTuru', universiteTuru);
    try {
      const res = await api.post('filter-universiteler', params);
      return res.data;
    } catch (error) {
      console.log(error.response, "error");
      throw error; // Hata durumunda işlemi yönetmek için hata yeniden fırlatılabilir
    }
  },
);


export { getUniversitiesProcess, getDepartmentProcess ,getTercihProcess};
