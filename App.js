import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './comp/HomeScreen'
import ConsoleList from './comp/ConsoleList'
import ImageScreen from './comp/ImageScreen'
import {createStackNavigator,createAppContainer} from 'react-navigation';

const navigator = createStackNavigator({
  Home : HomeScreen,
  Csole : ConsoleList,
  Img : ImageScreen
},
  {
    initialRouteName : 'Home',
    defaultNavigationOptions:
    {
      headerTitle : 'Cobadlu',
      headerStyle: {
        backgroundColor: '#3BBA9C'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        textAlign : 'center',
        fontWeight: 'bold'
      }
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
