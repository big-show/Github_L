/*
 * @Author: liub
 * @Date: 2019-12-12 19:26:10
 * @LastEditors: liub
 * @LastEditTime: 2019-12-14 11:11:35
 */
/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import HomePage from './src/pages/HomePage';
import WelcomePage from './src/pages/WelcomePage';
import {name as appName} from './app.json';
import AppNavigator from './src/navigator/AppNavigator';
AppRegistry.registerComponent(appName, () => AppNavigator);
