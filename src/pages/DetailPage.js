/*
 * @Author: liub
 * @Date: 2019-12-12 19:38:09
 * @LastEditors: liub
 * @LastEditTime: 2019-12-14 10:27:49
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const DetailPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Details</Text>
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

export default DetailPage;
