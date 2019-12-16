/*
 * @Author: liub
 * @Date: 2019-12-12 19:38:09
 * @LastEditors: liub
 * @LastEditTime: 2019-12-14 13:07:56
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useEffect} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import NavigationUtils from '../utils/NavigationUtils';
const WelcomePage = props => {
  useEffect(() => {
    const timer = setTimeout(() => {
      NavigationUtils.NavigationToHome(props.navigation);
    }, 2000);
    return function() {
      timer && clearTimeout(timer);
    };
  });
  return (
    <View style={styles.container}>
      <Text style={styles.text}>WelcomePage</Text>
    </View>
  );
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

export default WelcomePage;
