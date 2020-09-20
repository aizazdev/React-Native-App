
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


export const Wellcome = ({navigation}) => {
  
  return (
    <>
        <View style={{padding: 30, backgroundColor: "black", flex: 1}}>
            <View style={{flex: 1}}>
                <Text style={{fontSize: 50, fontWeight: "bold", color: "#fff"}}>Android</Text>
                <Text style={{fontSize: 40, marginTop: -30, color: "#fff" }}>Wear</Text>
            </View>
            <View style={{flex: 1}}>
              <Button title="Counter" onPress={()=>{navigation.navigate('Counter')}}/>
            </View>
            <View style={{flex:1}}>
                <Text style={{fontSize: 30, color: "#fff"}}>Lets Go To SET Up</Text>
                <Text style={{fontSize: 15, color: "#fff"}}>It should only take 
                    <Text style={{color: "red", textDecorationLine: "underline", fontWeight: "bold"}} onPress={()=> navigation.navigate("Login")}> 
                        Login  
                    </Text> 
                      or 
                    <Text style={{color: "red",textDecorationLine: "underline", fontWeight: "bold"}} onPress={()=>{navigation.navigate("Register")}}> 
                       Register 
                    </Text>
                    a couple of minutes to take of
                </Text>
            </View>
        </View>
    </>
  );
};

