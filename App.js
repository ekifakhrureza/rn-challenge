import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/components/Home'
import AboutScreen from './src/components/About'
import DetailScreen from './src/components/Details'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './src/store';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Details: DetailScreen,
  About: AboutScreen
});


const RootStack = createBottomTabNavigator({
  Characters: HomeStack,
  About: AboutScreen
});

export default class App extends React.Component {
  render() {
    return (
      // <View>
        <Provider store={store}><RootStack /></Provider>
      //     <RootStack2 />
      // </View>  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
