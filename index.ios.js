/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Relay from 'react-relay';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import App from './app';
import AppRoute from './route/appRoute';

Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer("http://localhost:1337/graphy")
);

class ExampleApp extends Component {
  render() {
    return (
      <Relay.RootContainer
        Component={App}
        route={new AppRoute()}
      />
    );
  }
}

AppRegistry.registerComponent('ExampleApp', () => ExampleApp);
