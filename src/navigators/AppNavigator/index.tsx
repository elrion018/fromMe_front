import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginPage, RegisterPage} from '../../pages/mainPages';

export enum AppNavigatorPagesAndStacks {
  Login = 'Login',
  Register = 'Register',
}

export type AppNavigatorParamList = {
  Login: undefined;
  Register: undefined;
};

const AppNavigatorStack = createStackNavigator<AppNavigatorParamList>();

const AppNavigator: React.FunctionComponent = () => {
  return (
    <AppNavigatorStack.Navigator initialRouteName={'Register'}>
      <AppNavigatorStack.Screen
        name={AppNavigatorPagesAndStacks.Login}
        component={LoginPage}
      />
      <AppNavigatorStack.Screen
        name={AppNavigatorPagesAndStacks.Register}
        component={RegisterPage}
      />
    </AppNavigatorStack.Navigator>
  );
};

export default AppNavigator;
