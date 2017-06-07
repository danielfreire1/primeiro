import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';

import HomeScreen from './src/screen/homeScreen'

export default class primeiro extends Component {

  render() {
    return (
      <View style={styles.container}>
        <HomeScreen></HomeScreen>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('primeiro', () => primeiro);
