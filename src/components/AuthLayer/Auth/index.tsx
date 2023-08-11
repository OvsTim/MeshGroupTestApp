import {FC} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {Button, Text, ThrottledSearchInput} from 'common/components';
import useAuthController from '../Auth/controller';

type Props = {};
const Auth: FC<Props> = () => {
  const {
    token,
    loading,
    getImageRequest,
    getImageErrorRequest,
    getImageValidationErrorRequest,
    counter,
    t,
    onPressChangeLanguage,
    onPressAuth,
    onPressCounter,
  } = useAuthController();

  return (
    <View style={styles.container}>
      <StatusBar
        translucent={false}
        backgroundColor={'rgba(0,0,0,0.1)'}
        barStyle="dark-content"
      />
      <Text font={'SF22'} color={'black'}>
        {'Auth Screen'}
      </Text>
      <ThrottledSearchInput value={''} />
      <Text>{token}</Text>
      <Text font={'SF24'} color={'blue'}>
        {'counter  ' + counter}
      </Text>
      <Text font={'SF17'} color={'grey_1'}>
        {t('main:screen_title')}
      </Text>
      <Text font={'SF13'} color={'black'}>
        {t('main:localization_sample')}
      </Text>
      <Button
        text={'Increment counter'}
        onPress={onPressCounter}
        style={styles.button}
      />
      <Button
        text={'Change language'}
        onPress={onPressChangeLanguage}
        style={styles.button}
      />
      <Button
        text={'setToken and Go App'}
        onPress={onPressAuth}
        style={styles.button}
      />
      <Button
        style={styles.button}
        text={'fetchImage'}
        loading={loading}
        onPress={getImageRequest}
      />
      <Button
        style={styles.button}
        text={'Error'}
        onPress={getImageErrorRequest}
      />
      <Button
        style={styles.button}
        text={'Validation Error'}
        onPress={getImageValidationErrorRequest}
      />
    </View>
  );
};

export default Auth;

const styles = StyleSheet.create({
  button: {width: '100%'},
  container: {alignItems: 'center', flex: 1, justifyContent: 'space-around'},
});
