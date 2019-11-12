/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  NativeModules,
} from 'react-native';

const Communicator = NativeModules.ReactCommunicator;

const App = () => {
  const onNav = () => {
    Communicator.navigateToNative();
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>React native</Text>
      <Button title="Nav to Native screen" onPress={onNav} />
    </View>
  );
};

export default App;
