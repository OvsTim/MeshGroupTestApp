import {createAsyncThunk} from '@reduxjs/toolkit';
import {imageErrorScheme, imageScheme} from 'scheme/image';
import {AppError, handleBaseError} from 'utils/handler';
import * as API from '../API/requests';

export const reset = createAsyncThunk('reset', () => {});
export const fetchImagesWithError = createAsyncThunk(
  'users/getImages',
  async (_, {rejectWithValue}) => {
    try {
      const response = await API.getImageError();
      return imageScheme.validateSync(response.data);
    } catch (er) {
      const error: AppError = handleBaseError(er);
      return rejectWithValue(error);
    }
  },
);

export const fetchImagesWithValidationError = createAsyncThunk(
  'users/getImages',
  async (_, {rejectWithValue}) => {
    let url = '';
    try {
      const response = await API.getImage();
      url = response.request.responseURL;
      return imageErrorScheme.validateSync(response.data);
    } catch (er) {
      const error: AppError = handleBaseError(er, url);
      return rejectWithValue(error);
    }
  },
);

export const fetchImage = createAsyncThunk(
  'users/getImage',
  async (_, {rejectWithValue}) => {
    try {
      const response = await API.getImage();
      return imageScheme.validateSync(response.data);
    } catch (er) {
      const error: AppError = handleBaseError(er);
      return rejectWithValue(error);
    }
  },
);