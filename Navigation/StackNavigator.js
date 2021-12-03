import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import PostScreen from '../Screens/PostScreen';

const Stack = createStackNavigator();

export default class StackNavigator extends React.Component{
    render(){
        return(
            <Stack.Navigator
                initialRouteName= 'TabNavigator'
                screenOptions={{
                    headerShown :false
                }}
            >
                <Stack.Screen
                    name='TabNavigator'
                    component={TabNavigator}
                />
                <Stack.Screen
                    name='PostScreen'
                    component={PostScreen}
                />
            </Stack.Navigator>
        )
    }
}