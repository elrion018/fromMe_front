import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const HomeNavigatorStack = createStackNavigator();

const HomeNavigator: React.FunctionComponent = () => {
  return <HomeNavigatorStack.Navigator></HomeNavigatorStack.Navigator>;
};

export default HomeNavigator;
