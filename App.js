import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './Navigation/DrawerNavigator';
import {firebaseConfig} from './config.js';
import firebase from 'firebase';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import LoadingScreen from './Screens/LoadingScreen';
import LoginScreen from './Screens/LoginScreen';
import DashboardScreen from './Screens/DashboardScreen';



if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}else{
  firebase.app();
}

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  LoginScreen: LoginScreen,
  DashboardScreen: DashboardScreen
})

const AppNavigator = createAppContainer(AppSwitchNavigator);



export default class App extends React.Component{
  render(){
    return(
      // <NavigationContainer>
      //   <DrawerNavigator/>
      // </NavigationContainer>
      <AppNavigator/>
    )
  }
}