
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

export const Register = ({navigation}) => {
  textInput = {
    backgroundColor: "#fff",
    marginTop: 10,
  }
  return (
    <>

      <View style={{backgroundColor: "#eaebe3", flex: 1, justifyContent: "center" }}>
        <Text style={{alignContent: "center", textAlign: "center", fontSize: 35,color: "black"}}> Login </Text>
        <Text style={{alignContent: "center", textAlign: "center", fontSize: 18,color: "black"}}>Please Login Or Register with your Credentials</Text>
        <View style={{marginTop: 20, marginRight: 25, marginLeft: 25}}>
          <TextInput placeholder="Enter Name" placeholderTextColor="black" style={textInput} />
          <TextInput placeholder="Enter Password" placeholderTextColor="black" style={textInput} />
          <TextInput placeholder="Enter Phone" placeholderTextColor="black" style={textInput} />
          <TextInput placeholder="Enter Address" placeholderTextColor="black" style={textInput} />
          
          <View style={{marginTop: 20}}></View>
          <Button title="Rgister" onPress={()=>{
            navigation.navigate("Login");
          }} />
          <View style={{marginTop: 20, fontSize: 25}}>
              <Text>Back To <Text style={{color: "red"}} onPress={()=>navigation.navigate("Login")}>Login</Text> Screen</Text>
          </View>
        </View>
      </View>
    </>
  );
};

