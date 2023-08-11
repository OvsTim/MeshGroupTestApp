import {useCallback, useState} from 'react';
import {Alert} from 'react-native';
import {unwrapResult} from '@reduxjs/toolkit';
import {useAppDispatch, useAppSelector} from 'appRedux';
import {
  fetchImage,
  fetchImagesWithError,
  fetchImagesWithValidationError,
} from 'appRedux/thunks';
import {setAuthData} from 'appRedux/UserDataSlice';
import {useHandleError} from 'common/hooks';
import {useTranslation} from 'react-i18next';

const useAuthController = () => {
  const dispatch = useAppDispatch();
  const token = useAppSelector(state => state.data.token);
  const {t, i18n} = useTranslation(['main']);
  const {setError} = useHandleError();

  const [loading, setLoading] = useState<boolean>(false);
  const [counter, setCounter] = useState<number>(1);

  const onPressChangeLanguage = () =>
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');

  const onPressCounter = () => setCounter(prevState => prevState + 1);

  const onPressAuth = () =>
    dispatch(setAuthData({token: 'new token', user_id: '123'}));

  const getImageRequest = useCallback(() => {
    setLoading(true);
    dispatch(fetchImage())
      .then(unwrapResult)
      .then(originalPromiseResult => {
        Alert.alert(
          'originalPromiseResult',
          JSON.stringify(originalPromiseResult),
        );
      })
      .catch(setError)
      .finally(() => setTimeout(setLoading, 1000, false));
  }, [dispatch, setError]);

  const getImageErrorRequest = useCallback(() => {
    dispatch(fetchImagesWithError()).then(unwrapResult).catch(setError);
  }, [dispatch, setError]);

  const getImageValidationErrorRequest = useCallback(() => {
    dispatch(fetchImagesWithValidationError())
      .then(unwrapResult)
      .catch(setError);
  }, [dispatch, setError]);

  return {
    token,
    counter,
    t,
    loading,
    onPressChangeLanguage,
    onPressAuth,
    onPressCounter,
    getImageRequest,
    getImageErrorRequest,
    getImageValidationErrorRequest,
  };
};

export default useAuthController;
