import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomePage} from '../../pages/homePages';

export enum HomeNavigatorPagesAndStacks {
  Home = 'Home',
}

export type HomeNavigatorParamList = {
  Home: undefined;
};

const HomeNavigatorStack = createStackNavigator<HomeNavigatorParamList>();

const HomeNavigator: React.FunctionComponent = () => {
  return (
    <HomeNavigatorStack.Navigator
      initialRouteName={HomeNavigatorPagesAndStacks.Home}>
      <HomeNavigatorStack.Screen
        name={HomeNavigatorPagesAndStacks.Home}
        component={HomePage}
      />
    </HomeNavigatorStack.Navigator>
  );
};

export default HomeNavigator;
