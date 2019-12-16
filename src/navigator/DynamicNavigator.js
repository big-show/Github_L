/*
 * @Author: liub
 * @Date: 2019-12-12 19:38:09
 * @LastEditors: liub
 * @LastEditTime: 2019-12-14 17:44:35
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import NavigationUtils from '../utils/NavigationUtils';
import PopularPage from '../pages/PopularPage';
import TrendingPage from '../pages/TrendingPage';
import FavoritePage from '../pages/FavoritePage';
import MyPage from '../pages/MyPage';
const BottomTabs = {
  PopularPage: {
    screen: PopularPage,
    navigationOptions: {
      tabBarLabel: '最热',
      tabBarIcon: ({tintColor, focused}) => (
        <MaterialIcons name="whatshot" size={26} style={{color: tintColor}} />
      ),
    },
  },
  TrendingPage: {
    screen: TrendingPage,
    navigationOptions: {
      tabBarLabel: '趋势',
      tabBarIcon: ({tintColor, focused}) => (
        <Ionicons name="md-trending-up" size={26} style={{color: tintColor}} />
      ),
    },
  },
  FavoritePage: {
    screen: FavoritePage,
    navigationOptions: {
      tabBarLabel: '收藏',
      tabBarIcon: ({tintColor, focused}) => (
        <MaterialIcons name="favorite" size={26} style={{color: tintColor}} />
      ),
    },
  },
  MyPage: {
    screen: MyPage,
    navigationOptions: {
      tabBarLabel: '我的',
      tabBarIcon: ({tintColor, focused}) => (
        <AntDesign name="user" size={26} style={{color: tintColor}} />
      ),
    },
  },
};
const DynamicNavigator = props => {
  const {PopularPage, TrendingPage, FavoritePage, MyPage} = BottomTabs;
  const tabs = {PopularPage, TrendingPage, FavoritePage, MyPage};
  const BottomTabNavigator = createAppContainer(
    createBottomTabNavigator(tabs, {
      tabBarComponent: TabBarComponment,
    }),
  );
  return <BottomTabNavigator />;
};
const TabBarComponment = props => {
  console.log('state', props.navigation.state);
  const {routes, index} = props.navigation.state;
  let tintColor;
  if (routes[index].params) tintColor = routes[index].params.tintColor;
  return <BottomTabBar {...props} activeTintColor={tintColor} />;
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

export default DynamicNavigator;
