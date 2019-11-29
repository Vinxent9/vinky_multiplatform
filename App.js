import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ConsoleList from './comp/ConsoleList'
import ElementScreen from './comp/ElementScreen'
import PsDetails from './comp/PsDetail'
import PcList from './comp/PcList'
import GameList from './comp/GameList'
import GameDetail from './comp/GameDetail'
import GameDetailStar from './comp/GameDetailStar'
import NviDetail from './comp/NviDetail'
import HomeScreenNu from './comp/HomeScreenNu'

import {createStackNavigator,createAppContainer, createDrawerNavigator} from 'react-navigation';

const navigator = createStackNavigator({
  Csole : ConsoleList,
  Elm : ElementScreen,
  Psd : PsDetails,
  Pcli : PcList,
  Gli : GameList,
  Gdt : GameDetail,
  Gst : GameDetailStar,
  Nvi : NviDetail,
  Homenu : HomeScreenNu

},
  {
    initialRouteName : 'Homenu',
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
