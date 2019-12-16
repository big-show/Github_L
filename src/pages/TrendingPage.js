/*
 * @Author: liub
 * @Date: 2019-12-12 19:38:09
 * @LastEditors: liub
 * @LastEditTime: 2019-12-14 17:37:21
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

const TrendingPage = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>TrendingPage</Text>
      <Button
        title="改变主题样式"
        onPress={() => {
          props.navigation.setParams({
            tintColor: 'red',
          });
        }}
      />
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

export default TrendingPage;
