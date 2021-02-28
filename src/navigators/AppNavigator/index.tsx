import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {HomeNavigator} from '../../navigators';
import {LoginPage, RegisterPage} from '../../pages/mainPages';

export enum AppNavigatorPagesAndStacks {
  Login = 'Login',
  Register = 'Register',
  HomeStack = 'HomeStack',
}

export type AppNavigatorParamList = {
  Login: undefined;
  Register: undefined;
  HomeStack: undefined;
};

const AppNavigatorStack = createStackNavigator<AppNavigatorParamList>();

const AppNavigator: React.FunctionComponent = () => {
  return (
    <AppNavigatorStack.Navigator
      initialRouteName={AppNavigatorPagesAndStacks.HomeStack}>
      <AppNavigatorStack.Screen
        name={AppNavigatorPagesAndStacks.Login}
        component={LoginPage}
      />
      <AppNavigatorStack.Screen
        name={AppNavigatorPagesAndStacks.Register}
        component={RegisterPage}
      />
      <AppNavigatorStack.Screen
        name={AppNavigatorPagesAndStacks.HomeStack}
        component={HomeNavigator}
      />
    </AppNavigatorStack.Navigator>
  );
};

export default AppNavigator;
