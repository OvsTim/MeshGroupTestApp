import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import Auth from '../components/AuthLayer/Auth';

export type AuthStackParamList = {
  Auth: undefined;
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
      name={'Auth'}
      component={Auth}
      options={{title: 'OneScreen'}}
    />
  </>
);

export default AuthNavigator;
