import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './comp/HomeScreen'
import ConsoleList from './comp/ConsoleList'
import ImageScreen from './comp/ImageScreen'
import CounterScreen from './comp/CounterScreen'
import ElementScreen from './comp/ElementScreen'
import PsDetails from './comp/PsDetail'
import PcList from './comp/PcList'
import GameList from './comp/GameList'
import GameDetail from './comp/GameDetail'
import GameDetailStar from './comp/GameDetailStar'
import NviDetail from './comp/NviDetail'

import {createStackNavigator,createAppContainer, createDrawerNavigator} from 'react-navigation';

const navigator = createStackNavigator({
  Home : HomeScreen,
  Csole : ConsoleList,
  Img : ImageScreen,
  Ctr : CounterScreen,
  Elm : ElementScreen,
  Psd : PsDetails,
  Pcli : PcList,
  Gli : GameList,
  Gdt : GameDetail,
  Gst : GameDetailStar,
  Nvi : NviDetail

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
