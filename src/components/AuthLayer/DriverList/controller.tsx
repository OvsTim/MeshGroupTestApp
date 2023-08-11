import {useCallback, useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {unwrapResult} from '@reduxjs/toolkit';
import {PAGE_SIZE} from 'api/requests';
import {useAppDispatch, useAppSelector} from 'appRedux';
import {getDrivers} from 'appRedux/thunks';
import {AuthStackParamList} from 'navigation/AuthNavigator';
import {AppError} from 'utils/handler';

const useAuthController = () => {
  const dispatch = useAppDispatch();
  const driverList = useAppSelector(state => state.data.drivers || []);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);
  const [offset, setOffset] = useState<number>(0);
  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();

  useEffect(() => {
    setLoading(true);
    dispatch(getDrivers(0))
      .then(unwrapResult)
      .then(_ => {})
      .catch((er: AppError) => {
        Alert.alert(er.name, er.message);
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  const onEndReached = useCallback(() => {
    if (loading || loadingMore) {
      return;
    }

    setLoadingMore(true);
    let newOffset = offset + PAGE_SIZE;
    dispatch(getDrivers(newOffset))
      .then(unwrapResult)
      .then(_ => {
        setOffset(prevState => prevState + PAGE_SIZE);
      })
      .catch((er: AppError) => {
        Alert.alert(er.name, er.message);
      })
      .finally(() => setLoadingMore(false));
  }, [dispatch, loading, loadingMore, offset]);

  const onDriverPressed = useCallback(
    (id: string) => {
      navigation.navigate('DriverDetail', {id});
    },
    [navigation],
  );

  return {
    loading,
    driverList,
    loadingMore,
    onEndReached,
    onDriverPressed,
  };
};

export default useAuthController;
