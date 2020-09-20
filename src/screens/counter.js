
import React, {useState} from 'react';
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

export const Counter = ({navigation}) => {
  const[count, setCount] = useState(0);
  return (
    <>
        <View style={{padding: 30, backgroundColor: "black", flex: 1}}>
            <View style={{flex: 1}}>
                <Text style={{fontSize: 50, fontWeight: "bold", color: "#fff"}}>Increment</Text>
                <Text style={{fontSize: 40, marginTop: -30, color: "#fff" }}>Counter</Text>
                <Text style={{color: "white", fontSize: 50, margin: 30}}>{count}</Text>
                <View>
                    <Button title="Increment" onPress={()=>setCount(count + 1)}/>
                </View>
                <View style={{height: 50}}></View>
                <View>
                    <Button title="Increment" onPress={()=>setCount(count - 1)}/>
                </View>
            </View>
        </View>
    </>
  );
};

