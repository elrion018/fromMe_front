import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MainPage} from '../../pages';

const AppNavigatorStack = createStackNavigator();

export enum AppNavigatorSubStacks {
  Main = 'Main',
}

export type AppNavigatorParamList = {
  Main: undefined;
};

const AppNavigator: React.FunctionComponent<AppNavigatorParamList> = () => {
  return (
    <AppNavigatorStack.Navigator initialRouteName={'Main'}>
      <AppNavigatorStack.Screen
        name={AppNavigatorSubStacks.Main}
        component={MainPage}
      />
    </AppNavigatorStack.Navigator>
  );
};

export default AppNavigator;
