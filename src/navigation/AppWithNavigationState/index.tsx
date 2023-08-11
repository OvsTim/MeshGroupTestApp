import {NavigationContainer} from '@react-navigation/native';
import useAppWithNavigationStateController from 'navigation/AppWithNavigationState/controller';
import MainNavigator from 'navigation/MainNavigator';

const AppWithNavigationState = () => {
  const {ref, theme, onStateChange, onReady} =
    useAppWithNavigationStateController();
  return (
    <NavigationContainer
      theme={theme}
      ref={ref}
      onReady={onReady}
      onStateChange={onStateChange}>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default AppWithNavigationState;
