/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Login} from './src/screens/Login';
import {Register} from './src/screens/Register';
import {Wellcome} from './src/screens/wellcome';
import {Counter} from './src/screens/counter';
const Stack = createStackNavigator();
const App: () => React$Node = () => {

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Wellcome">
          <Stack.Screen name="Wellcome" component={Wellcome} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Counter" component={Counter} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
