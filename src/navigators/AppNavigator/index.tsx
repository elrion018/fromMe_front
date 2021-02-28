import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginPage, RegisterPage} from '../../pages/mainPages';

const AppNavigatorStack = createStackNavigator();

export enum AppNavigatorPagesAndStacks {
  Login = 'Login',
  Register = 'Register',
}

export type AppNavigatorParamList = {
  Login: undefined;
  Register: undefined;
};

const AppNavigator: React.FunctionComponent<AppNavigatorParamList> = () => {
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
