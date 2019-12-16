/*
 * @Author: liub
 * @Date: 2019-12-13 16:45:52
 * @LastEditors: liub
 * @LastEditTime: 2019-12-14 15:38:58
 */
import React from 'react';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {createDrawerNavigator} from 'react-navigation-drawer';
import HomePage from '../pages/HomePage';
import WelcomePage from '../pages/WelcomePage';
import DetailPage from '../pages/DetailPage';
const MainNavigator = createStackNavigator(
  {
    Home: HomePage,
    Detail: DetailPage,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      header: null,
    },
  },
);
const InitNavigator = createStackNavigator({
  Welcome: {
    screen: WelcomePage,
    navigationOptions: {
      header: null,
    },
  },
});
const AppNavigator = createSwitchNavigator(
  {
    Main: MainNavigator,
    Init: InitNavigator,
  },
  {
    initialRouteName: 'Init',
  },
);
export default createAppContainer(AppNavigator);
