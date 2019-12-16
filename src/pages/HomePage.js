/*
 * @Author: liub
 * @Date: 2019-12-12 19:38:09
 * @LastEditors: liub
 * @LastEditTime: 2019-12-14 16:41:29
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import NavigationUtils from '../utils/NavigationUtils';
import DynamicNavigator from '../navigator/DynamicNavigator';
const HomePage = props => {
  NavigationUtils.homeNavigation = props.navigation;
  return <DynamicNavigator />;
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 20,
  },
});

export default HomePage;
