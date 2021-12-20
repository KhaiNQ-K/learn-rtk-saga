import { City, ListResponse } from 'models';
import axiosClient from './axiosClient';

export const cityApi = {
  getAll(): Promise<ListResponse<City>> {
    const url = '/cities';
    return axiosClient.get(url, { params: { _page: 1, _limit: 10 } });
  },
};
