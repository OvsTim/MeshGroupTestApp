import {DriverResponse, Image} from './types';
import {axiosApiInstance, baseUrl} from './index';
export const PAGE_SIZE = 50;
export const getImage = () =>
  axiosApiInstance.get<Image>('https://picsum.photos/id/0/info', {});

export const getImageError = () =>
  axiosApiInstance.get<Image>('https://picsum.photos/id/-1/info', {});

export const getDrivers = (offset: number) =>
  axiosApiInstance.get<DriverResponse>(`${baseUrl}/f1/drivers.json`, {
    params: {
      limit: PAGE_SIZE,
      offset,
    },
  });
