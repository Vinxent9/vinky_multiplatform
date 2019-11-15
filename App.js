import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './comp/HomeScreen'
import ConsoleList from './comp/ConsoleList'
import ImageScreen from './comp/ImageScreen'
import CounterScreen from './comp/CounterScreen'
import ElementScreen from './comp/ElementScreen'

import {createStackNavigator,createAppContainer, createDrawerNavigator} from 'react-navigation';

const navigator = createStackNavigator({
  Home : HomeScreen,
  Csole : ConsoleList,
  Img : ImageScreen,
  Ctr : CounterScreen,
  Elm : ElementScreen
},
  {
    initialRouteName : 'Home',
    defaultNavigationOptions:
    {
      header : null
    }
  }
);



export default createAppContainer(navigator);
/*
export default function App() {
  return (
    <View style={styles.container}>
    <HomeScreen />
    
    </View>
  );
}
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
