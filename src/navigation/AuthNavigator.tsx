import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import DriverDetail from 'AuthLayer/DriverDetail';
import DriverList from 'AuthLayer/DriverList';

export type AuthStackParamList = {
  DriverList: undefined;
  DriverDetail: {id: string};
};

const Stack = createStackNavigator<AuthStackParamList>();

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AuthStackParamList {}
  }
}
const AuthNavigator = () => (
  <>
    <Stack.Screen
      name={'DriverList'}
      component={DriverList}
      options={{title: 'Driver List'}}
    />
    <Stack.Screen name={'DriverDetail'} component={DriverDetail} />
  </>
);

export default AuthNavigator;
