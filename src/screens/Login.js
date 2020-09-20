
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
import {List} from './list'
export const Login = ({navigation}) => {
  textInput = {
    backgroundColor: "#fff",
    marginTop: 10,
  }
  const[inputText, setInputText] = useState("");
  const[inputPassword, setInputPassword] = useState("");

  userInput = ()=> {
    if(inputPassword.length < 6 ) {
      alert('Password Needs to 6 characters long');
    } else {
      alert('Great you are Awesome');
    }

  } 
  

  return (
    <>

      <View style={{backgroundColor: "#eaebe3", flex: 1, justifyContent: "center" }}>
        <Text style={{alignContent: "center", textAlign: "center", fontSize: 35,color: "black"}}> Login </Text>
        <Text style={{alignContent: "center", textAlign: "center", fontSize: 18,color: "black"}}>{inputText.length}</Text>
        <View style={{marginTop: 20, marginRight: 25, marginLeft: 25}}>
          <TextInput
           placeholder="Enter Name"
           placeholderTextColor="black"
           style={textInput} 
            onChangeText = {t => setInputText(t)}
           />
           
          <TextInput 
           placeholder="Enter Password" 
           placeholderTextColor="black" 
           style={textInput}
           onChangeText = {t => setInputPassword(t)} 
          />
          
          <View style={{marginTop: 20}}></View>
          <Button title="Login" onPress={userInput} />
          
          <View style={{marginTop: 20, fontSize: 25}}>
              <Text> <Text style={{color: "red"}} onPress={()=>navigation.navigate("Register")}>Register</Text> Your Self</Text>
          </View>
        
        </View>
      </View>
    </>
  );
};

