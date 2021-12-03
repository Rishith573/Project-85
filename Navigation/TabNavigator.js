import React from 'react';
import {StyleSheet} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CreatePost from '../Screens/CreatePost';
import Feed from '../Screens/Feed';
import {RFValue} from 'react-native-responsive-fontsize'

const materialTab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
  return(
    <materialTab.Navigator
    labeled={false}
    barStyle={styles.bottomTabStyle}
screenOptions={({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;
    if (route.name === 'Feed') {
      iconName = focused
        ? 'book'
        : 'book-outline';
    } else if (route.name === 'CreatePost') {
      iconName = focused
        ? 'create'
        : 'create-outline';
    }
    return <Ionicons name={iconName} size={RFValue(20)} color={color} style={styles.icons} />;
  },
})}
  activeColor={"#ee8249"}
  inactiveColor={"gray"}
>
<materialTab.Screen name="CreatePost" component={CreatePost} />
<materialTab.Screen name="Feed" component={Feed} />

  
</materialTab.Navigator>
)
}
      
const styles = StyleSheet.create({
  bottomTabStyle: {
    backgroundColor: "#2f345d",
    height: "8%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: "hidden",
    position: "absolute"
  },
  icons: {
    width: RFValue(30),
    height: RFValue(30)
  }
});

export default BottomTabNavigator;