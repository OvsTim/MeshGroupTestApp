import {Image} from './types';
import {axiosApiInstance} from './index';

export const getImage = () =>
  axiosApiInstance.get<Image>('https://picsum.photos/id/0/info', {});

export const getImageError = () =>
  axiosApiInstance.get<Image>('https://picsum.photos/id/-1/info', {});
