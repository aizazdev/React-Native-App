
import React, { useState } from 'react';
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

export const List = ({users}) => {
 

  return (
    <>

      <View style={{flex:1, justifyContent: "center"}}>
        <Text style={{textAlign: "center", fontSize: 30}}>List Of Users</Text>
        {users}
      </View>
    </>
  );
};

