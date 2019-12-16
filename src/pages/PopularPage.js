/*
 * @Author: liub
 * @Date: 2019-12-12 19:38:09
 * @LastEditors: liub
 * @LastEditTime: 2019-12-14 16:12:30
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, View, Button} from 'react-native';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import NavigationUtils from '../utils/NavigationUtils';
const PopularPage = () => {
  return (
    <View style={styles.container}>
      <Button
        title="Go to Detail"
        onPress={() => NavigationUtils.NavigationToPage('Detail')}
      />
    </View>
  );
};
const TopNavigator = createAppContainer(
  createMaterialTopTabNavigator({
    PopularPage1: {
      screen: PopularPage,
      navigationOptions: {
        title: 'Tab1',
      },
    },
    PopularPage2: {
      screen: PopularPage,
      navigationOptions: {
        title: 'Tab2',
      },
    },
  }),
);
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

export default TopNavigator;
