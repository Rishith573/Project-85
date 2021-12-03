import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import Profile from '../Screens/Profile';
import StackNavigator from './StackNavigator';

const Drawer = createDrawerNavigator();

export default class DrawerNavigator extends React.Component{
    render(){
        return(
            <Drawer.Navigator screenOptions={{headerShown: false}}>
                <Drawer.Screen name="Home" component={StackNavigator}/>
                <Drawer.Screen name="Profile" component={Profile}/>
            </Drawer.Navigator>
        )
    }
}