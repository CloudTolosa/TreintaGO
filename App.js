import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Dimensions, View, ScrollView, Image, ImageBackground, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Login from './src/screens/containers/begin/login';
import Map from './src/screens/containers/drashboard/map';
import ViewWebSite from './src/screens/containers/drashboard/viewWebSite';
import EStyleSheet from 'react-native-extended-stylesheet';
import * as firebase from "firebase"; 

// define REM depending on screen width
const entireScreenWidth = Dimensions.get('window').width;

// calc styles
EStyleSheet.build({
  $rem: entireScreenWidth / 300,
  $colorPrimary: '#fbd10a',
  $colorSecondary: '#fc7b12',
  $colorLight: '#f2f2f2',
  $colorGray: '#616161',
});

const Begin = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
    }
  },
  Map: {
    screen: Map,
    navigationOptions: {
      header: null,
    }
  },
  ViewWebSite: {
    screen: ViewWebSite,
    headerTitle: "Treinta",
      headerTitleStyle: { 
        textAlign: 'center',
        flex:1
      },
      headerTintColor: '#fc7b12',
  },
});

const App = createSwitchNavigator({
  Auth: {
    screen: Begin
    //screen: Home,
  }
});

export default createAppContainer(App);

